function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function SecondsCounter() {
  return (
    <div>
      <Welcome name="Jerry" />
    </div>
  );
}

ReactDOM.render(
  <SecondsCounter />,
  document.getElementById('react-container')
);
