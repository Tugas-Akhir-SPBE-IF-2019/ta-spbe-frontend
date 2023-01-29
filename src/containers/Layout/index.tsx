import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { loadingSelector } from "./selector";
import { getLoaderState } from "./action";

const GuestDashboardContainer = lazy(() => import("../GuestDashboard"));
const UploadDocumentsContainer = lazy(() => import("../UploadDocuments"));

export class LayoutContainer extends PureComponent<any, any> {
    static propTypes = {
        loadingResponse: PropTypes.bool,
        history: PropTypes.any,
    }
    
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path={"/"}
                    render={(props: any) => {
                      return <GuestDashboardContainer {...this.props} {...props} />;
                    }}
                />
                <Route
                    path={"/upload"}
                    render={(props: any) => {
                      return <UploadDocumentsContainer {...this.props} {...props} />;
                    }}
                />
            </Switch>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        loadingResponse: loadingSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        setLoading: (params: any) => dispatch(getLoaderState(params)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);