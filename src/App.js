import { Container } from "react-bootstrap";
import "./App.css";
import MediaQuery from "react-responsive";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <MediaQuery maxWidth={768}>
        <Container className="w-75 mt-5 mb-5 container">
          <Home />
        </Container>
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <Container className="w-25 mt-5 mb-5 container">
          <Home />
        </Container>
      </MediaQuery>
    </>
  );
}

export default App;
