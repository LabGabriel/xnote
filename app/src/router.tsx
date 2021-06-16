import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Pages
import Index from 'Pages/Index';

const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index} />

                {/* Config githubpages */}
                <Route path="/xnote" component={Index} />
                <Route path="*">
                    <Redirect to="/xnote" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;