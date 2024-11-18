import React from 'react';

function BodyContainer() {
    return (
        <div className="body-content">
            <img
                src={`${process.env.PUBLIC_URL}/images/my-image.jpg`}
                alt="Me! Shyam Gupta!"
                className="body-image"
            />
            <div className="body-text-box">
                <p>
                    I am a 3rd year CSE Student at UC Merced. I am a member of the
                    student-run HackMerced Team and a Chancellor Scholar recipient!
                </p>
                <p>I have experience with Java, C++, HTML, CSS and JavaScript.</p>
                <p>
                    I'm also interested in Software Engineering, Machine Learning and
                    Data Science!
                </p>
            </div>
        </div>
    );
}

export default BodyContainer;