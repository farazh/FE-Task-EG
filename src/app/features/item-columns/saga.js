import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_ITEM, DELETE_ITEM, LOAD_ITEMS } from "../actions";
import {
  addToLocalStorage,
  deleteFromLocalStorage,
  getItemsFromLocalStorage,
} from "./utils";

function* loadItems() {
  // fetching from localstorage used as an example
  // to demonstrate redux-saga and API implementation
  const items = yield call(getItemsFromLocalStorage);
  yield put({ type: LOAD_ITEMS.SUCCESS, items: items });
}

function* addItem(action) {
  const item = yield call(addToLocalStorage, action.item);
  yield put({ type: ADD_ITEM.SUCCESS, item });
}

function* deleteItem(action) {
  yield call(deleteFromLocalStorage, { ...action });
  yield put({
    type: DELETE_ITEM.SUCCESS,
    columnId: action.columnId,
    itemId: action.itemId,
  });
}

function* mySaga() {
  yield takeLatest(LOAD_ITEMS.REQUEST, loadItems);
  yield takeLatest(ADD_ITEM.REQUEST, addItem);
  yield takeLatest(DELETE_ITEM.REQUEST, deleteItem);
}

export default mySaga;
