import {delay} from 'redux-saga'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* addNumberAsync(){
    yield delay(4000)
    yield put({type: "ADD_NUMBER_ASYNC", num: 1})
}

function* countWatcher(){
    yield takeLatest("ADD_NUMBER", addNumberAsync)
}

export default countWatcher