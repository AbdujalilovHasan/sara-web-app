import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddOrderForm.css";

function AddOrderForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "2024-01-10",
    startTime: "16:00",
    endTime: "16:30",
    name: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(formData);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Zakaz saqlandi!");
    navigate("/");
  };

  return (
    <div className="container p-3">
      <h3 className="text-center mb-4">Zakaz qo’shish</h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-3">
          <div className="col-6">
            <input
              type="date"
              className="form-control date-input"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="col-6 d-flex flex-column gap-1">
            <input
              type="time"
              className="form-control"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
            <input
              type="time"
              className="form-control"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="floating-label mb-3">
          <span className="form-label">Ism</span>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Ism kiriting"
              value={formData.name}
              onChange={handleChange}
            />
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
          </div>
        </div>

        <div className="floating-label mb-3">
          <span className="form-label">Telefon</span>
          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="+998(**)-***-**-**"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="floating-label mb-3">
          <span className="form-label">Izoh</span>
          <textarea
            className="form-control"
            rows="3"
            name="comment"
            placeholder="Izoh qoldiring!"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary w-100">
            Zakazni saqlash
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddOrderForm;