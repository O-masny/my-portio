import CircularPercent from "../components/utils/circular_percent";
import styles from "../../styles/experience.module.css";

const ExperiencePage = () => {
  const skills = [
    { name: "JavaScript", percent: 90 },
    { name: "React", percent: 85 },
    { name: "Node.js", percent: 80 },
    { name: "CSS", percent: 75 },
    { name: "Python", percent: 70 },
  ];

  return (
    <div className={styles.experienceContainer}>
      <h1 className={styles.experienceHeading}>What I do?</h1>

      <div className={styles.skillsWrapper}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <CircularPercent name={skill.name} percent={skill.percent} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
