import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/ayush403102/${name}`
  );

  // await new Promise((resolve) => setTimeout(resolve, 1000))//it will amek it wait for 1 sec so that loader can be visible
  const repos = await response.json();
  return repos;
} //it will return a promise

const Repo = async ({name}) => {
  const repos = await fetchRepo(name);

  return (
    <>
      <h2>{repos.name}</h2>
      <p>{repos.description}</p>

      <div>
      <FaStar /> 
        <span>
          {repos.forks_count}
        </span>
      </div>
      <div>
      <FaCodeBranch /> 
        <span>
          {repos.watchers_count}
        </span>
      </div>
      <div>
      <FaEye /> 
        <span>
          {repos.stargazers_count}
        </span>
      </div>
        
    </>
  );
};

export default Repo;
