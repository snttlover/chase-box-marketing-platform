import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ render: Component , ...rest }) => {
  const {currentUser} = useContext(AuthContext);



  return (
    <Route
      {...rest}
      render={routeProps =>
        
        currentUser ? (
          
          <Component {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};
// const PrivateRoute = ({ component: Component, authenticated, path, exact }) => {
//   return (
//       <Route
//           path={path}
//           exact={exact}
//           render={props =>
//             authenticated
//               ? <Component {...props} />
//               : <Redirect to="/login"/>}
//         />
//     )
// }


export default PrivateRoute