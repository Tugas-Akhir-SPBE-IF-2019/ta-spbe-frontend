import { PureComponent } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LayoutContainer from "../Layout";

class App extends PureComponent<RouteComponentProps, any> {
    render() {
        return (
            <Provider store={store}>
                <LayoutContainer {...this.props} />
                <ToastContainer />
            </Provider>
        );
    }
}

export default withRouter(App);
