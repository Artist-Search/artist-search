import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'; 
import SearchPage from '../searchcomponent/SearchPage';
// import ArtistSearchResults from '../display/ArtistSearchResults';
import DiscographyPage from '../display/discography/DiscographyPage';
import AlbumsPage from '../display/albums/AlbumsPage';
import AlbumDetails from '../../components/display/albumdetails/AlbumDetails';
import Lyrics from '../../components/songviewlyrics/Lyrics';

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
        <Route path="/album/:name/:id" component={AlbumsPage} />
        <Route path="/albumdetails/:name/:albumid" component={AlbumDetails} />
        <Route path="/lyrics/:name/:title" component={Lyrics} />
      </Switch>
    </Router>
  );
}
