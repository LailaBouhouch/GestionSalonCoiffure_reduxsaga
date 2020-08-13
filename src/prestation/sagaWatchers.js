import { takeEvery } from 'redux-saga/effects';

import * as PrestationWorkers from './sagaWorkers';
import {
  GET_PRESTATIONS,
  // SET_PRESTATIONS,
  // PUT_PRESTATION,
  // POST_PRESTATION,
  // DELETE_PRESTATION,
  // CANCEL_PRESTATION_UPDATE,
  // EDIT_PRESTATION,
} from './actions'

const {
  workerGetPrestations,
} = PrestationWorkers

export const watchGetPrestations = function* () {
  console.log("watcher prestations")
  yield takeEvery(GET_PRESTATIONS, workerGetPrestations);
}


// export const watchPostPrestation = function* () {
//   yield takeEvery(POST_PRESTATION, workerPostPrestation);
// }

// export const watchPutPrestation = function* () {
//   yield takeEvery(PUT_PRESTATION, workerPutPrestation);
// }

// export const watchDeletePrestation = function* () {
//   yield takeEvery(DELETE_PRESTATION, workerDeletePrestation);
// }

// export const watchEditPrestation = function* () {
//   yield takeEvery(EDIT_PRESTATION, workerEditPrestation);
// }

// export const watchCancelPrestationUpdate = function* () {
//   yield takeEvery(CANCEL_PRESTATION_UPDATE, workerCancelPrestationUpdate);
// }

