const amountReducer = (state = 0, action) => {
  if (action.type === "deposite") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default amountReducer;

export const itemReducer = (item = 0, action) => {
  if (action.type === "add") {
    return item + action.payload;
  } else if (action.type === "remove") {
    return item - action.payload;
  } else {
    return item;
  }
};
