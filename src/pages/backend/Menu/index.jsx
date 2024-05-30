import React from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const Menu = () => {
  //khai bao cac state luu tru gia tri cac control tren form
  const menus = database.menu;
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [table_id, setTable_id] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState(2);
  const handLeSubmit = (e) => {
    e.preventDefault();
    //luu vao co so du lieu
    const category = {
      name: name,
      table_id: table_id,
      link: link,
      type: type,
      status: status,
    };
    console.log(category);
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Danh mục sản phẩm </strong>
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
            <form onSubmit={handLeSubmit}>
              <div className="md-3">
                <label htmlFor="name">Thương Hiệu</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  id="link"
                  className="form-control"
                />
              </div>

              <div className="md-3">
                <label htmlFor="table_id">Chủ Đề Bài Viết</label>

                <input
                  type="text"
                  id="table_id"
                  value={table_id}
                  onChange={(e) => setTable_id(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
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
              <div className="md-3 text-end">
                <button type="submit" className="btn btn-success px-5">
                  Lưu
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên Banner</th>
                  <th>Vị trí</th>
                  <th>Liên kết</th>
                  <th>ID</th>
                  <th style={{ width: "100px" }}>chức năng</th>
                </tr>
              </thead>
              <tbody>
                {menus &&
                  menus.length > 0 &&
                  menus.map((menu) => {
                    return (
                      <tr key={menu.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={menu.image} alt={menu.image} />
                        </td>
                        <td>{menu.name}</td>
                        <td>{menu.position}</td>
                        <td>{menu.link}</td>
                        <td>{menu.id}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/category/edit/" + menu.id}
                          >
                            <FaRegEdit />
                          </Link>
                          <Link
                            className="btn btn-sm btn-danger me-1"
                            to={"/admin/category/trash/" + menu.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
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

export default Menu;
