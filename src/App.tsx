import Button from "./Button";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Button variant="gradient" size="large">
        Shiny Button
      </Button>
    </div>
  );
}

export default Home;
