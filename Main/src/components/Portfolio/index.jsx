import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Movie Nest',
      description: 'Movie search and random activity APIs',
      link: "https://lundj227.github.io/movie-nest/",
      repo: "https://github.com/lundj227/movie-nest",
      image: 'Movie Nest.png'
    },
    {
      name: 'password generator',
      description: 'generates a random password',
      link: "https://vromero-beltran.github.io/RandomPassGen/",
      repo: "https://github.com/vromero-beltran/RandomPassGen",
      image: 'password generator.png'
    },
    {
      name: 'Tackle Time',
      description: 'Football team tracker',
      link: "https://kpfenning.github.io/Tackle-Times/",
      repo: "https://github.com/kpfenning/Tackle-Times",
      image: 'Tackle Time.png'
    },
    {
      name: 'README.md Generator',
      description: 'Generates a README.md file',
      link: "https://vromero-beltran.github.io/Repo-Application/",
      repo: "https://github.com/vromero-beltran/Repo-Application",
      image: 'README.md Generator.png'
    },
    {
      name: 'Tech Blogging',
      description: 'application that allows users to add friends, post, comment and react on tech blogs',
      link: "https://vromero-beltran.github.io/tech-blogging/",
      repo: "hhttps://github.com/vromero-beltran/tech-blogging",
      image: 'Tech Blogging.png'
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
