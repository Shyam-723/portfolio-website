import React from 'react';
import './BodyContainer.css';
import {ScrollContainer, Animator, ScrollPage, batch, Sticky, Fade, MoveOut} from "react-scroll-motion";

function BodyContainer() {
    return (
        <div className="body-content">

            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
                        <div className="animation-text">
                            Hello! Welcome to my webpage! Scroll down to know more about me, or click on `Projects`
                            to see some of my work.
                        </div>

                        <div className="space">
                        </div>

                        <div className='animation-text'>
                            I am a 3rd year CSE Student at UC Merced. I am a member of the student-run HackMerced Team
                            and a Chancellor Scholar recipient.
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

        </div> // End of file
    );
}

export default BodyContainer;