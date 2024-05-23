import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./layoutStyle.css"
import LayoutSite from './layouts/LayoutSite.jsx';
import { useRoutes } from 'react-router-dom';
import LayoutAdmin from './layouts/LayoutAdmin.jsx';
import NoPage from './pages/Nopage.jsx';
import RouterApp from './routers';

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children: RouterApp.RouterSite,
    },
    { 
      path: "admin",
      element: <LayoutAdmin />,
      children:RouterApp.RouterAdmin,
    },
    {
      path:"*",
      element:<NoPage/>
    }
  ]);

  return element;
}
export default App;