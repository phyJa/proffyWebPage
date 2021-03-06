import React from 'react';

// React-router-dom: for navigation
// BrowserRouter: a kind of routing
// Route: each route
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

export default function Routes () {
    // Two mandatory properties for <Route />: "path" (shown in the browser) and the
    // corresponding component to be loaded
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}