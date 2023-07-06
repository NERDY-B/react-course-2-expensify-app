import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpense';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                    <Route path="/create" component={AddExpensePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
        </div>
   
    </BrowserRouter>
)

export default AppRouter;