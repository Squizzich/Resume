function Footer() {
    return (
        <footer>
            <div id="footer-container">
                <div className="footer-column">
                    <div className="title">ABOUT</div>
                    <div className="avatar"></div>
                    <div className="text">Here will be an interesting text about me!</div>
                </div>

                <div className="footer-column">
                    <div className="title">HOME</div>
                    <div className="text">Just empty</div>
                </div>

                <div className="footer-column footer-column-last">
                    <div className="title">CONTACT</div>
                    <div className="text">If you have any questions about my services, feel free to contact me! Below
                        are the social pages & my email
                    </div>
                    <div>
                        <a href="https://facebook.com" target="_blank">
                            <div className="icon icon-facebook"></div>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <div className="icon icon-twitter"></div>
                        </a>
                        <a href="https://gmail.com" target="_blank">
                            <div className="icon icon-last icon-gmail"></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer