import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

const PaymentCard = () => {
  return (
    <div className="paymentsSection">
      <section
        /* data-aos="fade-up"
            data-aos-duration="1000" */
        className="paymentsContainer"
      >
        <div className="paymentsMiniContainer">
          <FontAwesomeIcon className="paymentsIcon" icon={faTruck} />

          <div className="paymentsList">
            <h2 className="paymentsH2">Envios a todo el país</h2>
            <p className="PaymentsP">
              Envios gratis en compras superiores a $30.000
            </p>
          </div>
        </div>
        <div className="paymentsDivision">
          <p className="paymentsDivision2">│</p>
        </div>
        <div className="paymentsMiniContainer">
          <div className="icono_tomy2">
            <FontAwesomeIcon className="paymentsIcon" icon={faCreditCard} />
          </div>
          <div className="paymentsList">
            <h2 className="paymentsH2">Paga como quieras</h2>
            <p className="PaymentsP">Aceptamos tarjetas de credito y debito</p>
          </div>
        </div>
        <div className="paymentsDivision">
          <p className="paymentsDivision2">│</p>
        </div>
        <div className="paymentsMiniContainer">
          <div className="icono_tomy2">
            <FontAwesomeIcon className="paymentsIcon" icon={faLock} />
          </div>
          <div className="paymentsList">
            <h2 className="paymentsH2">Compras seguras</h2>
            <p className="PaymentsP">
              Tus compras y tus datos estan protegidos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentCard;
