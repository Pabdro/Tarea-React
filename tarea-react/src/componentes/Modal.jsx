import CerrarBtn from "../assets/cerrar.svg";
import FormModal from "./FormModal";

const Modal = () => {

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-custom-black ">
      <div className="absolute right-3 top-3 w-5 h-5 logo">
       <img src={CerrarBtn} alt="cerrar modal"/>
      </div>
      <FormModal />
    </div>
  );
};

export default Modal;