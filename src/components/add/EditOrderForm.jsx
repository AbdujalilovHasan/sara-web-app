import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddOrderForm.css";

function EditOrderForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    name: "",
    phone: "",
    comment: "",
  });

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const selectedOrder = orders[id];
    if (selectedOrder) {
      setFormData(selectedOrder);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders[id] = formData;
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("O'zgarishlar saqlandi!");
    navigate("/");
  };

  const handleDelete = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.splice(id, 1);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Zakaz o'chirildi!");
    navigate("/");
  };

  return (
    <div className="container p-3">
      <h3 className="text-center mb-4">Zakazni Tahrirlash</h3>
      <form onSubmit={handleSave}>
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
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="floating-label mb-3">
          <span className="form-label">Telefon</span>
          <input
            type="tel"
            className="form-control"
            name="phone"
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
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="text-center d-flex gap-2">
          <button type="submit" className="btn btn-success w-50">
            O'zgarishni Saqlash
          </button>
          <button
            type="button"
            className="delete-btn btn btn-danger w-50"
            onClick={handleDelete}
          >
            Zakazni O'chirish
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditOrderForm;