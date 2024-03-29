import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';

const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div options={{max:45,scale:1,speed:450}}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

          </div>
        </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}> Overview </h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'>
        Proficient in backend technologies such as Django, Django Rest Framework, and Node.js, I specialize in building scalable and performant web applications. On the frontend, I craft engaging user interfaces with React, HTML, CSS, and styling frameworks like Bootstrap and Tailwind CSS. Skilled in Docker for seamless deployments, CI/CD for automation, and possess basic Ansible knowledge for infrastructure tasks. Adept at configuring web servers and prioritizing security, I ensure robust and secure deployments. With a keen eye for UI/UX design, I create visually appealing and user-friendly experiences. Committed to continuous learning, I stay updated on the latest trends in web development. Let's collaborate to elevate your digital presence! 💡💻

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")