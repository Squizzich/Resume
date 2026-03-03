function Body() {
    return (
        <main>
            <div id="portfolio-1" className="portfolio">
                <div id="portfolio-container" className="portfolio-container">
                    <div className="portfolio-text-container portfolio-text-container-left">
                        <div className="portfolio-text-title">INTERACTIVE RESUME</div>
                        <div className="portfolio-text-body">
                            Here will be some main information about my resume!
                        </div>
                        <a href="https://github.com/Squizzich" target="_blank">
                            <div className="portfolio-text-button">VIEW GITHUB</div>
                        </a>
                    </div>
                </div>
            </div>

            <div id="portfolio-2" className="portfolio">
                <div id="portfolio-container-2" className="portfolio-container">
                    <div className="portfolio-text-container portfolio-text-container-right">
                        <div className="portfolio-text-title">ILLUSTRATION PORTFOLIO</div>
                            <div className="portfolio-text-body">
                                It is a website about my illustration works. It contains website, infographic and animation projects.
                            </div>
                        <a href="http://localhost:5173/interactive-resume" target="_blank">
                            <div className="portfolio-text-button">VIEW WEBSITE</div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Body