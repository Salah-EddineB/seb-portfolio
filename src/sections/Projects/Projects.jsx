import styles from './ProjectsStyles.module.css';
import Hanouteek from '../../assets/Hanouteek.webp';
import EgyDead from '../../assets/EgyDead.jpg';
import Animerco from '../../assets/Animerco.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Hanouteek}
          link="https://hanouteek.com/"
          h3="Hanouteek"
          p="Local E-Commerce for Clothing"
        />
        <ProjectCard
          src={EgyDead}
          link="https://egydead.fyi/"
          h3="EgyDead"
          p="Movies Streaming"
        />
        <ProjectCard
          src={Animerco}
          link="https://animerco.org/"
          h3="Animerco"
          p="Anime Streaming"
        />
      </div>
    </section>
  );
}

export default Projects;
