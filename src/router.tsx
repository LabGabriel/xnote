import Xnote from "pages/xnote";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Xnote} />

                {/* Config githubpages */}
                <Route path="/xnote" component={Xnote} />
                <Route path="*">
                    <Redirect to="/xnote" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;