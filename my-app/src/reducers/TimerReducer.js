// const setMinReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "Minutes":
//       return state + 1;
//     case "0MIN":
//       return (state = 0);
//     default:
//       return state;
//   }
// };
// const setSecReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "Seconds":
//       return state + 1;
//     case "0SEC":
//       return (state = 0);
//     default:
//       return state;
//   }
// };
// export { setMinReducer, setSecReducer };
export const timerReducer = (state = 1, action) => {
  switch (action.type) {
    case "setTime":
      return (state = action.time);
    case "setTimeToZero":
      return (state = 1);
    default:
      return state;
  }
};
