import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { assessmentListSelector } from "./selector";
import { getAssessmentList } from "./action";

const UserDashboardComponent = lazy(() => import("../../components/UserDashboard"));

export class UserDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        assessmentResponse: PropTypes.array,
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getAssessmentData();
    }

    render() {
        const { assessmentResponse } = this.props;
        return (
            <UserDashboardComponent assessmentResponse={assessmentResponse} />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        assessmentResponse: assessmentListSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getAssessmentData: () => dispatch(getAssessmentList()),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDashboardContainer);