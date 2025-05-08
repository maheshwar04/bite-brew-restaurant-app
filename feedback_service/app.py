from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Configure SQLite database
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'ecommerce.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, nullable=False)
    product_id = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comments = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

# Create the database tables
with app.app_context():
    db.create_all()

@app.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    feedback = Feedback(
        customer_id=data.get('customer_id'),
        product_id=data.get('product_id'),
        rating=data.get('rating'),
        comments=data.get('comments')
    )
    db.session.add(feedback)
    db.session.commit()
    return jsonify({"message": "Feedback submitted successfully"}), 201

@app.route('/feedback', methods=['GET'])
def get_feedback():
    product_id = request.args.get('product_id')
    feedbacks = Feedback.query.filter_by(product_id=product_id).all()
    return jsonify([{
        'id': f.id,
        'customer_id': f.customer_id,
        'product_id': f.product_id,
        'rating': f"{f.rating}/5",
        'comments': f.comments,
        'created_at': f.created_at
    } for f in feedbacks]), 200

if __name__ == "__main__":
    app.run(port=7004)
