// component to keep a check on habit status and its updation

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../actions";
import { NoHabits } from "./NoHabits";

const HabitStatus = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);

  const handleStatusUpdate = (date, habitID) => {
    dispatch(updateStatus(date, habitID));
  };
  return (
    <>
      <div className="weekly-status">
        <div className="table-container">
          {habits.length === 0 && <NoHabits />}
          {habits.map((item) => {
            const { habit, description } = item;

            return (
              <div className="each-table" key={item.id}>
                <h3>{habit}</h3>
                <p>{description}</p>
                <table>
                  <tbody>
                    <tr>
                      <th className="initials">DATE</th>
                      {item.datesArray.map((date) => {
                        return <th>{date.getDate.replace(/['"]+/g, "")}</th>;
                      })}
                    </tr>
                    <tr>
                      <th className="initials">STATUS</th>
                      {item.datesArray.map((date, index) => {
                        //   console.log(date);
                        return (
                          <td
                            onClick={() =>
                              handleStatusUpdate(date.getDate, item.id)
                            }
                          >
                            {date.status === "none" ? (
                              <i className="fa-solid fa-minus"></i>
                            ) : date.status === "done" ? (
                              <i className="fa-solid fa-circle-check done"></i>
                            ) : (
                              <i className="fa-solid fa-circle-xmark fail"></i>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HabitStatus;
