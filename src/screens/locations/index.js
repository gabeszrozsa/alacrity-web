import LocationList from './LocationList';
import AddLocationContainer from './add/AddLocationContainer';
import EditLocation from './EditLocation';
import LocationDetails from './LocationDetails';

const locations = {
  List: LocationList,
  Details: LocationDetails,
  Add: AddLocationContainer,
  Edit: EditLocation,
}

export default locations;
