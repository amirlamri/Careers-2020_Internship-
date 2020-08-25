import React from 'react';
import {Route,Redirect} from "react-router-dom";
import Login from './Login';
 export const ProtectedRoute = ({component:Component, ...rest}) =>{
    return(
            <Route {...rest} 
            render={props => {
                    if(Login.isLogedn() ){
                    return <Component {...props}/>
                    }else{
                        return <Redirect to={
                            {
                                pathname:"/",
                                state:{
                                    from:props.location
                                }
                            }
                        } />
                    }
                }
                
            }/>
    );

};