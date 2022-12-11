import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthApi from './data/auth-api';
import Home from './pages/Home';
import ListTravel from './pages/ListTravel';
import Login from './pages/Login';
import PlaceDetailPage from './pages/PlaceDetailPage';
import Register from './pages/Register';
import Search from './pages/Search';
import { putAccessToken } from './utils/common';

function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [authUser, setAuthUser] = React.useState(null);

  const onLoginSuccess = async (accessToken) => {
    putAccessToken(accessToken);
    const data = await AuthApi.getUserLogin();
    setInitializing(false);
    setAuthUser(data.data.user);
  };

  React.useState(() => {
    async function getUser() {
      const data = await AuthApi.getUserLogin();
      setInitializing(false);
      setAuthUser(data.data.user);
    }

    getUser();
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <Routes>
      <Route path="/register" element={<Register loginSuccess={onLoginSuccess} />} />
      <Route path="/login" element={<Login loginSuccess={onLoginSuccess} />} />
      <Route path="/" element={<Home auth={authUser} />} />
      <Route path="/search" element={<Search auth={authUser} />} />
      <Route path="/place/:id" element={<PlaceDetailPage auth={authUser} />} />
      <Route path="/list-travel" element={<ListTravel auth={authUser} />} />
    </Routes>
  );
}

export default App;
