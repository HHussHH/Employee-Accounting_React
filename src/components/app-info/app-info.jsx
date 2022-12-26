import "./app-info.css";
const AppInfo = ({ count, countIncrease }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании ...</h1>
      <h2>Общее число сотрудников: {count}</h2>
      <h2>Премию получат: {countIncrease}</h2>
    </div>
  );
};

export default AppInfo;
