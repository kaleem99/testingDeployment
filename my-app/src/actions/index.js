//---NOTEBOOK------------------------------------------:
//Sets section of Notebook as selected
export const notebookSection = (data) => {
  // data = {id, section}
  return { type: "NOTEBOOK_SECTION", payload: data };
};

//Toggle slider popout open/closed
export const notebookPopout = (open) => {
  return { type: "NOTEBOOK_POPOUT", payload: open };
};

//Sets total protocol pages
export const setTotalProtocolPages = (total) => {
  return { type: "SET_TOTAL_PROTOCOL_PAGES", payload: total };
};

//Toggle notebook expanded state
export const toggleNotebookExpanded = (data) => {
  return { type: "TOGGLE_NOTEBOOK_EXPANDED", payload: data };
};

export const getEmployer = () => {
  return {
    type: "Recruiter",
  };
};

export const getEmployee = () => {
  return {
    type: "Candidate",
  };
};

export const incrementLevel = () => {
  return {
    type: "Increment",
  };
};

export const incrementMin = () => {
  return {
    type: "Minutes",
  };
};

export const incrementSec = () => {
  return {
    type: "Seconds",
  };
};

export const setSecondsToZero = () => {
  return {
    type: "0SEC",
  };
};
export const setMinutesToZero = () => {
  return {
    type: "0MIN",
  };
};
export const setMCQResponse = (data) => {
  //data = {id, solution}
  return { type: "ANSWER_MCQ", payload: data };
};

export const validateMCQ = (data) => {
  //data = {id, solution}
  return { type: "VALIDATE_MCQ", payload: data };
};

export const createMCQ = (data) => {
  //data = {id, type}
  return { type: "CREATE_MCQ", payload: data };
};

export const createSCQ = (data) => {
  //data = {id, type}
  return { type: "CREATE_SCQ", payload: data };
};

export const setSCQResponse = (data) => {
  //data = {id, solution}
  return { type: "ANSWER_SCQ", payload: data };
};

//Check the answer to a single choice question
export const validateSCQ = (data) => {
  //data = {id, solution}
  return { type: "VALIDATE_SCQ", payload: data };
};
