import Home from '../pages/frontend/Home.jsx';
import Contact from '../pages/frontend/Contact.jsx';
import Product from '../pages/frontend/Product.jsx';
import ProductCategory from '../pages/frontend/ProductCategory.jsx';
import ProductBrand from '../pages/frontend/ProductBrand.jsx';
import ProductDetail from '../pages/frontend/ProductDetail.jsx';
const RouterSite =[
    {
        index: true,
        element: <Home />,
    },
    { 
        path: "lien-he",
        element: <Contact />
    },
    { 
        path: "san-pham",
        element: <Product />
    },
    { 
        path: "danh-muc/:slug",
        element: <ProductCategory />
    },
    { 
        path: "thuong-hieu/:slug",
        element: <ProductBrand />
    },
    { 
        path: "san-pham/:slug",
        element: < ProductDetail/>
    },
];
export default RouterSite;