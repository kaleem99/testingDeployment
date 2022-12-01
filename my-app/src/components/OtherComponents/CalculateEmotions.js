export const calculateEmotions = (
    NewOptionChosen,
    chosen,
    gotten,
    roleData,
    dispatch,
    setMessage
  ) => {
    console.log(roleData);
    console.log(chosen === roleData.option);
    if (NewOptionChosen === roleData.option && chosen === 0) {
      dispatch({ type: "HAPPY_CANDIDATE" });
      dispatch({ type: "ANGRY_RECRUITER" });
      return 0;
    }
    if (NewOptionChosen === roleData.option) {
      dispatch({ type: "HAPPY_CANDIDATE" });
      dispatch({ type: "HAPPY_RECRUITER" });
      setMessage(true);
      return 0;
    }
    if (chosen < gotten) {
      let difference = Math.abs(chosen - gotten);
      if (difference === 1) {
        dispatch({ type: "SAD_CANDIDATE" });
        dispatch({ type: "NEUTRAL_RECRUITER" });
      } else if (difference === 2) {
        dispatch({ type: "DISAPPOINTED_CANDIDATE" });
        dispatch({ type: "HAPPY_RECRUITER" });
      } else {
        dispatch({ type: "ANGRY_CANDIDATE" });
        dispatch({ type: "HAPPY_RECRUITER" });
      }
      return 0;
    }
    if (chosen > gotten) {
      let difference = Math.abs(chosen - gotten);
      if (difference === 1) {
        dispatch({ type: "HAPPY_CANDIDATE" });
        dispatch({ type: "SAD_RECRUITER" });
      } else if (difference === 2) {
        dispatch({ type: "HAPPY_CANDIDATE" });
        dispatch({ type: "DISAPPOINTED_RECRUITER" });
      } else {
        dispatch({ type: "HAPPY_CANDIDATE" });
        dispatch({ type: "ANGRY_RECRUITER" });
      }
      return 0;
    }
  };