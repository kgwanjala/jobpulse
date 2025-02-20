export default function Footer(props) {
  return (
    <div className="copyright">
      <p>
        Made with {props.firstname} {props.lastname}, {props.occupation}
      </p>
    </div>
  );
}
