import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  // GET_PRESTATIONS,
  SET_PRESTATIONS,
  // PUT_PRESTATION,
  // POST_PRESTATION,
  // DELETE_PRESTATION,
  // CANCEL_PRESTATION_UPDATE,
  // EDIT_PRESTATION,
} from './actions'

const uri = 'http://localhost:8080/prestations/'

export function* workerGetPrestations() {
  console.log('Get prestations')
  try {
    const result = yield call(axios.get, uri);
    console.log(result.data);
    yield put({ type: SET_PRESTATIONS, value: result.data.message });
  }
  catch {
    console.log('Failed');
  }
}

// export function* workerPostPrestation(action) {
//   console.log('Adding a prestation');
//   console.log(action.value);
//   try {
//     const uri = 'http://localhost:8080/prestations/';
//     const result = yield call(axios.post, uri, action.value);
//     yield put({ type: GET_PRESTATIONS });
//     console.log('Added a prestation successfullt');
//   }
//   catch {
//     console.log('Failed');
//   }
// }

// export function* workerPutPrestation(action) {
//   console.log('Updating a prestation');
//   try {
//     const uri = `https://jsonplaceholder.typicode.com/prestations/${action.value.id}`;
//     const result = yield call(axios.put, uri, action.value);
//     yield put({ type: GET_PRESTATIONS });
//     console.log('Updated a prestation successfully');
//   }
//   catch {
//     console.log('Failed');
//   }
// }

// export function* workerDeletePrestation(action) {
//   console.log('Deleting a prestation');
//   try {
//     const uri = `http://localhost:8080/prestations/${action.value}`;
//     const result = yield call(axios.delete, uri);
//     yield put({ type: GET_PRESTATIONS });
//     console.log('Deleted a prestation successfully');
//   }
//   catch {
//     console.log('Failed');
//   }
// }

// export function* workerEditPrestation(action) {
//   console.log('Editing a prestation', action);
//   yield put({ type: SET_EDIT_MODE_PRESTATION, value: { prestationId: action.value, editMode: true } });
// }

// export function* workerCancelPrestationUpdate(action) {
//   console.log('Cancelled a prestation edit');
//   yield put({ type: SET_EDIT_MODE_PRESTATION, value: { prestationId: action.value, editMode: false } });
// }