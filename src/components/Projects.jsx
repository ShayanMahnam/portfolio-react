import React from "react";
import Hotel from "../assets/Hotel.webp";
import DomTVShow from "../assets/DomTVShow.webp";
import SnakeGame from "../assets/SnakeGame.webp";
import FutureForChildren from "../assets/FutureForChildren.webp";
import MiniTwitter from "../assets/MiniTwitter.webp";
import DiceGame from "../assets/DiceGame.webp";
import { AiOutlineGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";


const Projects = () => {
  const projects = [
    {
      img: DomTVShow,
      title: "Dom TV Show",
      desc: " DOM challenge in CodeYourFuture course. using TVMaze api built with JavaScript",
      live: "https://cyf-shayanmahnam-tv.netlify.app/",
      code: "https://github.com/ShayanMahnam/tv-show-dom-project",
    },
    {
      img: FutureForChildren,
      title: "Future For Children",
      desc: "My teamwork project in CodeYourFuture course. Built with HTML, CSS and JavaScript",
      live: "https://cyf-the-achievers-futureforchildren.netlify.app/",
      code: "https://github.com/ShayanMahnam/FutureForChildren",
    },
    {
      img: Hotel,
      title: "Hotel React",
      desc: "React project from CodeYourFuture course",
      live: "https://cyf-shayanmahnam-hotel-react.netlify.app/",
      code: "https://github.com/ShayanMahnam/cyf-hotel-react",
    },
    {
      img: SnakeGame,
      title: "Snake Game",
      desc: "Snake game, inspiration from WebDevSimplified. ",
      live: "https://snakegame-shayan.netlify.app/",
      code: "https://github.com/ShayanMahnam/Snake-Game",
    },
    {
      img: DiceGame,
      title: "Dice Game",
      desc: "I used CodeYourFuture Blocks to build this project.",
      live: "https://shayandicegame.netlify.app/",
      code: "https://github.com/ShayanMahnam/CYF_Dont_go_higher_than_11",
    },
    {
      img: MiniTwitter,
      title: "Mini Twitter",
      desc: "This was one of my challenges from CodeYourFuture course. Built with JS",
      live: "https://cyf-shayanmahnam-mini-twitter.netlify.app/",
      code: "https://github.com/ShayanMahnam/Mini-Twitter",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <div className="flex"></div>
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="pr-4 inline-block text-teal-400 hover:text-white"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {" "}
                    <SiNetlify size={40} />{" "}
                  </a>
                  <a
                    href={project.code}
                    className="pr-4 inline-block text-white hover:text-purple-600"
                  >
                    {" "}
                    <AiOutlineGithub size={40} />{" "}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;