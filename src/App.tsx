import 'antd/dist/antd.css';
import './style/custome-style.css';
import React,{ Fragment } from 'react';
import {UserProfilePage} from "./pages/user-profile-page/user-profile-page";

function App() {
  return (
      <Fragment>
          <UserProfilePage/>
      </Fragment>
  );
}

export default App;
