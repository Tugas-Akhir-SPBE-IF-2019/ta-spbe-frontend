import { PureComponent } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import LayoutContainer from "../Layout";

class App extends PureComponent<RouteComponentProps, any> {
    render() {
        return (
            <Provider store={store}>
                <LayoutContainer {...this.props} />
            </Provider>
        );
    }
}

export default withRouter(App);
