import React, { useState, useEffect } from "react";
import fetchApi from "../../Helpers/fetchApi";
import { useParams } from "react-router-dom";
import GithubUser from "../../Components/Home/GithubUser/GithubUser";

const Following = () => {
  const [login] = useState(useParams().id);
  const [following, setFollowing] = useState([]);
  const url = `https://api.github.com/users/${login}/following`;

  useEffect(() => {
    fetchApi(url).then(setFollowing);
  }, [url]);
  return (
    <div className="flex flex-wrap justify-center ">
      {following.length > 0 ? (
        following.map((fw, index) => <GithubUser user={fw} key={index} />)
      ) : (
        <div className="bg-yellow-100 h-screen w-full flex justify-center items-center">
          <p className="text-6xl font-bold ">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Following;
