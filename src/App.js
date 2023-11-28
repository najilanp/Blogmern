import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Auth from './Components/Auth';
import Blogs from './Components/Blogs'
import UserBlog from './Components/UserBlog';
import BlogDetails from './Components/BlogDetails'
import AddBlog from './Components/AddBlog'
import Home from './Components/Home';



function App() {
  return (
    < >
      {/* <Header isloggedIn={false}/> */}
      <Routes>
      <Route path='/'element={<Home/>} />

        <Route path='/login'element={<Auth/>} />
        <Route path='/register'element={<Auth register/>} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/add' element={<AddBlog/>}/>
        <Route path='/myBlogs' element={<UserBlog/>}/>
        <Route path='/myBlogs/:id' element={<BlogDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
