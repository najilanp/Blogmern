import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Auth from './Components/Auth';
import Blogs from './Components/Blogs'
import UserBlog from './Components/UserBlog';
import BlogDetails from './Components/BlogDetails'
import AddBlog from './Components/AddBlog'



function App() {
  return (
    < >
      <Header/>
      <Routes>
        <Route path='/auth' element={<Auth/>} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/add' element={<AddBlog/>}/>
        <Route path='/myBlogs' element={<UserBlog/>}/>
        <Route path='/myBlogs/:id' element={<BlogDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
