import React from 'react';
import api from '../assets/icons/api.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'

import Skillcard from './Skillcard';
import { motion } from 'framer-motion'
const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js and "
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using and mongoDB",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using express-rest-api "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and Leetcode"
    }
]


const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro" style={{padding:'15px 20px' , letterSpacing: 0.8, font:'caption'}}>
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading" style={{padding:'10px', background:'grey', fontWeight:'bold'}}>What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;