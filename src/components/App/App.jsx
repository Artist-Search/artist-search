import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'; 
import SearchPage from '../searchcomponent/SearchPage';
import ArtistSearchResults from '../display/ArtistSearchResults';
import ArtistDiscography from '../display/ArtistDiscography';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/artists" component={ArtistSearchResults} />
        <Route path="/discography/:name:id" component={ArtistDiscography} />
      </Switch>
    </Router>
  );
}
