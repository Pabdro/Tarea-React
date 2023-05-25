import { useState } from "react";
import iconAdd from "../assets/add.svg"
import Tarea from "./Tarea";

const Tareas = () => {
  const [newTask, setNewTask] = useState(false);
  const [tareasD, setTareasD] = useState([]);

  //setTareasD([{nombre: "comprar pan",fecha:"24-05-20"}])
  return (
    <>
      <h1>Tareas</h1>

      <div className="fixed bottom-5 right-5">
        <img
          className="w-10 hover:cursor-pointer"
          src={iconAdd}
          alt="icono nuevo gasto"
          onClick={() => {
            setNewTask(true);
          }}
        />
      </div>
    </>
  );
};
export default Tareas;
