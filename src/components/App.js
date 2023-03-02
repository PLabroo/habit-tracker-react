import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHabit, deleteHabit } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// app component containing addHabit,deleteHabit actions.Home view
const App = () => {
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");

  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  // handling adding of new Habit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length !== 0 && desc.length !== 0) {
      dispatch(addHabit(input, desc));
      toast.success("Habit Added Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
      setInput("");
      setDesc("");
    } else {
      toast.error("Please enter habit and description!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    }
  };

  // handling deleting a particular habit
  const handleDelete = (id) => {
    dispatch(deleteHabit(id));
    toast.success("Habit Deleted Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };
  return (
    <>
      {/* form-container to enter habit */}
      <div className="form-container">
        <form action="">
          <div className="form-input">
            <label htmlFor="">Habit Name</label>
            <input
              type="text"
              placeholder="Enter new Habit"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />

            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter brief habit description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>

          <div className="form-button">
            <button type="submit" onClick={handleSubmit}>
              Add New Habit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>

      {/* habits-container containing individual habits */}
      <div className="habits-container">
        {habits.map((habit) => {
          return (
            <div className="each-habit" key={habit.id}>
              <div className="habit-info">
                <h4>{habit.habit}</h4>
                <p>{habit.description}</p>
              </div>

              <div className="del-button">
                <button onClick={() => handleDelete(habit.id)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
