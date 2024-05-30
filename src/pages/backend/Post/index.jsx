import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaEdit, FaTrash } from "react-icons/fa";

const Post = () => {
  const posts = database.post;
  const [name, setName] = useState("");
  const [topic_id, setTopicId] = useState(0);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      name: name,
      title: title,
      detail: detail,
      topic_id: topic_id,
      type: type,
      description: description,
      status: status,
    };
    console.log(post);
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan li danh muc</strong>
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
                <label htmlFor="name">Tên Bài Viết</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="topic_id">Topic_Id</label>
                <select
                  className="form-select"
                  id="topic_id"
                  value={topic_id}
                  onChange={(e) => setTopicId(e.target.value)}
                >
                  <option value="0">None</option>
                </select>
              </div>
              <div className="md-3">
                <label htmlFor="title">Tiêu Đề</label>
                <select
                  className="form-select"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="0">Chọn Vị Trí</option>
                </select>
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
                <label htmlFor="detail">Chi Tiết</label>
                <input
                  type="text"
                  id="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="type">Loại</label>
                <input
                  type="text"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="image">Hình Ảnh</label>
                <input type="file" id="image" className="form-control" />
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
                  <th>Topic_ID</th>
                  <th>Tiêu Đề</th>
                  <th>Chi Tiết</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {posts &&
                  posts.length > 0 &&
                  posts.map((post) => {
                    return (
                      <tr key={post.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{post.topic_id}</td>
                        <td>{post.title}</td>
                        <td>{post.detail}</td>
                        <td>{post.slug}</td>

                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/post/edit/" + post.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-sm btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>
                        <td>{post.id}</td>
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

export default Post;
