import Product from '../pages/backend/Product.jsx';
import Category from '../pages/backend/Category.jsx';
const RouterAdmin =[

        {
          path: "product",
          element: <Product />,
        },
        { 
          path: "category",
          element: <Category /> },
    
];
export default RouterAdmin;