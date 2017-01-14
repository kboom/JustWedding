import { GUESTS_FETCHED, ADD_GUEST, REMOVE_GUESTS } from '../actions/wedding.actions';
import Wedding from '../models/wedding.model';

export default function (wedding = new Wedding(), action) {
  switch (action.type) {
    case GUESTS_FETCHED:
      return wedding.set('guests', action.guests);
    case REMOVE_GUESTS:
      return wedding.removeGuests(action.guests);
    case ADD_GUEST:
      return wedding.addGuest(action.guest);
    default:
      return wedding;
  }
}
