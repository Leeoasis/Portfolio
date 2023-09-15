import React from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectsData from './ProjectsData';
import '../styles/ProjectsCard.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Projects = () => {
  return (  
    <>
  <div className="projects-container">
    <h1 className="projects-title">
  PROJECTS
</h1>
<p className="project-intro">
  Explore some of my Projects: Unleashing the Power of Innovation.
</p>
</div>
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable
        draggable={false}
        showDots={false}
        ssr
        // centerMode={true}
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {ProjectsData.map((val, ind) => {
          return (
            <ProjectsCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              live={val.live}
              source={val.source}
            />
          );
        })}
      </Carousel>
    </div>
    </> 
  );
};

export default Projects;
