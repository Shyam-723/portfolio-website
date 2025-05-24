import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="text-white text-center px-4 mt-[-200px] text-outline font-pixel">
      <div>
        <h1 className="text-2xl mb-6">Welcome to My Website!</h1>
        <p className="text-xl mb-4">
          I'm a full-stack developer branching into AI/ML in Computer Vision!
          Currently this webpage is under development! (._.)
        </p>
        <p>
          Scroll down to learn more about me, or click <Link to="/projects"><i><u>here</u></i></Link> to see some of my projects!
        </p>
      </div>
    </section>
  );
};

export default Welcome;
