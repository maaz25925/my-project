import Projects from './Projects'
import ProjectData from './ProjectData';
import "./Projects.css";
import Hero from './Hero';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./Show.css";

const Show = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const keys = ['project_name', 'description', 'tech_stack'];

  const filteredProjects = ProjectData.filter((item) =>
    keys.some((key) =>
      Array.isArray(item[key])
        ? item[key].some((data) => data.toLowerCase().includes(searchQuery.toLowerCase()))
        : item[key].toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      {/* Search Bar */}
      <div className='search-bar'>
        <div className='input-wrapper'>
          <FaSearch id="search-icon" />
          <input
            type='text'
            id='searchInput'
            placeholder='search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Hero />

      <div className='project-container'>
        {filteredProjects.map((project) => (
          <Projects
            key={project.id}
            imgsrc={project.imgsrc}
            type={project.type}
            year={project.year}
            project_name={project.project_name}
            tech_stack={project.tech_stack}
            description={project.description}
            link={project.link}
            majorProject={project.majorProject}
          />
        ))}
      </div>

      <div className="test">
        <h1 className="bg-white">Maaz</h1>
      </div>
    </>
  )
}

export default Show;