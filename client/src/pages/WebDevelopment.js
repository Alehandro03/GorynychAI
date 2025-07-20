import React from 'react';

const WebDevelopment = () => {
  return (
    <>
      <div className="about-header">
        <h1>Портфолио сайтов</h1>
        <p>Примеры проектов, которые мы можем реализовать для вашего бизнеса</p>
      </div>
      <section className="team">
        <div className="team-member">
          <div className="photo-container">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Корпоративный сайт" className="team-photo" style={{objectFit: 'cover'}} />
          </div>
          <h3>Корпоративный сайт</h3>
          <p>Современный сайт для компании с каталогом услуг и формой обратной связи.</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Интернет-магазин" className="team-photo" style={{objectFit: 'cover'}} />
          </div>
          <h3>Интернет-магазин</h3>
          <p>Платформа для онлайн-продаж с корзиной, оплатой и личным кабинетом.</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Лендинг" className="team-photo" style={{objectFit: 'cover'}} />
          </div>
          <h3>Лендинг</h3>
          <p>Яркая одностраничная презентация продукта или услуги для привлечения клиентов.</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Портфолио" className="team-photo" style={{objectFit: 'cover'}} />
          </div>
          <h3>Портфолио</h3>
          <p>Персональный сайт для творческих специалистов: дизайнеров, фотографов, копирайтеров.</p>
        </div>
      </section>
      <div style={{textAlign: 'center', marginTop: '2rem'}}>
        <h2>Хотите такой сайт? <a href="https://wa.me/79650116761" target="_blank" rel="noopener noreferrer">Свяжитесь с нами в WhatsApp!</a></h2>
      </div>
    </>
  );
};

export default WebDevelopment; 