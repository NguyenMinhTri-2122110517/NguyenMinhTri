import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import database from "../../../database.json";
import { FaTrash, FaEdit } from "react-icons/fa";

const Product = () => {
  const products = database.product;

  const [name, setName] = useState("");
  const [category_id, setCategory_id] = useState(0);
  const [brand_id, setBrand_id] = useState(0);
  const [price, setPrice] = useState("");
  const [pricesale, setPricesale] = useState("");
  const [qty, setQty] = useState();
  const [detail, setDetail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    //luu vao co so du lieu
    const product = {
      name: name,
      category_id: category_id,
      brand_id: brand_id,
      price: price,
      pricesale: pricesale,
      qty: qty,
      detail: detail,
      description: description,
      status: status,
    };
    console.log(product);
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản Lí Danh Mục</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn danger">
              <FaTrash />
              Thùng Rác
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <div className="md-3">
                <label htmlFor="name">Tên Sản Phẩm</label>
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
                <label htmlFor="category_id">Category_Id</label>
                <select
                  className="form-select"
                  id="category_id"
                  value={category_id}
                  onChange={(e) => setCategory_id(e.target.value)}
                >
                  <option value="0">None</option>
                </select>
              </div>
              <div className="md-3">
                <label htmlFor="brand_id">Brand_Id</label>
                <select
                  className="form-select"
                  id="brand_id"
                  value={category_id}
                  onChange={(e) => setBrand_id(e.target.value)}
                >
                  <option value="0">None</option>
                </select>
              </div>
              <div className="md-3">
                <label htmlFor="qty">Số Lượng</label>
                <input
                  type="text"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  id="qty"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="price">Giá Sản Phẩm</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="price"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="detail">Chi Tiết</label>
                <input
                  type="text"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  id="detail"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="pricesale">Giá Khuyến Mãi</label>
                <input
                  type="text"
                  value={pricesale}
                  onChange={(e) => setPricesale(e.target.value)}
                  id="pricesale"
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
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>Category_id</th>
                  <th>brand_id</th>
                  <th>giá</th>
                  <th>giá_sale</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.length > 0 &&
                  products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={product.image} alt={product.image} />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.slug}</td>

                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/product/edit/" + product.id}
                          >
                            <FaEdit />
                          </Link>
                          <button className="btn btn-danger me-1">
                            <FaTrash />
                          </button>
                        </td>

                        <td>{product.Category_id}</td>
                        <td>{product.brand_id}</td>
                        <td>{product.price}</td>
                        <td>{product.price_sale}</td>
                        <td>{product.id}</td>
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

export default Product;
