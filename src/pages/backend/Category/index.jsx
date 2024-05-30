import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from '../../../database.json';

const Category = () => {
  const categories = Database.categorys; // Sử dụng 'categorys' từ đối tượng JSON
  const [name, setName] = useState('');
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = {
      name:name,
      parent_id:parent_id,
      sort_order:sort_order,
      description:description,
      status:status,
    };
    console.log(category);
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
                <label htmlFor="parent_id">Cấp cha</label>
                <select
                  className='form-select'
                  id='parent_id'
                  value={parent_id}
                  onChange={(e) => setParentId(Number(e.target.value))}
                >
                  <option value="0">None</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                <input
                  type="number"
                  id='sort_order'
                  value={sort_order}
                  onChange={(e) => setSortOrder(Number(e.target.value))}
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
                  onChange={(e) => setStatus(Number(e.target.value))}
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
                {categories && categories.length > 0 ? (
                  categories.map(category => (
                    <tr key={category.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img src={category.image} alt={category.name} style={{ width: '50px', height: '50px' }} />
                      </td>
                      <td>{category.name}</td>
                      <td>{category.slug}</td>
                      <td className='text-center'>
                        <Link className='btn btn-sm btn-info me-1' to={`/admin/category/edit/${category.id}`}><FaEdit /></Link>
                        <button className='btn btn-sm btn-danger'><FaTrash /></button>
                      </td>
                      <td className='text-center'>{category.id}</td>
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

export default Category;
