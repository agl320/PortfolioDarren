import "./App.css";

function App() {
    return (
        <>
            <div className="main-left">
                <div className="bio-wrap">
                    <h1>Name</h1>
                    <h2>Position</h2>
                    <h3>Phrase</h3>
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
                        <a href="https://github.com/xegativ" target="_blank">
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
                    <div className="info-wrap">
                        <p>Info title</p>
                        <p>Info paragraph</p>
                        <p>Info title</p>
                        <p>Info paragraph</p>
                        <p>Info title</p>
                        <p>Info paragraph</p>
                    </div>
                    <div className="projects-wrap">Projects</div>
                    <div className="experience-wrap">Experience</div>
                </div>
            </div>
        </>
    );
}

export default App;
