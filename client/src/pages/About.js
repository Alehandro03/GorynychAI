import React from 'react';

const About = () => {
  return (
    <>
      <div className="about-header">
        <h1>Наша команда</h1>
      </div>
      <section className="team">
        <div className="team-member">
          <div className="photo-container">
            <img src="/images/team/Александр.jpg" alt="Александр" className="team-photo" data-orientation="portrait" style={{objectPosition: '55% 80%'}} />
          </div>
          <h3>Александр</h3>
          <p>Full-stack разработчик</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="/images/team/Илья.jpg" alt="Илья" className="team-photo" data-orientation="landscape" style={{objectPosition: '60% 75%'}} />
          </div>
          <h3>Илья</h3>
          <p>Frontend специалист</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="/images/team/Артем.jpg" alt="Артем" className="team-photo" data-orientation="portrait" style={{objectPosition: '55% 90%'}} />
          </div>
          <h3>Артем</h3>
          <p>ИИ-специалист, интегратор AI-агентов</p>
        </div>
      </section>
    </>
  );
};

export default About; 