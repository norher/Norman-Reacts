import React, { Component } from 'react';
import devspot from '../assets/images/devspot.png';
import generated from '../assets/images/generated.png';
import rainorshine from '../assets/images/rainorshine.png';
import notes from '../assets/images/notes.png';

const projectData = [
    {
        key: 1,
        id: 'div1',
        screenshot: devspot,
        altText: 'Devspot screenshot',
        title: 'Devspot',
        deployed: 'https://glacial-lowlands-31637.herokuapp.com',
        github: 'https://github.com/bward3/devspot',
        description: 'Social media platform for developers to showcase their skills'
    },
    {
        key: 2,
        id: 'div2',
        screenshot: generated,
        altText: 'Generated Team Profile screenshot',
        title: 'Team Profile Generator',
        deployed: 'https://github.com/norher/Team-Profile-Generator',
        github: 'https://github.com/norher/Team-Profile-Generator',
        description: 'Generate an html page for your team through a series of questions'
    },
    {
        key: 3,
        id: 'div3',
        screenshot: rainorshine,
        altText: 'Rainorshine screenshot',
        title: 'Rainorshine',
        deployed: 'https://darrinling.github.io/rain-or-shine/',
        github: 'https://github.com/darrinling/rain-or-shine',
        description: 'Front end application that will render options for eat, drink or parks based on weather data'
    },
    {
        key: 4,
        id: 'div4',
        screenshot: notes,
        altText: 'notes screenshot',
        title: 'Note Taker',
        deployed: 'https://baroque-livre-77471.herokuapp.com/',
        github: 'https://github.com/norher/Note-Taker',
        description: 'Full stack application that acts as a notetaker app.'
    },
];

const Projects = () => {
    return (
        <main>
            <section>
                {projectData.map(
                    ({
                        key,
                        id,
                        screenshot,
                        altText,
                        title,
                        deployed,
                        github,
                        description,
                    }) => {
                        return (
                            <div key={key} className="card">
                                <img className="card-img" src='{screenshot}' alt={altText} />
                                <div className='card-body'>
                                    <h4>
                                        <a
                                        className='card-title'
                                        href={deployed}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        >{title}</a>
                                    </h4>
                                    <p className='card-text'>{description}</p>
                                    <a
                                    href={github}
                                    className='btn'
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    >Check out Repo</a>
                                </div>
                            </div>
                        );
                    }
                )}
            </section>
        </main>
    )
};

export default Projects;