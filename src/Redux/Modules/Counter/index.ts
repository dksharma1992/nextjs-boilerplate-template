import { counterSliceReducer } from './counter.slice';

const counterCombinedReducer = {
  ...counterSliceReducer,
};

export * from './counter.slice';
export default counterCombinedReducer;
