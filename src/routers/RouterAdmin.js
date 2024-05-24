import Product from '../pages/backend/Product';
import Category from '../pages/backend/Category';
import Menu from '../pages/backend/Menu';
import Post from '../pages/backend/Post';
import Banner from '../pages/backend/Banner';
import Brand from '../pages/backend/Brand';
import Contact from '../pages/backend/Contact';
import Order from '../pages/backend/Order';
import Orderdetail from '../pages/backend/Orderdetail';
import Topic from '../pages/backend/Topic';
import User from '../pages/backend/User';
const RouterAdmin =[

        {
          path: "product",
          element: <Product />,
        },
        { 
          path: "category",
          element: <Category /> },
        { 
          path: "menu",
          element: <Menu /> }, 
        { 
          path: "post",
          element: <Post /> },
        { 
          path: "banner",
          element: <Banner /> },
        { 
          path: "brand",
          element: <Brand /> },
        { 
          path: "contact",
          element: <Contact /> },
        { 
          path: "order",
          element: <Order /> },
        { 
          path: "orderdetail",
          element: <Orderdetail /> },
        { 
          path: "topic",
          element: <Topic /> },
        { 
          path: "user",
          element: <User /> },    
];
export default RouterAdmin;