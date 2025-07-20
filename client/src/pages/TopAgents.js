import React from 'react';

const TopAgents = () => {
  return (
    <>
      <div className="about-header">
        <h1>Топ 10 AI-агентов</h1>
      </div>
      <section className="team">
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/OpenAI_Logo.svg" alt="ChatGPT" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>ChatGPT</h3>
          <p>OpenAI</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Google_Assistant_logo.png" alt="Google Assistant" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>Google Assistant</h3>
          <p>Google</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Amazon_Alexa_App_Logo.png" alt="Amazon Alexa" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>Amazon Alexa</h3>
          <p>Amazon</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Microsoft_Cortana_logo.png" alt="Cortana" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>Cortana</h3>
          <p>Microsoft</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Siri_Logo.png" alt="Siri" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>Siri</h3>
          <p>Apple</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Replika_logo.png" alt="Replika" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>Replika</h3>
          <p>Luka, Inc.</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/IBM_Watson_logo_2017.png" alt="IBM Watson" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>IBM Watson</h3>
          <p>IBM</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Baidu_logo.png" alt="Baidu DuerOS" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>Baidu DuerOS</h3>
          <p>Baidu</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Yandex_logo_2021.svg" alt="Алиса" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>Алиса</h3>
          <p>Яндекс</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Xiaoice_logo.png" alt="Xiaoice" className="team-photo" style={{objectFit: 'contain', background: '#fff'}} />
          </div>
          <h3>Xiaoice</h3>
          <p>Microsoft (Китай)</p>
        </div>
      </section>
    </>
  );
};

export default TopAgents; 