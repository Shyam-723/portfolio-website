import React from 'react';
import {ScrollContainer, Animator, ScrollPage, batch, Sticky, Fade, MoveOut} from "react-scroll-motion";

function BodyContainer() {
    return (
        <div className="body-content">

            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span className="animation-text">
                            Hello! Welcome to my webpage! Scroll down to know more about me, or click on `Projects`
                            to see some of my work.
                        </span>
                    </Animator>


                </ScrollPage>
            </ScrollContainer>

            {/*<img*/}
            {/*    src={`${process.env.PUBLIC_URL}/images/my-image.jpg`}*/}
            {/*    alt="Me! Shyam Gupta!"*/}
            {/*    className="body-image"*/}
            {/*/>*/}
            {/*<div className="body-text-box">*/}
            {/*    <p>*/}
            {/*        I am a 3rd year CSE Student at UC Merced. I am a member of the*/}
            {/*        student-run HackMerced Team and a Chancellor Scholar recipient!*/}
            {/*    </p>*/}
            {/*    <p>I have experience with Java, C++, HTML, CSS and JavaScript.</p>*/}
            {/*    <p>*/}
            {/*        I'm also interested in Software Engineering, Machine Learning and*/}
            {/*        Data Science!*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
}

export default BodyContainer;