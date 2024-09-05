import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginStatus } from './features/user/userSlice';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import NewPost from './pages/NewPost/NewPost';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
  const dispatch = useDispatch();
  const { loading, loggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Route for New Post */}
        <Route path="/new-post" element={<ProtectedRoute element={<NewPost />} />} />

        {/* Auth Routes */}
        {!loggedIn && (
          <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
