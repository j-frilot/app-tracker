import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NewJobForm from "./components/NewJobForm";
import DateDesc from "./components/pages/DateDesc";
import JobsDenied from "./components/pages/JobsDenied";
import TitleAsc from "./components/pages/TitleAsc";

function App() {
    return (
        <main className="container">
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
        </main>
    );
}

export default App;
