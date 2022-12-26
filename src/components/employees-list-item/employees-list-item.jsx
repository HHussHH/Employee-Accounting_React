import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, inCrease, stars } = props;
  let classNames = "list-group-item d-flex justify-content-between";
  if (inCrease) {
    classNames += " increase";
  }
  if (stars) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span
        onClick={onToggleProp}
        className="list-group-item-label"
        data-toggle="stars"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
          data-toggle="inCrease"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
