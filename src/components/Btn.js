export default function Btn() {
  function clickHandler() {
    console.log("You have clicked me!");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}
