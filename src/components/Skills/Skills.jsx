import React from 'react';
import { FiCode, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'Next.js', level: 95 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      icon: <FiDatabase />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 87 },
        { name: 'GraphQL', level: 82 },
      ],
    },
    {
      icon: <FiCloud />,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 80 },
        { name: 'CI/CD', level: 90 },
        { name: 'Terraform', level: 75 },
      ],
    },
    {
      icon: <FiTool />,
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Figma', level: 85 },
        { name: 'Jest', level: 88 },
        { name: 'Webpack', level: 82 },
        { name: 'Agile/Scrum', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Continuously learning and adapting to new technologies to build better solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 0.1 + index * 0.05)}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-cta">
          <h3>Always Learning</h3>
          <p>
            Currently exploring: Rust, WebAssembly, Edge Computing, and Machine Learning
            integration in web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;