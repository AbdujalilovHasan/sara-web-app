import "./AddItem.css";
import { Link } from "react-router-dom";

function AddItem({ orders }) {
  return (
    <div className="orders-container">
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <Link
            to={`/edit/${index}`}
            key={index}
            className="text-decoration-none"
          >
            <div className="order-card">
              <div className="order-card-left">
                <i className="bi bi-person-fill order-image"></i>
                <div className="order-details">
                  <h5 className="order-name">{order.name}</h5>
                  <p className="order-phone">{order.phone}</p>
                </div>
              </div>
              <div className="order-card-right">
                <p className="order-date">{order.date}</p>
                <p className="order-time">
                  {order.startTime} - {order.endTime}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="no-orders">Hozircha zakazlar yo'q.</p>
      )}
    </div>
  );
}

export default AddItem;