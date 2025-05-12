import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "../styles.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28FD0"];

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7004/feedback/all")
      .then((res) => setFeedbacks(res.data));
    axios
      .get("http://localhost:8081/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  const getProductName = (productId) => {
    const product = products.find((p) => p.productId === productId);
    return product ? product.name : null;
  };

  const twoWeeksAgo = dayjs().subtract(14, "day");

  const recentFeedbacks = feedbacks.filter((fb) =>
    dayjs(fb.createdAt).isAfter(twoWeeksAgo)
  );

  const ratingData = [1, 2, 3, 4, 5].map((rating) => ({
    name: `${rating} Star`,
    value: feedbacks.filter(
      (f) => parseInt(f.rating.split("/")[0], 10) === rating
    ).length,
  }));

  const ratingOverTimeData = Object.entries(
    recentFeedbacks.reduce((acc, fb) => {
      const date = dayjs(fb.created_at).format("YYYY-MM-DD");
      const ratingValue = parseInt(fb.rating.split("/")[0], 10);
      acc[date] = acc[date] || { total: 0, count: 0 };
      acc[date].total += ratingValue;
      acc[date].count += 1;
      return acc;
    }, {})
  ).map(([date, stats]) => ({
    date,
    avgRating: (stats.total / stats.count).toFixed(2),
  }));

  const positiveFeedbacks = feedbacks.filter(
    (fb) => parseInt(fb.rating.split("/")[0], 10) === 5
  );
  const negativeFeedbacks = feedbacks.filter(
    (fb) => parseInt(fb.rating.split("/")[0], 10) === 1
  );

  const mostPositiveProducts = positiveFeedbacks.reduce((acc, fb) => {
    const name = getProductName(fb.product_id);
    if (name) acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  const mostNegativeProducts = negativeFeedbacks.reduce((acc, fb) => {
    const name = getProductName(fb.product_id);
    if (name) acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="container mt-5 dashboard-container shadow-lg p-4 rounded">
      <h2 className="dashboard-title text-center mb-5">
        📊 Feedback Analytics Dashboard
      </h2>

      {/* Rating Distribution */}
      <section className="mb-5">
        <h5 className="section-heading">⭐ Rating Distribution</h5>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ratingData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {ratingData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Average Rating Over Time */}
      <section className="mb-5">
        <h5 className="section-heading">📅 Average Rating (Last 2 Weeks)</h5>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ratingOverTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 5]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="avgRating"
                stroke="#00C49F"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Most Positive Products */}
      <section className="mb-5">
        <h5 className="section-heading">🏅 Most Positive Products</h5>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={Object.entries(mostPositiveProducts).map(
                ([name, count]) => ({ name, count })
              )}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Most Negative Products */}
      <section className="mb-3">
        <h5 className="section-heading">⚠️ Most Negative Products</h5>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={Object.entries(mostNegativeProducts).map(
                ([name, count]) => ({ name, count })
              )}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#ff7f50" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default FeedbackDashboard;
