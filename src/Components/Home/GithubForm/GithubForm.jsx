import React from "react";

import "./GithubForm.styles.css";

const GithubForm = ({ handleSubmit, setValue, value, isErrorInput }) => {
  return (
    <form
      className="form-container m-auto h-24 text-center my-10"
      onSubmit={handleSubmit}
    >
      <input
        className="input-form  "
        type="text"
        placeholder="name user"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="button-form mt-5" type="submit">
        Search
      </button>
      <br />
      {isErrorInput && (
        <>
          <p className="text-3xl font-bold mt-10">please enter a user</p>
        </>
      )}
    </form>
  );
};

export default GithubForm;
