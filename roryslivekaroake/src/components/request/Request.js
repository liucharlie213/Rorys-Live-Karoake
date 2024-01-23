import React, { useState, useRef } from 'react';
import "./request.css"
import emailjs from 'emailjs-com'; // Import emailjs

const Request = () => {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      songTitle:"",
      songArtist: ""
  });
  const [error, setError] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.songTitle || !formData.songArtist) {
        setError('Please fill in all fields');
        return false;
    }
    setError('');
    return true;
  };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateForm()) {
        return;
      }
  
      // EmailJS function to send form data
      emailjs.sendForm('service_ftsaeiq', 'template_5i0v1al', form.current, 'GhFjx1MiJf0NQ-uTV')
        .then((result) => {
          console.log('Email sent:', result.text);
        }, (error) => {
          console.log('Email sending error:', error.text);
        });

        setFormData({
          name: "",
          email: "",
          songTitle: "",
          songArtist: ""
        });
        setError('');
    };

  return (
    <section id="request">
      <div className="request__container">
        <div className="request__title">
          <p>REQUEST A SONG</p>
        </div>
        <div className="request__song">
          <div className="request__text">
            <p>
              Got a song you'd love to perform, but can't find it on the list?</p>
            <p>
            Fill in your details and your song request, and I'll try my best to add it!
            </p>
          </div>

        <div className="request__form">
          <form ref={form}>
            <div className="request__info">
              <label><p className="form__label">Name:</p></label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="request__input" />
            </div>
            <div className="request__info">
              <label><p className="form__label">Email:</p></label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="request__input" />
            </div>
            <div className="request__info">
              <label><p className='form__label'>Song Title:</p></label>
              <input 
                type="text"
                name="songTitle"
                value={formData.songTitle}
                onChange={handleChange}
                className="request__input" />
            </div>
            <div className="request__info">
              <label><p className='form__label'>Song Artist:</p></label>
              <input 
                type="text"
                name="songArtist"
                value={formData.songArtist}
                onChange={handleChange}
                className="request__input"
                id="last__input" />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="submit__container">
              <button onClick={handleSubmit} type="submit" className="submit__button">Got it!</button>
            </div>
          </form>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Request;
