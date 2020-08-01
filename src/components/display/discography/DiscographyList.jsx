import DiscographyList from './DiscographyList';
import { withList } from '../../hoc/withList';

//check to make sure we have the correct params
export default withList (DiscographyList, 'artists', 'id');
