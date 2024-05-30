import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaEdit, FaTrash } from "react-icons/fa";

const Topic = () => {
  const topics = database.topic;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    //luu vao co so du lieu
    const topic = {
      name: name,
      description: description,
      status: status,
    };
    console.log(topic);
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
                <label htmlFor="name">Tên Topic</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="desciption">Mô Tả</label>
                <input
                  type="text"
                  id="desciption"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                />
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
                  <th>Tên danh mục</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>Mô tả</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {topics &&
                  topics.length > 0 &&
                  topics.map((topic) => {
                    return (
                      <tr key={topic.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={topic.image} alt={topic.image} />
                        </td>
                        <td>{topic.name}</td>
                        <td>{topic.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/topic/edit/" + topic.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{topic.description}</td>
                        <td>{topic.id}</td>
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

export default Topic;
