import React from 'react';

const Contactenos = () => {
  return (
    <section className='container padding-ar-ab'>
      <div className="titulo-header">
        <h1>Contáctanos</h1>
      </div>
        
        <form id="contact_form" action="#" encType="multipart/form-data">
          <div className="campos">
            <label className="required" htmlFor="name">Nombre:</label><br />
            <input id="name" className="input" name="name" type="text"  size="30" /><br />
            <span id="name_validation" className="error_message"></span>
            <br />
          </div>
          <div className="campos">
            <label className="required" htmlFor="email">Email:</label><br />
            <input id="email" className="input" name="email" type="text"  size="30" /><br />
            <span id="email_validation" className="error_message"></span>
            <br />
          </div>
          <div className="campos">
            <label className="required" htmlFor="message">Mensaje:</label><br />
            <textarea id="message" className="input" name="message" rows="7" cols="30"></textarea><br />
            <span id="message_validation" className="error_message"></span>
            <br />
          </div>
            
            <input id="submit_button" type="submit" value="Enviar" />
        </form>
    </section>
    
  )
}

export default Contactenos