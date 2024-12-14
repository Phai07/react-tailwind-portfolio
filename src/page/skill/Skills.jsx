import React from 'react'
import SkillList from './SkillList.jsx'
import styles from './SkillsStyles.module.css'
import checkMarkIcon  from '../../assets/images/checkmark-dark.svg'


const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
    <h1 className="text-4xl font-mono font-bold mb-6">Skills</h1>
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="HTML" />
      <SkillList src={checkMarkIcon} skill="CSS" />
      <SkillList src={checkMarkIcon} skill="JavaScript" />
      {/* <SkillList src={checkMarkIcon} skill="TypeScript" /> */}
      <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      <SkillList src={checkMarkIcon} skill="React " />
    </div>
    <hr className="w-[50%] h-0.5 border-none bg-current my-8 mx-auto" />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="SQL" />
      <SkillList src={checkMarkIcon} skill="MongoDB" />
      <SkillList src={checkMarkIcon} skill="Express" />
      <SkillList src={checkMarkIcon} skill="Node.js " />
    </div>
    <hr className="w-[55%] h-0.5 border-none bg-current my-8 mx-auto" />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Git/Github" />
      <SkillList src={checkMarkIcon} skill="Figma" />
      <SkillList src={checkMarkIcon} skill="Trello" />
      <SkillList src={checkMarkIcon} skill="Render" />
      <SkillList src={checkMarkIcon} skill="Vercel" />
      <SkillList src={checkMarkIcon} skill="Postman" />
      <SkillList src={checkMarkIcon} skill="MongoDBCompass" />
    </div>
  </section>
  )
}

export default Skills