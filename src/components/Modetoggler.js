export default function Modetoggler() {
  const darkModeOn = true;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;

  function modeHandler() {
    darkModeOn = !darkMode;
    if (darkModeOn == true) {
      console.log("Dark Mode is ON");
    } else {
      console.log("Light Model is ON");
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={modeHandler}>Toggle Mode</button>
    </div>
  );
}
