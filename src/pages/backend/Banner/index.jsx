import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from '../../../database.json';

const Banner = () => {
  const banner = Database.banner;

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
            <table className='table table-bordered table-hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Position</th>
                  <th>Link</th>
                  <th>Tên danh mục</th>
                  <th className='text-center' style={{ width: "150px" }}>Chức năng</th>
                  <th className='text-center' style={{ width: "50px" }}>ID</th>
                </tr>
              </thead>
              <tbody>
                {banner && banner.length > 0 ? (
                  banner.map(({ id, position, link, name }) => (
                    <tr key={id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{position}</td>
                      <td>{link}</td>
                      <td>{name}</td>
                      <td className='text-center'>
                        <Link className='btn btn-sm btn-info me-1' to={`/admin/banner/edit/${id}`} aria-label="Edit"><FaEdit /></Link>
                        <button className='btn btn-sm btn-danger' aria-label="Delete"><FaTrash /></button>
                      </td>
                      <td className='text-center'>{id}</td>
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

export default Banner;
