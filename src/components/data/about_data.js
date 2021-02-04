import React from 'react';

import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'


const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js, React-Redux, PWA"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, NOsql database MongoDB",
    },
    {
        icon: api,
        title: "API Development",
        about: ["I can develop robust REST API using", <strong key={1}> Express-rest-api </strong>]
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and "
    }
]

export default skills;