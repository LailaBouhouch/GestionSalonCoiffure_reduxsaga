import { all } from 'redux-saga/effects'
import { watchGetPrestations } from '../prestation/sagaWatchers'

export default function* () {
  yield all([
    watchGetPrestations()
  ])
}