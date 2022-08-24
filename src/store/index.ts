import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import userStore from './user/reduser';
import bookStore from './book/reduser';

// export const store = createStore(allReducer, (window as any).__
// REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
export const store = configureStore({
  reducer: {
    userState: userStore,
    bookState: bookStore,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
