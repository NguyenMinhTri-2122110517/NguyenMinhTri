import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaEdit, FaTrash } from "react-icons/fa";

const OrderDetail = () => {
  const orderDetails = database.orderDetails; // Đảm bảo tên biến khớp với dữ liệu trong tệp JSON

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lý đơn hàng</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn-danger">
              Thùng rác
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <strong>Thiết kế form thêm</strong>
          </div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID Đơn hàng</th>
                  <th>ID Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Số tiền</th>
                  <th className="text-center" style={{ width: "150px" }}>Chức năng</th>
                  <th className="text-center" style={{ width: "50px" }}>ID</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails && orderDetails.length > 0 ? (
                  orderDetails.map((orderDetail) => (
                    <tr key={orderDetail.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{orderDetail.order_id}</td>
                      <td>{orderDetail.product_id}</td>
                      <td>{orderDetail.price}</td>
                      <td>{orderDetail.qty}</td>
                      <td>{orderDetail.amount}</td>
                      <td className="text-center">
                        <Link
                          className="btn btn-sm btn-info me-1"
                          to={`/admin/orderdetail/edit/${orderDetail.id}`}
                        >
                          <FaEdit />
                        </Link>
                        <button className="btn btn-sm btn-danger me-1">
                          <FaTrash />
                        </button>
                      </td>
                      <td className="text-center">{orderDetail.id}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">Không có chi tiết đơn hàng nào</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default OrderDetail;
