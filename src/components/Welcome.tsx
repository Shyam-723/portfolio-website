import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (
    <section className="text-white text-center px-4 mt-[-200px] text-outline font-pixel">
      <div>
        <div className="text-5xl mb-6">
          <Typewriter
            options={{
              strings: "Welcome to my website!",
              autoStart: true,
              cursor: '',
          }}/>
        </div>

        <p className="text-xl mb-4">
          I'm a full-stack developer branching into AI/ML in Computer Vision!
        </p>
        <p>
          Scroll down to learn more about me, or click <Link to="/projects"><i><u>here</u></i></Link> to see some of my projects!
        </p>
      </div>
    </section>
  );
};

export default Welcome;
