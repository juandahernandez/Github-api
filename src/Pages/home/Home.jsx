import React, { useState, useEffect } from "react";

// components
import GithubForm from "../../Components/Home/GithubForm/GithubForm";
import fetchApi from "../../Helpers/fetchApi";

import GithubUser from "../../Components/Home/GithubUser/GithubUser";

const Home = () => {
  // const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState();
  const [value, setValue] = useState("");
  const [isErrorInput, setIsErrorInput] = useState(false);

  const url = `https://api.github.com/users/${name}`;

  useEffect(() => {
    fetchApi(url).then(setUser);
  }, [url, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length <= 0) {
      // setLoader(true);
      setIsErrorInput(true);
      setName("");
    } else {
      setName(value);
      setValue("");
      setIsErrorInput(false);
      // setLoader(false);
    }
  };
  console.log(value);

  return (
    <div>
      <GithubForm
        handleSubmit={handleSubmit}
        setValue={setValue}
        value={value}
        isErrorInput={isErrorInput}
      />

      <div className="flex justify-center">
        {name ? <GithubUser user={user} /> : null}
      </div>
    </div>
  );
};
export default Home;
