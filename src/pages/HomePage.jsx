import { Fragment, useState, useEffect } from "react";
import Header from "../components/header/Header";
import AddItem from "../components/add/AddItem";

function HomePage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="container p-0">
        <h3 className="text-center mt-5 mb-3">Zakazlar Ro`yxati</h3>
        <AddItem orders={orders} />
      </div>
    </Fragment>
  );
}

export default HomePage;