import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../context/AuthContext'

export default function PriveteRoute({route:Componet, ...rest}) {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
        {...rest}
        render={props => {
            return currentUser ? <Componet {...props}/> : <Redirect to='/' />
        }}>
            
        </Route>
    )
}
