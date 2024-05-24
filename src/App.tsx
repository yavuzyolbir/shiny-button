import Button from "./Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Button variant="gradient" size="large" loading={false}>
        Hover Me!
      </Button>
    </div>
  );
}

export default App;
