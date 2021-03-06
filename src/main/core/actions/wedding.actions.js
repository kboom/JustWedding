import { getWedding, putWedding } from '../api/wedding.api';
import { sendingRequest, notifyRequestFailed } from './server.actions';
import { PARTICIPANTS_FETCHED } from './participant.actions';
import { GUESTS_FETCHED } from './guests.actions';
import { selectParticipants } from '../selectors/participants.selector';
import { selectWedding } from '../selectors/wedding.selector';
import map from 'lodash/fp/map';
import includes from 'lodash/includes';
import { submit, reset, isInvalid } from 'redux-form';
import store from '../store';
import ValidationError from '../errors/validation.error';
import SavingError from '../errors/saving.error';


export const WEDDING_FETCHED = 'WEDDING_FETCHED';
export const WEDDINGS_FETCHED = 'WEDDINGS_FETCHED';
export const WEDDING_SAVED = 'WEDDING_SAVED';

export const USERS_FETCHED = 'USERS_FETCHED';

const getParticipantFormNames = (state) =>
  map((participant) => `ParticipantForm_${participant.role}`)(selectParticipants(state));
const submitForms = (dispatch) => (names) =>
  Promise.all(map((name) => dispatch(submit(name)))(names));
const resetForms = (dispatch) => (names) =>
  Promise.all(map((name) => dispatch(reset(name)))(names));

const propagateWeddingUpdate = (dispatch) => (wedding) => {
  const {
    weddings,
    participants,
    guests,
    users,
  } = wedding.entities;

  dispatch({ type: PARTICIPANTS_FETCHED, participants });
  dispatch({ type: GUESTS_FETCHED, guests });
  dispatch({ type: USERS_FETCHED, users });
  dispatch({ type: WEDDINGS_FETCHED, weddings });

  return wedding;
};

export const fetchWedding = (query) => (dispatch) => {
  dispatch(sendingRequest(true));
  return getWedding(query)
    .then(propagateWeddingUpdate(dispatch))
    .then((wedding) => dispatch({ type: WEDDING_FETCHED, id: wedding.result }))
    .catch((err) => dispatch(notifyRequestFailed(err)))
    .finally(() => dispatch(sendingRequest(false)));
};

export const saveWedding = (savedWedding) => (dispatch) => {
  dispatch(sendingRequest(true));
  return putWedding(savedWedding)
    .then(propagateWeddingUpdate(dispatch))
    .then((wedding) => dispatch({ type: WEDDING_SAVED, id: wedding.result }))
    .catch((err) => dispatch(notifyRequestFailed(err)))
    .finally(() => dispatch(sendingRequest(false)));
};

export const saveWeddingIfValid = () => (dispatch) => {
  const state = store.getState();
  const formNames = getParticipantFormNames(state);
  const invalidForms = map((name) => isInvalid(name)(state))(formNames);
  if (!includes(invalidForms, true)) {
    return submitForms(dispatch)(formNames)
      .then(() => dispatch(saveWedding(selectWedding(state))))
      .catch((e) => {
        throw new SavingError(e);
      });
  } else {
    throw new ValidationError('Specify correct values');
  }
};

export const resetWeddingForms = () => (dispatch) => {
  const formNames = getParticipantFormNames(store.getState());
  return resetForms(dispatch)(formNames);
};
