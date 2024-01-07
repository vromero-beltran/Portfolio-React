import { useState } from 'react';
import Project from "../Project";
// import movieNestImg from '../../assets/projects/Movie Nest.png';
// import passwordGeneratorImg from '../../assets/projects/password generator.png';
// import tackleTimeImg from '../../assets/projects/Tackle Time.png';
// import readMeGeneratorImg from '../../assets/projects/README.md Generator.png';
// import techBloggingImg from '../../assets/projects/Tech Blogging.png';

function Portfolio() {

//   <Project 
//   project={project}
//   style={{backgroundImage: `url(${require('../../assets/projects/${project.image}')})`}}

// />

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'movieNest',
      description: 'Movie search and random activity APIs',
      link: "https://lundj227.github.io/movie-nest/",
      repo: "https://github.com/lundj227/movie-nest",
      // image: movieNestImg
    },
    {
      name: 'passwordGenerator',
      description: 'generates a random password',
      link: "https://vromero-beltran.github.io/RandomPassGen/",
      repo: "https://github.com/vromero-beltran/RandomPassGen",
      // image: passwordGeneratorImg
    },
    {
      name: 'tackleTime',
      description: 'Football team tracker',
      link: "https://kpfenning.github.io/Tackle-Times/",
      repo: "https://github.com/kpfenning/Tackle-Times",
      // image: tackleTimeImg
    },
    {
      name: 'readmeGenerator',
      description: 'Generates a README.md file',
      link: "https://vromero-beltran.github.io/Repo-Application/",
      repo: "https://github.com/vromero-beltran/Repo-Application",
      // image: readMeGeneratorImg
    },
    {
      name: 'techBlogging',
      description: 'application that allows users to add friends, post, comment and react on tech blogs',
      link: "https://vromero-beltran.github.io/tech-blogging/",
      repo: "hhttps://github.com/vromero-beltran/tech-blogging",
      // image: techBloggingImg
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
