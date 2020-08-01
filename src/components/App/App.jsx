import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'; 
import SearchPage from '../searchcomponent/SearchPage';
// import ArtistSearchResults from '../display/ArtistSearchResults';
import DiscographyPage from '../display/discography/DiscographyPage';

// function Artist() {
//   let { id, name } = useParams();
//   return id, name; 
// }

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        {/* <Route path="/artists" component={ArtistSearchResults} /> */}
        <Route exact path="/discography/:name/:id" component={DiscographyPage} > 
        </Route>
      </Switch>
    </Router>
  );
}
