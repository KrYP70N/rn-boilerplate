import { INCREMENT, DECREMENT } from '@/store/redux/action/sample.action';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const sampleReducer = (state = initialState, action: any): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default sampleReducer;
