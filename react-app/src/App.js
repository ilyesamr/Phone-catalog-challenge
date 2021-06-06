import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Phones from "./components/Phones";
import getApiData from './services/Api';
import PhoneDetails from "./components/PhoneDetails";
import Spinner from './components/Spinner'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        getApiData().then((data) => setPhones(data));
    }, []);

    function getSelectedPhone(id) {
        const routePhoneId = parseInt(id);
        return phones.find((phone) => phone.id === routePhoneId);
    }

    return (
        <Router>
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path="/">
                        {phones.length === 0 && <Spinner />}
                        <Phones phones={phones}/>
                    </Route>
                    <Route
                        path="/phone/:id"
                        render={(props) => (
                            <PhoneDetails phone={getSelectedPhone(props.match.params.id)} />
                        )}
                    ></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
