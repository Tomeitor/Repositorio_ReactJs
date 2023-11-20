import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Contacto = () => {
  return (
    <main className="mainContacto">
      <p className="p_contacto">
        Contactate con nosotros para resolver <br />
        cualquier duda o problema mediante nuestro <br />
        Instagram o por Whatsapp.
      </p>
      <div className="container">
        <div className="suspicions_contact_page">
          <p className="p_suspicions_contact_page">@Suspicions</p>
        </div>
        <div className="flex_contacto">
          <FontAwesomeIcon
            className="logos_contact_page"
            icon={faSquareInstagram}
          />
          <FontAwesomeIcon
            className="logos_contact_page"
            icon={faSquareWhatsapp}
          />
          <FontAwesomeIcon
            className="logos_contact_page"
            icon={faSquareTwitter}
          />
          <FontAwesomeIcon className="logos_contact_page" icon={faEnvelope} />
        </div>
      </div>
      <div className="margin_contacto3">
        <div className="redes_contacto flex_contacto margin_contacto2">
          Respondemos consultas de lunes a viernes de 15:00 hs a 19:00 hs.
        </div>
        <div className="redes_contacto flex_contacto margin_contacto2">
          vamos a responderte lo antes posible.
        </div>
      </div>
      <form className="form_contact_page">
        <h2 className="h2_contact_page">CONTACTATE CON NOSOTROS</h2>
        <p className="p_contact_page" type="Nombre:">
          <input
            className="input_contact_page"
            placeholder="Escribe tu nombre aqui..."
          ></input>
        </p>
        <p className="p_contact_page" type="Mail:">
          <input
            className="input_contact_page"
            placeholder="Dinos como contactarte..."
          ></input>
        </p>
        <p className="p_contact_page" type="Mensaje / consulta:">
          <input
            className="input_contact_page"
            placeholder="Que nos quieres decir..."
          ></input>
        </p>
        <button className="button_contact_page">Enviar Mensaje</button>
        <div className="div_contact_page">
          <span className="span_contact_page fa fa-phone"></span>+54 11 23456789
          <span className="span_contact_page fa fa-envelope-o"></span>{" "}
          SuspicionsArg@gmail.com
        </div>
      </form>
    </main>
  );
};

export default Contacto;
