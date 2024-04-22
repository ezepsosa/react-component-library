import "./App.css";
import Badge from "./components/badges/Badge";

function App() {
  return (
    <>
      <Badge isSquared={true} text={"El mejor"} color={"warning"}></Badge>
      <Badge isSquared={true} text={"El mejor"} color={"info"}></Badge>
      <Badge isSquared={true} text={"El mejor"} color={"purple"}></Badge>
      <Badge isSquared={true} text={"El mejor"} color={"pink"}></Badge>
      <Badge isSquared={true} text={"El mejor"} color={"gray"}></Badge>
    </>
  );
}

export default App;
