import React from 'react';
import Header from './components/Header/Header.jsx'

import './App.css';

import Main from './pages/Main/Main'
import Map from './pages/Map/Map'
import Profile from './pages/Profile/Profile'

const PAGES = {
  profile: () => <Profile/>,
  map: () => <Map/>,
  login: setPage => <Main page='login' setPage={setPage}/>,
  signup: setPage => <Main page='signup' setPage={setPage}/>
};

function App() {
  const [page, setPage] = React.useState('profile');

  return (
    <div className='wrapper'>
      {(page !== 'login' && page !== 'signup') ? <Header setPage={setPage}/> : null}
      { PAGES[page](setPage) }
    </div>
  );
}

export default App;
