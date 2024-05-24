import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from '../../../database.json';

const Orders = () => {
  const orders = Database.orders;

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='row'>
          <div className="col-md-6">
            <strong>Quản lý danh mục</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className='btn btn-sm btn-danger'><FaTrash /> Thùng rác</Link>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <div className="row">
          <div className="col-md-3">
            THIẾT KẾ FORM THÊM
          </div>
          <div className="col-md-9">
            <table className='table table-borderssed table-hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên danh mục</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Note</th>
                  <th className='text-center' style={{ width: "150px" }}>Chức năng</th>
                  <th className='text-center' style={{ width: "50px" }}>ID</th>
                </tr>
              </thead>
              <tbody>
                {orders && orders.length > 0 ? (
                  orders.map(orders => (
                    <tr key={orders.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{orders.name}</td>
                      <td>{orders.phone}</td>
                      <td>{orders.email}</td>
                      <td>{orders.address}</td>
                      <td>{orders.note}</td>
                      <td className='text-center'>
                        <Link className='btn btn-sm btn-info me-1' to={`/admin/orders/edit/${orders.id}`}><FaEdit /></Link>
                        <button className='btn btn-sm btn-danger'><FaTrash /></button>
                      </td>
                      <td className='text-center'>{orders.id}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">Không có danh mục nào</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
