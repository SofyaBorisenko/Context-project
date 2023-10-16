import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <form
          id="subscription"
          name="subscription-form"
          className="subscription-form input button"
        >
          <h5 className="subscription-header">
            Want to be the first to hear<br />about my new posts?
          </h5>
          <p className="subscription-text">
            I’ll send you an email so you don’t miss out!
          </p>
          <input
            type="email"
            placeholder="email"
            required
            autoComplete="email"
            className="subscription-textinput input"
          />
          <button type="button" className="subscription-button button">
            Subscribe
          </button>
        </form>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
