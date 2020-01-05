import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//Static Components

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product

import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import LandingPageAdmin from "views/LandingPageAdmin/LandingPageAdmin.js";
import ArticlesAdmin from "views/ManageArticles/ArticlesAdmin.js";
import UsersAdmin from "views/ManageUsersAdmin/UsersAdmin.js";
import ReportsAdmin from "views/reportsAdmin/ReportsAdmin.js";
import LandingPageFreelancer from "views/LandingPageFreelancer/LandingPageFreelancer.js";
import NewArticleFreelancer from "views/ArticlesFreelancer/NewArticleFreelancer.js";
import ViewArticlesFreelancer from "views/ArticlesFreelancer/ViewArticlesFreelancer.js";
import ArticleFreelancer from "views/ArticlesFreelancer/ArticleFreelancer.js";
import RegisterClient from "views/RegisterClient/RegisterClient.js";
import ProfilePageFreelancer from "views/ProfilePageFreelancer/ProfilePageFreelancer.js";
import ProfileFreelancer from "views/ProfilePageFreelancer/ProfileFreelancer.js";
import ManageRequestsFreelancer from "views/ManageDemandesFreelancer/ManageRequestsFreelancer.js";
import testmap from "views/testmap.js";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    
    <Switch>

    <Route path='/admin/reports' component={ReportsAdmin} />  
    <Route path='/admin/users' component={UsersAdmin} />  
    <Route path='/admin/articles' component={ArticlesAdmin} /> 
    <Route path='/admin/' component={LandingPageAdmin} />
    <Route path='/freelancer/viewRequests' component={ManageRequestsFreelancer} />
    <Route path='/freelancer/Articles' component={ArticleFreelancer} />
    <Route path='/freelancer/viewArticles' component={ViewArticlesFreelancer} />
    <Route path='/freelancer/newArticle' component={NewArticleFreelancer} />
    <Route path='/freelancer/profil' component={ProfileFreelancer} />
    <Route path='/freelancer/profileedit' component={ProfilePageFreelancer} />
    <Route path='/freelancer/' component={LandingPageFreelancer} />
    <Route path='/test' component={testmap} />
    <Route path='/register' component={RegisterClient} />
    <Route path='/login' component={LoginPage} />
    <Route path='/' component={LandingPage} />
    </Switch>
  
  </Router>,
  document.getElementById("root")
);
