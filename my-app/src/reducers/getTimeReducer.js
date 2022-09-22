const initialState = {
  seconds: 0,
  minutes: 30
}
export const getTime = (state = initialState, action) => {
    switch (action.type) {
      case "getTime":
        return (state);
      default:
        return state;
    }
  };
  