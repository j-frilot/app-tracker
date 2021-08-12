import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NewJobForm from "./components/NewJobForm";
import DateDesc from "./components/pages/DateDesc";
import JobsDenied from "./components/pages/JobsDenied";
import TitleAsc from "./components/pages/TitleAsc";

function App() {
    return (
        <Container>
            <Header />
            <NewJobForm />
            <Navigation />
            <Switch>
                <Route path="/title">
                    <TitleAsc />
                </Route>
                <Route path="/denied">
                    <JobsDenied />
                </Route>
                <Route path="/">
                    <DateDesc />
                </Route>
            </Switch>
        </Container>
    );
}

export default App;
