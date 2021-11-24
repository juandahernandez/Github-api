import React, { useState, useEffect } from "react";
import fetchApi from "../../Helpers/fetchApi";
import { useParams } from "react-router-dom";

import GithubUser from "../../Components/Home/GithubUser/GithubUser";
const Followers = () => {
  const [login] = useState(useParams().id);
  const [followers, setFollowers] = useState([]);
  const url = `https://api.github.com/users/${login}/followers`;

  useEffect(() => {
    fetchApi(url).then(setFollowers);
  }, [url]);
  return (
    <div className="flex flex-wrap justify-center ">
      {followers.length > 0 ? (
        followers.map((fw, index) => <GithubUser user={fw} key={index} />)
      ) : (
        <div className="bg-yellow-100 h-screen w-full flex justify-center items-center">
          <p className="text-6xl font-bold ">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Followers;
