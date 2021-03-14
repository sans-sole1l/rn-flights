import React from 'react';
import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ mainComponent: Main, children, mainClass, ...props  }) => {
  return (
    <Route path={props.path}>
      {
        () => props.loggedIn ?
          <Main mainClass={mainClass} children={children} />
          :
          <Redirect to="/" />
      }
    </Route>
)}

export default ProtectedRoute; 
