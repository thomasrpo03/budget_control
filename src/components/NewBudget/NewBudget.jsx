import { useState } from "react";
import Message from "../Message/Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage("Not a valid budget");

      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleBudget}>
        <div className="campo">
          <label htmlFor="">Set your budget</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Add your budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Add" className="boton" />
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};
export default NewBudget;
