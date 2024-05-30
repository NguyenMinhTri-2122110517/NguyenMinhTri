import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaEdit, FaTrash } from "react-icons/fa";

const Orderdetail = () => {
  const orderdetails = database.orderdetail;

  // const [order_id, setOrder_id] = useState(0);
  // const [product_id, setProduct_id] = useState(0);
  // const [price, setPrice] = useState("");
  // const [qty, setQty] = useState();
  // const [amount, setAmount] = useState();
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản Lí Danh Muc</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn danger">
              {" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">Thiet Ke Form Them</div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order_ID</th>
                  <th>Product_ID</th>
                  <th>Price</th>
                  <th>Chức Năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {orderdetails &&
                  orderdetails.length > 0 &&
                  orderdetails.map((orderdetail) => {
                    return (
                      <tr key={orderdetail.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{orderdetail.order_id}</td>
                        <td>{orderdetail.product_id}</td>
                        <td>{orderdetail.price}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/orderdetail/edit/" + orderdetail.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{orderdetail.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Orderdetail;
