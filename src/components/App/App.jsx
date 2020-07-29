import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'; 
import SearchPage from '../searchcomponent/SearchPage';
// import Pagination from '../pagination/Pagination';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage} />
      </Switch>
    </Router>
  );
}
  
