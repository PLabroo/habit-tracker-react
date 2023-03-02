// reducer used to take care of different actions

// intitial State
const initialState = {
  habits: [],
};

// my root reducer passed to store,handling all 3 functionalities
const habitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      const { id, habit, description, datesArray } = action.payload;
      return {
        ...state,
        habits: [
          ...state.habits,
          {
            id: id,
            habit: habit,
            description: description,
            datesArray: [...datesArray],
          },
        ],
      };

    case "DELETE_HABIT":
      const newHabits = state.habits.filter((habit) => habit.id !== action.id);
      return {
        ...state,
        habits: newHabits,
      };

    case "UPDATE_HABIT_STATUS":
      const updateHabit = state.habits.find((habit) => {
        return habit.id === action.id;
      });

      const newDateArray = updateHabit.datesArray.map((date, index) => {
        if (date.getDate === action.date) {
          if (date.status === "none") {
            date.status = "done";
          } else if (date.status === "done") {
            date.status = "fail";
          } else if (date.status === "fail") {
            date.status = "none";
          }
        }
        return date;
      });

      const newHabit = { ...updateHabit, datesArray: [...newDateArray] };
      const x = state.habits.map((habit) => {
        if (habit.id === action.id) return newHabit;
        else return habit;
      });

      console.log(x, newHabit);
      return {
        ...state,
        habits: [...x],
      };
    default:
      return state;
  }
};

export default habitsReducer;
