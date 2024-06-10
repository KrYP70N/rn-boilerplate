export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
  paylod: () => {
    return 3
  }
});

export const decrement = () => ({
  type: DECREMENT,
});
