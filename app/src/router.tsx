import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Pages
import Index from 'Pages/Index';

const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>

                 {/* Config githubpages */}
                 <Route path="/xnote">
                        <Redirect to="/" />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;