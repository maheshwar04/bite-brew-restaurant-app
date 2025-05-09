from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

from flasgger import Swagger
import socket
import py_eureka_client.eureka_client as eureka_client
import os

app = Flask(__name__)
Swagger(app)
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
@app.route('/info', methods=['GET'])
def info():
    return jsonify({
        "Name":"feedback-service",
        "Version":"0.0.0.1",
        "Description":"Feedback for the ordered items"
    })

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "Status":"UP"
    })

@app.route('/feedback', methods=['POST'])
def submit_feedback():
    """
    Add a new feedback
    ---
    parameters:
          - in: body
            name: body
            required: true
            # schema:
            #   $ref: 'https://api.swaggerhub.com/domains/smartbear-public/ProblemDetails/1.0.0#/components/schemas/Feedback'
    responses:
        201:
            description: Feedback submitted successfully
        400:
            description: Bad request (invalid input)
    """
    data = request.json
    if not data or 'customer_id' not in data or 'product_id' not in data or 'rating' not in data:
        return jsonify({"error": "Invalid input"}), 400
    
    feedback = Feedback(
        customer_id=data.get('customer_id'),
        product_id=data.get('product_id'),
        rating=data.get('rating'),
        comments=data.get('comments')
        comments=data.get('comments', '')
    )
    db.session.add(feedback)
    db.session.commit()
    return jsonify({"message": "Feedback submitted successfully"}), 201

@app.route('/feedback', methods=['GET'])
def get_feedback():
    product_id = request.args.get('product_id')
    feedbacks = Feedback.query.filter_by(product_id=product_id).all()
    """
    Get feedback for a specific product
    ---
    parameters:
        - in: query
          name: product_id
          required: true
          schema:
              type: integer
              description: ID of the product
    responses:
        200:
            description: List of feedbacks for the specified product
        404:
            description: Product not found
    """
    product_id = request.args.get('product_id')
    if not product_id:
        return jsonify({"error": "Product ID is required"}), 400
    
    feedbacks = Feedback.query.filter_by(product_id=product_id).all()
    if not feedbacks:
        return jsonify({"error": "No feedback found for this product"}), 404
    
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
        'created_at': f.created_at.isoformat()
    } for f in feedbacks]), 200


if __name__ == "__main__":
    ip=socket.gethostbyname(socket.gethostname())
    eureka_client.init(eureka_server="http://localhost:8761/eureka",app_name="feedback-service",instance_ip=ip,instance_port=7004)
    app.run(host="0.0.0.0",port=7004)
