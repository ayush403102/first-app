import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/ayush403102/repos"
  );

  await new Promise((resolve) => setTimeout(resolve, 1000))//it will amek it wait for 1 sec so that loader can be visible
  const repos = await response.json();
  return repos;
} //it will return a promise
const ReposPages = async () => {
  const repos = await fetchRepos();
  console.log(repos);
  return (
    <div className="mx-3">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Have a Look On My Repositories</h1>
      <ul className="space-y-5">
        {repos.map((repo) => (
          <li key={repo.id} className=" rounded px-12 lg:w-1/2 border-2 border-amber-600 hover:bg-amber-600 hover:text-white ">
            <Link href={`/Code/Repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details flex space-x-5">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
        <li>...</li>
      </ul>
    </div>
  );
};

export default ReposPages;
