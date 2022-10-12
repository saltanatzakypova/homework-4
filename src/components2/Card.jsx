import "./Card.css";

function Card({ title, price, color, date }) {
  const nowAMoment = new Date().getFullYear();

  const data = date.getFullYear();

  return nowAMoment == data ? (
    <div className="container">
      <div className="Card">
        <div>{title}</div>
        <div>{price}</div>
        <div>{color}</div>
        <div>{date.toLocaleDateString()}</div>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="Card">
        <div>{title}</div>
        <div>{price}</div>
        <div>{color}</div>
        <div>{`${nowAMoment - data} year ago`}</div>
      </div>
    </div>
  );
}
export default Card;
