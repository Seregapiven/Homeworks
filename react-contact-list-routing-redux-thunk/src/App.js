import './App.css';

import { Container } from '@mui/material';
import { Route, Routes, } from 'react-router-dom';
import Users from './modules/users/pages/Users';
import UsersList from './modules/users/pages/UsersList';
import UserForm from './modules/users/pages/UserForm';
import MainNavigation from './modules/common/components/MainNavigation';
import Home from './modules/home/pages/Home';



function App() {

  return (
    <Container maxWidth="md">
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='users' element={<Users />}>
          <Route path='' element={<UsersList />} />
          <Route path=':id' element={<UserForm />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
