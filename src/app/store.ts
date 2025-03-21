import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setCounterReducer } from "../model/setCounter-reducer";
import { messageReducer } from "../model/message-reducer";
import { countReducer } from "../model/count-reducer";
import { valuesReducer } from "../model/setValues-reducer";

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
  message: messageReducer,
  values: valuesReducer,
  count: countReducer,
  setCounter: setCounterReducer,
});

// создание store
export const store = configureStore({
  reducer: rootReducer,
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>;
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch;

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store;
