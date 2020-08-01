import DiscographyItem from './DiscographyItem';
import { withList } from '../../hoc/withList';

export default withList (DiscographyItem, 'discography', 'releaseId');
