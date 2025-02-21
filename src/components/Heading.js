export default function Heading(props) {
  return (
    <div>
      <h1>Welcome </h1>
      <p>
        Hello {props.firstname} {props.lastname}
      </p>
    </div>
  );
}
