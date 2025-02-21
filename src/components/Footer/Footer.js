import React from "react";
import './Footer.css'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    }

    return (
        <div className="footer"> 
            <footer>
                <div className="footer-link" onClick={scrollToTop} style={{ cursor: "pointer" }}>
                    Back to Top
                </div>
                <div className="footer-images">
                    <a href="https://github.com/Shyam-723" target="_blank" rel="noopener noreferrer">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/github.png`}
                            alt="GitHub Profile"
                            width="40"
                            height="40"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/shyam-gupta-626252260" target="_blank" rel="noopener noreferrer">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Linkedin.png`}
                            alt="LinkedIn Profile"
                            width="40"
                            height="40"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
