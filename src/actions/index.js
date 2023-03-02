// actions to add,delete and update status of habits

import { Last7Days } from "../utils";

// add habit action taking habit and desc as params
export const addHabit = (habit, description) => {
  return {
    type: "ADD_HABIT",
    payload: {
      id: Date.now().toString(),
      habit: habit,
      description: description,
      datesArray: Last7Days(),
    },
  };
};

// delete the habit action using id param
export const deleteHabit = (id) => {
  return {
    type: "DELETE_HABIT",
    id,
  };
};

// updating the habit status action with date and habitID as params
export const updateStatus = (date, id) => {
  return {
    type: "UPDATE_HABIT_STATUS",
    date,
    id,
  };
};
