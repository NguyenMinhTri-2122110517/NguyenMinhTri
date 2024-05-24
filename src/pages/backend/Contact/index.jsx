import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from '../../../database.json';

const Contact = () => {
  const contact = Database.contact;

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
                  <th>Tên danh mục</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th className='text-center' style={{ width: "150px" }}>Chức năng</th>
                  <th className='text-center' style={{ width: "50px" }}>ID</th>
                </tr>
              </thead>
              <tbody>
                {contact && contact.length > 0 ? (
                  contact.map(contact => (
                    <tr key={contact.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.title}</td>
                      <td>{contact.content}</td>
                      <td className='text-center'>
                        <Link className='btn btn-sm btn-info me-1' to={`/admin/contact/edit/${contact.id}`}><FaEdit /></Link>
                        <button className='btn btn-sm btn-danger'><FaTrash /></button>
                      </td>
                      <td className='text-center'>{contact.id}</td>
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

export default Contact;
