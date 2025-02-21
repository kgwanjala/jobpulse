import "./Promo.css";

export default function Promo() {
  const style = {
    color: "tomato",
    fontSize: "40px",
    FontFace: "Helvetica",
  };

  return (
    <div className="promo-section">
      <div>
        <h1 style={style}>Don't Miss this deal!</h1>
      </div>
      <div>
        <h2 style={{ color: "green", fontSize: "20px" }}>
          Subscribe to my newsletter and get all the shop items at 50% off!
        </h2>
      </div>
    </div>
  );
}
