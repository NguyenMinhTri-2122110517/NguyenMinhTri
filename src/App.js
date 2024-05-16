import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './layoutStyle.css';
import logo from './assets/logo.webp';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import SliderComponent from './components/Slider';
import ChinhSachItem from './components/ChinhSachItem';
import ProductItem from './components/ProductItem';
import Database from "./data_fake.json";

function App() {
  const listproduct = Database.products;
  return (
    <>
      <header className='bg-white'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-3'>
              <img src={logo} alt='logo' className='img-fluid'/>
            </div>
            <div className='col-md-7'>
              <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container-fluid'>
                  <a className='navbar-brand' href='#'>Navbar</a>
                  <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                  </button>
                  <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                      <li className='nav-item'>
                        <a className='nav-link active' aria-current='page' href='#'>Home</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='#'>Link</a>
                      </li>
                      <li className='nav-item dropdown'>
                        <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                          Dropdown
                        </a>
                        <ul className='dropdown-menu'>
                          <li><a className='dropdown-item' href='#'>Action</a></li>
                          <li><a className='dropdown-item' href='#'>Another action</a></li>
                          <li><hr className='dropdown-divider' /></li>
                          <li><a className='dropdown-item' href='#'>Something else here</a></li>
                        </ul>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link disabled' aria-disabled='true'>Disabled</a>
                      </li>
                    </ul>
                    <form className='d-flex' role='search'>
                      <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                      <button className='btn btn-outline-success' type='submit'>Search</button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className='col-md-2 d-flex justify-content-end'>
              <CiSearch className='me-2' />
              <FaShoppingCart className='me-2' />
              <FaUser className='me-2' />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='slider'>
          <SliderComponent/>
        </div>
        <div className="section_chinhsach">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <ChinhSachItem imge="https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/section-image-shipping1.png?1711254041627" title="MIỄN PHÍ VẬN CHUYỂN" des="Với tất cả đơn hàng trên 10 triệu"/>
              </div>
              <div className="col-md-3">
                <ChinhSachItem imge="https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/section-image-shipping2.png?1711254041627" title="HOÀN TRẢ TIỀN" des="Được đổi trả trong vòng 7 ngày"/>
              </div>
              <div className="col-md-3">
                <ChinhSachItem imge="https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/section-image-shipping3.png?1711254041627" title="HỖ TRỢ TRỰC TUYẾN" des="Chúng tôi hỗ trợ 24/24 trong ngày"/>
              </div>
              <div className="col-md-3">
                <ChinhSachItem imge="https://bizweb.dktcdn.net/100/364/158/themes/802198/assets/section-image-shipping4.png?1711254041627" title="THANH TOÁN" des="Thanh toán theo nhiều cách khác nhau"/>
              </div>
            </div>
          </div>
        </div>
        <div className="section_flash_sale">
          <div className="container">
            <div className="row">
              {listproduct.map((pt,index)=>{
                return (
                  <div className="col-md" key={index}>
                    <ProductItem product={pt}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-dark"></footer>
    </>
  );
}

export default App;
