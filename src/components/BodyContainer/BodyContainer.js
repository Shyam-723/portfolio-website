import React from 'react';
import './BodyContainer.css';
import {ScrollContainer, Animator, ScrollPage, batch, Sticky, Fade, MoveOut} from "react-scroll-motion";

function BodyContainer() {
    return (
        <div className="body-content">

            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
                        <div className = "scrolling-section"> 
                            <div className="animation-text">
                                Hello! Welcome to my webpage! Scroll down to know more about me, or click on `Projects`
                                to see some of my work.
                            </div>

                            <div className="loading-image">
                            <img src={`${process.env.PUBLIC_URL}/images/my-image.jpg`} alt="Me" />
                            </div>    
                        </div>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                        <div className="scrolling-section">
                            <div className='animation-text'> 
                                <h1>About Me</h1>
                                <p>
                                    I am a 3rd-year Computer Science student at UC Merced. 
                                    I am a member of the student-run HackMerced Team and a Chancellor Scholar recipient.
                                </p>
                            </div>

                            
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

        </div> // End of file
    );
}

export default BodyContainer;