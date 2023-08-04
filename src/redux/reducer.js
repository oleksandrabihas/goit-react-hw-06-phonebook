import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});