import ArtistSearchItem from './ArtistSearchItem';
import { withList } from '../hoc/withList';

export default withList (ArtistSearchItem, 'artists', 'id');