import React from 'react'

const SectionResume = () => {
    return (
        <section>
          <div className="resume-header">
          <h2>resume</h2>
          </div>
          <div className="resume-skills">
          <h1> skills</h1>
          <ul>
             <li>html5, css3</li>
              <li>javascript</li>
              <li>ReactJS</li>
          </ul>
          </div>
          <div className="resume-education">
          <h1>Education</h1>
          <ul>
            <li>TeamTreeHouse</li>
            <li>FreeCodeCamp</li>
            <li>HBO</li>
            <li>HAVO</li>
            </ul>
          </div>
          <div className="resume-career">
          <h1>Career</h1>
          <ul>
            <li>KPN internet monteur</li>
            <li>Treinverkeersleider</li>
            <li>Logistiek Medewerker</li>
            <li>Medewerker binnendienst</li>
            </ul>
          </div>
        </section>
    )
}

export default SectionResume