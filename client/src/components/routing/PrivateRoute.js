import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Authcontext from "../../context/auth/authContext";

const PrivateRoute = ({component: Component,...rest}) => {
  const authContext = useContext(Authcontext);
  const { isAuthenticated, loading } = authContext;

  return( <Route
    {...rest}
    render={props=>!isAuthenticated&&!loading?(
        <Redirect to='/login'/>
    )  :(<Component {...props}/>)
    }/>
 );

};
export default PrivateRoute;