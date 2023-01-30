import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { indexListSelector } from "./selector";
import { getIndexList } from "./action";

const GuestDashboardComponent = lazy(() => import("../../components/GuestDashboard"));

export class GuestDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        indexResponse: PropTypes.array,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <GuestDashboardComponent />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        indexResponse: indexListSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getIndexData: () => dispatch(getIndexList()),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuestDashboardComponent);