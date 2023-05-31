import { toUSD, formatDate } from "../../utilities/index";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import SavingsIcon from "../../assets/img/icono_ahorro.svg";
import FoodIcon from "../../assets/img/icono_comida.svg";
import HomeIcon from "../../assets/img/icono_casa.svg";
import MiscellaneousIcon from "../../assets/img/icono_gastos.svg";
import EntertainmentIcon from "../../assets/img/icono_ocio.svg";
import HealthIcon from "../../assets/img/icono_salud.svg";
import SubscriptionsIcon from "../../assets/img/icono_suscripciones.svg";

const iconsDictionary = {
  savings: SavingsIcon,
  food: FoodIcon,
  home: HomeIcon,
  miscellaneous: MiscellaneousIcon,
  entertainment: EntertainmentIcon,
  health: HealthIcon,
  subscriptions: SubscriptionsIcon,
};

const Expense = ({ expense, setEditExpense, deleteExpense }) => {
  const { category, name, amount, date, id } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => deleteExpense(id)}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={iconsDictionary[category]} alt="Expense Icon" />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Added on: {""}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{toUSD(Number(amount))}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
export default Expense;
