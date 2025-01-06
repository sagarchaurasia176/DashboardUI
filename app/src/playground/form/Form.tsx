import React from "react";

// add validation
const Form: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 items-center py-4">
      <div className="flex flex-col gap-2 w-fit">
        <label htmlFor="emp_id">Employee Id</label>
        <input type="text" placeholder="Enter employee id" id="emp_id" />
      </div>
      <div className="flex flex-col gap-2 w-fit">
        <label htmlFor="emp_name">Name</label>
        <input type="text" placeholder="Enter name of employee" id="emp_name" />
      </div>
      <div className="flex flex-col gap-2 w-fit">
        <label htmlFor="dept_id">Department Id</label>
        <input type="text" placeholder="Enter employee id" id="dept_id" />
      </div>
      <button className="bg-blue-700 text-white px-3 py-1 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default Form;
