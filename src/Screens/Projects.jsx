import React from 'react'
import './style.css';

const Projects_name = [
    {
        id:1,
        name:"snake-ladder",
        link:"https://blob.sololearn.com/avatars/75aeefa4-d611-4799-b2a5-6ba8f06fac7e.jpg"
        
    },
    {
        id:2,
        name:"snake-ladder",
        link:"https://blob.sololearn.com/avatars/75aeefa4-d611-4799-b2a5-6ba8f06fac7e.jpg"
    },
    {
        id:3,
        name:"snake-ladder",
        link:"https://blob.sololearn.com/avatars/75aeefa4-d611-4799-b2a5-6ba8f06fac7e.jpg"
    },
    {
        id:4,
        name:"snake-ladder",
        link:"https://blob.sololearn.com/avatars/75aeefa4-d611-4799-b2a5-6ba8f06fac7e.jpg"
    },
    {
        id:6,
        name:"snake-ladder",
        link:"https://blob.sololearn.com/avatars/75aeefa4-d611-4799-b2a5-6ba8f06fac7e.jpg"
    },
    {
        id:7,
        name:"snake-ladder",
        link:"https://blob.sololearn.com/avatars/75aeefa4-d611-4799-b2a5-6ba8f06fac7e.jpg"
    },
    {
        id:8,
        name:"snake-ladder",
        link:"https://blob.sololearn.com/avatars/75aeefa4-d611-4799-b2a5-6ba8f06fac7e.jpg"
    },
]

function Projects() {
  return (
    <div className='bg-green-800'>
        <br />
        <center><h2 className="text-xl font-bold" >PROJECTS</h2></center>
        <div className='my-20  gap-3 flex justify-around ' >
            {Projects_name.map((project)=>(
                <div>
                    <div id={project.id} className='scaleclass'>
                    <p>{project.name}</p>
                    <img src={project.link} alt={project.name} width={100} />
                    </div>
                </div>
                )
            )}

        </div>
        <br />
    </div>
  )
}

export default Projects