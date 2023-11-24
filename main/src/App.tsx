import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [projectVisible, setProjectVisible] = useState(false);
    const [experienceVisible, setExperienceVisible] = useState(false);
    const [involveVisible, setInvolveVisible] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById("projects");

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }

        const onScroll = () => {
            const projectsEl = document.getElementById("projects");
            const experiencesEl = document.getElementById("experience");
            const involveEl = document.getElementById("involvement");

            const projectsTop = 0;
            const experiencesTop = 0.3125;
            const involveTop = 0.625;
            if (experiencesEl && projectsEl && involveEl) {
                console.log(
                    "Projects: ",
                    projectsEl.getBoundingClientRect().top
                );

                console.log(
                    "Experience: ",
                    experiencesEl.getBoundingClientRect().top
                );

                console.log(
                    "Involvement: ",
                    involveEl.getBoundingClientRect().top
                );

                if (
                    projectsEl.getBoundingClientRect().top <= projectsTop &&
                    experiencesEl.getBoundingClientRect().top > experiencesTop
                ) {
                    setProjectVisible(true);
                } else {
                    setProjectVisible(false);
                }

                if (
                    experiencesEl.getBoundingClientRect().top <=
                        experiencesTop &&
                    involveEl.getBoundingClientRect().top > involveTop
                ) {
                    setExperienceVisible(true);
                } else {
                    setExperienceVisible(false);
                }

                if (involveEl.getBoundingClientRect().top <= involveTop) {
                    setInvolveVisible(true);
                } else {
                    setInvolveVisible(false);
                }
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const handleClick = (e: any, targetId: any) => {
        e.preventDefault();

        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="main">
                <div className="main-left">
                    <div className="bio-wrap">
                        <h1>Darren Lai</h1>
                        <h2>Mechatronic Systems Engineering Student @ SFU</h2>
                        <h3>
                            Striving to create a positive community around
                            myself for others, while also doing what makes me
                            happy: engineering.
                        </h3>
                    </div>

                    <div className="tob-wrap">
                        <div style={{ display: "flex" }}>
                            {projectVisible ? (
                                <>
                                    <p style={{ marginRight: "5px" }}>•</p>
                                    <p className="tob in-view">
                                        <a
                                            href="#projects"
                                            onClick={(e) =>
                                                handleClick(e, "projects")
                                            }
                                        >
                                            Projects
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p style={{ marginRight: "5px" }}>
                                        &nbsp;&nbsp;
                                    </p>
                                    <p className="tob">
                                        <a
                                            href="#projects"
                                            onClick={(e) =>
                                                handleClick(e, "projects")
                                            }
                                        >
                                            Projects
                                        </a>
                                    </p>
                                </>
                            )}
                        </div>
                        <div style={{ display: "flex" }}>
                            {experienceVisible ? (
                                <>
                                    <p style={{ marginRight: "5px" }}>•</p>
                                    <p className="tob in-view">
                                        <a
                                            href="#experience"
                                            onClick={(e) =>
                                                handleClick(e, "experience")
                                            }
                                        >
                                            Experience
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p style={{ marginRight: "5px" }}>
                                        &nbsp;&nbsp;
                                    </p>
                                    <p className="tob">
                                        <a
                                            href="#experience"
                                            onClick={(e) =>
                                                handleClick(e, "experience")
                                            }
                                        >
                                            Experience
                                        </a>
                                    </p>
                                </>
                            )}
                        </div>
                        <div style={{ display: "flex" }}>
                            {involveVisible ? (
                                <>
                                    <p style={{ marginRight: "5px" }}>•</p>
                                    <p className="tob in-view">
                                        <a
                                            href="#involvement"
                                            onClick={(e) =>
                                                handleClick(e, "involvement")
                                            }
                                        >
                                            Involvement
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p style={{ marginRight: "5px" }}>
                                        &nbsp;&nbsp;
                                    </p>
                                    <p className="tob">
                                        <a
                                            href="#involvement"
                                            onClick={(e) =>
                                                handleClick(e, "involvement")
                                            }
                                        >
                                            Involvement
                                        </a>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="socials-wrap">
                        <p>
                            <a
                                href="https://www.linkedin.com/in/andrew-lai-8b3969190/"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://github.com/xegativ"
                                target="_blank"
                            >
                                Github
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.instagram.com/andrew._lai/"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>
                <div className="main-right">
                    <div className="left-space"></div>
                    <div className="right-info">
                        <div id="projects" className="projects-wrap">
                            <p>Projects</p>
                            <div className="project-box">
                                <p>SubVision Robotics ROV</p>
                                <p>Description</p>
                                <div className="project-tags">
                                    <p>ROS1</p>
                                    <p>Python</p>
                                    <p>Raspberry Pi</p>
                                    <p>Linux</p>
                                    <p>SolidWorks</p>
                                </div>
                            </div>
                            <div className="project-box">
                                <p>Arduino Projects</p>
                            </div>
                            <div className="project-box">
                                <p>Robot Soccer</p>
                            </div>
                            <div className="project-box">
                                <p>Sumo Robot</p>
                            </div>
                            <div className="project-box">
                                <p>Lua Game Development</p>
                            </div>
                        </div>
                        <div id="experience" className="experience-wrap">
                            <p>Experience</p>
                        </div>
                        <div id="involvement" className="involvement-wrap">
                            <p>Involvement</p>
                        </div>
                    </div>
                </div>{" "}
            </div>
        </>
    );
}

export default App;
