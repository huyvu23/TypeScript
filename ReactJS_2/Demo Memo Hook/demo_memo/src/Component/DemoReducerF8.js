import React from "react";
import { useReducer } from "react";

// useReducer
//1.init State
const initReducer = {
  job: "",
  jobs: [],
};
//2.Action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOBS = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload: payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload: payload,
  };
};

const deleteJobs = (payload) => {
  return {
    type: DELETE_JOBS,
    payload: payload,
  };
};

//3.Reducer
const reducer = (state, action) => {
  console.log(action);
  console.log("State", state);
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOBS:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };

    default:
      throw new Error("Error");
  }
};
//4.Dispatch

function DemoReducerF8() {
  const [state, dispatch] = useReducer(reducer, initReducer);
  // Sử dụng destructuring để lấy ra state
  const { job, jobs } = state;
  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };

  //   const inputRef = useRef();

  //   inputRef.current.focus();

  return (
    <div>
      <h1>To Do</h1>
      <input value={job} placeholder="Input ...." onChange={(e) => dispatch(setJob(e.target.value))} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>
              {job}

              <span onClick={() => dispatch(deleteJobs(index))}>x</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DemoReducerF8;
