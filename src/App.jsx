import './App.css';
import React, {useState}  from 'react';
import Nav from './pages/Nav'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { signInWithGoogle } from './pages/Firebase/Firebase';
import Store from './pages/Store';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { signOut } from 'firebase/auth'
import { auth } from './pages/Firebase/Firebase';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  const [products, setproducts] = useState([])
  const [total, setTotal] =  useState(0);
  var priceCount = 0;
  const router = createBrowserRouter(
    createRoutesFromElements(
         <Route path='/' element={<Root />}>
              <Route index element={<Nav setproducts={setproducts} products={products} setTotal={setTotal} total={total} priceCount={priceCount}  />}/>
              <Route path='/store' element={<Store setproducts={setproducts} products={products} setTotal={setTotal} total={total} priceCount={priceCount} />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/cart' element={<Cart setproducts={setproducts} products={products} setTotal={setTotal} total={total} priceCount={priceCount} />}/>
         </Route>
    )
  )

  return (
    <div className='App'>
        <RouterProvider router={router} />
    </div>
  )
}
const Root = () => {
  const navigate = useNavigate()
  const signOutFunc = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('pfp');
      localStorage.removeItem('id');
      localStorage.removeItem('publish');
      window.location.reload();
    })
  }
  return(
      <>
       <header className='headerMain'>
        <ul>
          <li><NavLink to={'/'} activeclassname='active' >home</NavLink></li>
          <li><NavLink to={'/store'} activeclassname='active'>store</NavLink></li>
          <li><NavLink to={'/contact'} activeclassname='active'>contact</NavLink></li>
        </ul>
        <div className="account">
          <button className='dfk shopCart' onClick={() => navigate('/cart')}>
          <AiOutlineShoppingCart />
          </button>
          {localStorage.getItem('id') ? 
          <button onClick={ signOutFunc} className='dfk'><img src={localStorage.getItem("pfp")}/> {localStorage.getItem('name')}</button>
          :
          <button onClick={ signInWithGoogle }>login</button>
          }
        </div>
      </header>
       <Outlet />
      </>
  )
}
export default App;
