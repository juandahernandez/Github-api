import React from "react";
import { Link } from "react-router-dom";

import "./GithubUser.styles.css";

const GithubUser = ({ user }) => {
  return (
    <div className=" cart-container border-solid border-4 border-yellow-600 border-opacity-50 rounded-md w-3/12 m-auto mt-5 mx-4">
      {user ? (
        user.message === "Not Found" ? (
          <h1>{user.message}</h1>
        ) : (
          <div className="flex flex-col justify-center items-center w-10/12 p-4 m-auto mt-3">
            <img
              src={user.avatar_url}
              alt={user.name}
              className=" img-cart rounded-full"
              height="150px"
              width="200px"
            />
            {user.name && <h1>Name: {user.name}</h1>}
            <a
              target="_blank"
              href={`${user.html_url}`}
              rel="noopener noreferrer"
            >
              <h1 style={{ cursor: "pointer" }}>{user.login}</h1>
            </a>
            <div className="followers-div flex justify-between mt-2">
              {user.public_repos && (
                <button>
                  Repos: <span> {user.public_repos} </span>
                </button>
              )}
              <Link to={`/${user.login}/followers`}>
                {user.followers && (
                  <button>
                    Seguidores: <span>{user.followers}</span>
                  </button>
                )}
              </Link>

              <Link to={`${user.login}/following`}>
                {user.following && (
                  <button>
                    Seguidos: <span>{user.following}</span>
                  </button>
                )}
              </Link>
            </div>
            <div className="repos-button">
              <Link to={`/${user.login}/repos`}>
                <button>Repositores</button>
              </Link>
            </div>
          </div>
        )
      ) : (
        <div className="bg-yellow-100 h-screen w-full flex justify-center items-center">
          <p className="text-6xl font-bold ">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
