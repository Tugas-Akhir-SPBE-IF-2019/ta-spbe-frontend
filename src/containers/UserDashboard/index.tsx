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
        this.checkTextColor = this.checkTextColor.bind(this);
    }

    componentDidMount() {
        this.props.getAssessmentData();
    }

    private checkTextColor(status: number): string {
        if (status === 1) {
            return "text-orange"
        }
        else if (status === 2) {
            return "text-green"
        }
        else {
            return "text-blue"
        }
    }

    render() {
        const { assessmentResponse } = this.props;
        return (
            <UserDashboardComponent assessmentResponse={assessmentResponse} checkTextColor={this.checkTextColor} />
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