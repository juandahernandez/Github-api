import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchApi from "../../Helpers/fetchApi";

import "./Repos.styles.css";

const Repos = () => {
  const [login] = useState(useParams().id);
  const [repos, setRepos] = useState([]);
  const url = `https://api.github.com/users/${login}/repos`;
  useEffect(() => {
    fetchApi(url).then(setRepos);
  }, [url]);

  return (
    <div className="repos flex flex-wrap mt-4">
      {repos.length > 0 ? (
        repos.map((rp, index) => (
          <div className="card-repo border-solid border-4 border-yellow-600 border-opacity-50 rounded-md w-72 m-auto mt-8 h-60 ">
            <div className="repos-content flex flex-col justify-center items-center w-52 p-4 m-auto mt-3 h-44">
              <p key={index}>Name: {rp.name}</p>

              <p>Language: {rp.language}</p>
            </div>
            <div className="see-more text-center">
              <a
                target="_blank"
                href={`${rp.html_url}`}
                rel="noopener noreferrer"
              >
                See more
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-yellow-100 h-screen w-full flex justify-center items-center">
          <p className="text-6xl font-bold ">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Repos;
