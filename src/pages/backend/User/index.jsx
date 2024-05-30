import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaEdit, FaTrash } from "react-icons/fa";

const User = () => {
  const users = database.user;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    //luu vao co so du lieu
    const user = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      roles: roles,
      status: status,
    };
    console.log(user);
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan Li Danh Muc </strong>
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
          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <div className="md-3">
                <label htmlFor="name">Tên User</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="image">Hình Ảnh</label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="md-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="roles">Roles</label>
                <select
                  className="form-select"
                  id="roles"
                  value={status}
                  onChange={(e) => setRoles(e.target.value)}
                >
                  <option value="1">Customer</option>
                  <option value="2">Admin</option>
                </select>
              </div>
              <div className="md-3">
                <label htmlFor="status">Trạng Thái</label>
                <select
                  className="form-select"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Xuất Bản</option>
                  <option value="2"> Chưa Xuất Bản</option>
                </select>
              </div>
            </form>
          </div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>chức năng</th>
                  <th>Phone</th>
                  <th>Chức quyền</th>
                  <th>Địa Chỉ</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={user.image} alt={user.image} />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/user/edit/" + user.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{user.phone}</td>
                        <td>{user.roles}</td>
                        <td>{user.address}</td>
                        <td>{user.id}</td>
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

export default User;
