import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProfessionalPhoto from '../images/Professional_Photo.jpeg';
import HackathonPhoto from '../images/ExoSky.jpeg'

interface ContentBlockProps {
  title: string;
  description: React.ReactNode; /* Needed to render JSX elements - Should I just make them all this?*/
  imageUrl: string;
  imageAlt: string;
  imageBlurb: string;
  reversed?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ 
  title, 
  description, 
  imageUrl,
  imageBlurb, 
  imageAlt, 
  reversed = false 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 py-16`}
    >
      <div className="flex-1">
        <div className="rounded-lg overflow-hidden shadow-xl h-full">
          <figure> 
            <img 
              src={imageUrl} 
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <figcaption>{imageBlurb}</figcaption>
          </figure>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4 text-primary-800">{title}</h3>
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-teal-600 mx-auto mb-6"
          />
        </div>
        
        <div className="space-y-8">
          <ContentBlock 
            title="My Journey"
            description={
              <>
                I'm a college student currently obtaining my Bachelor's in Computer Science at UC Merced!<br /><br />
                Growing up in Texas, I was exposed to the tail end of the 'Dot-Com Boom' and saw the need and potential of Computer Science.<br /><br />
                <strong>At UC Merced:</strong>
                <ul>
                  <li>- I work in our IT Department on the school website</li>
                  <li>- Work on cutting-edge research with AI in Computer Vision</li>
                  <li>- Am the Executive Director of HackMerced, a student-run org that hosts a 200-person hackathon</li>
                  <li>- Work as a consultant at 180 Degrees Consulting</li>
                </ul>
              </>
            }
            imageUrl={ProfessionalPhoto}
            imageBlurb=''
            imageAlt="Journey"
          />
          
          <ContentBlock 
            title="My Skills"
            description={
              <>
              I specialize in full-stack development, including but not limited to:
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Modern CSS Frameworks</li>
                <li>Figma</li>
                <li>SupaBase & FireBase</li>
                <li>Docker</li>
              </ul>
              
              I'm currently branching out to AI/ML in Computer Vision. So far, I've worked with:
              <ul>
              <li>OpenCV</li>
              <li>ResNet</li>
              <li>PyTorch</li>
              </ul>
              </>
            }
            imageUrl={HackathonPhoto}
            imageBlurb='Our team winning our local Nasa SpaceApps!'
            imageAlt="Developer skills"
            reversed={true}
          />
          
          <ContentBlock 
            title="Extracirciulars" /* THis is spelt VERY wrong */
            description={
              <>
                I like to try new things and meet new people! I:
                <ul>
                  <li>Play Basketball</li>
                  <li>Took part in a competetive dance team</li>
                  <li>Manage a 20 person team that hosts a 200 person hackathon</li>
                  <li>Hike</li>
                </ul>
              </>
            }
            imageUrl=""
            imageBlurb=''
            imageAlt="Extra-Stuff"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;