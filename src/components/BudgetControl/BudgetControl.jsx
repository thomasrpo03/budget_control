import { toUSD } from "../../utilities/index";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  budget,
  expenses,
  setExpenses,
  setBudget,
  setIsValidBudget,
}) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => parseFloat(expense.amount) + total,
      0
    );

    const totalAvailable = budget - totalSpent;

    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setAvailable(totalAvailable);
    setSpent(totalSpent);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);
  }, [expenses]);

  const handleReset = () => {
    const result = confirm("Are you sure you want to reset the app?");

    if (result) {
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#16bf00",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#16bf00",
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleReset}>
          Reset Budget
        </button>
        <p>
          <span>Budget:</span> {toUSD(budget)}
        </p>
        <p>
          <span>Available Balance:</span> {toUSD(Number(available))}
        </p>
        <p>
          <span>Spent:</span> {toUSD(Number(spent))}
        </p>
      </div>
    </div>
  );
};
export default BudgetControl;
