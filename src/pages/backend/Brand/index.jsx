import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from '../../../database.json';

const Brand = () => {
  const brand = Database.brand; // Sử dụng 'brand' từ đối tượng JSON
  const [name, setName] = useState('');
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    const brand = {
      name:name,
      sort_order:sort_order,
      description:description,
      status:status,
    };
    console.log(brand);
    // Thêm logic để lưu danh mục vào cơ sở dữ liệu ở đây
  };

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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id='name'
                  className='form-control'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                <input
                  type="number"
                  id='sort_order'
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className='form-control'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Mô tả</label>
                <input
                  type="text"
                  id='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='form-control'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image">Hình ảnh</label>
                <input type="file" id='image' className='form-control' />
              </div>
              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  className='form-select'
                  id='status'
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Xuất Bản</option>
                  <option value="2">Chưa Xuất Bản</option>
                </select>
              </div>
              <div className="md-3 text-end">
                <button type='submit' className='btn btn-success px-5'>
                  Lưu
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-9">
            <table className='table table-bordered table-hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình</th>
                  <th>Tên danh mục</th>
                  <th>Slug</th>
                  <th className='text-center' style={{ width: "150px" }}>Chức năng</th>
                  <th className='text-center' style={{ width: "50px" }}>ID</th>
                </tr>
              </thead>
              <tbody>
                {brand && brand.length > 0 ? (
                  brand.map(brand => (
                    <tr key={brand.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img src={brand.image} alt={brand.name} style={{ width: '50px', height: '50px' }} />
                      </td>
                      <td>{brand.name}</td>
                      <td>{brand.slug}</td>
                      <td className='text-center'>
                        <Link className='btn btn-sm btn-info me-1' to={`/admin/brand/edit/${brand.id}`}><FaEdit /></Link>
                        <button className='btn btn-sm btn-danger'><FaTrash /></button>
                      </td>
                      <td className='text-center'>{brand.id}</td>
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

export default Brand;
