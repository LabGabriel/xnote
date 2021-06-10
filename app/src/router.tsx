import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Index from 'Pages/Index';


const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;