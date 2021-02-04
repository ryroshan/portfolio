import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages } from './data/resume_data'


const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
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
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title" style={{paddingLeft:'10px'}}>
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name" style={{paddingLeft:'10px'}}>
                            Roorkee Institute of Technology, Roorkee Uttarakhand <span style={{color:'#000d00'}}>(2014-2018) </span>
                        </p>
                        {/* <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from Academy of Technology</p> */}
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading" >
                          Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title" style={{paddingLeft:'10px'}}>
                            Full time
                        </h5>
                        <p className="resume-card__name" style={{paddingLeft:'10px'}}>
                            Wipro (Nov / 2018 - Present)
                        </p>
                       
                        {/* <p className="resume-card__details" style={{paddingLeft:'10px'}}>I work as a developer</p> */}
                    </div> 
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages" style={{paddingTop:'10px'}}>
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages" style={{paddingTop:'10px'}}>
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;