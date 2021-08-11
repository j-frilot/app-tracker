import Header from "./components/Header";
import NewJobForm from "./components/NewJobForm";
import CardSection from "./components/CardSection";
import Container from "react-bootstrap/esm/Container";

function App() {
    return (
        <Container>
            <Header />
            <NewJobForm />
            <CardSection />
        </Container>
    );
}

export default App;
