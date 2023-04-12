import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    biodataSelector,
    evaluationDataSelector,
    jobDataSelector
} from "./selector";
import {
    getBiodata,
    getEvaluationData,
    getJobData
} from "./action";

const ProfileComponent = lazy(() => import("../../components/Profile"));

export class ProfileContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        biodataResponse: PropTypes.any,
        evaluationDataResponse: PropTypes.array,
        jobDataResponse: PropTypes.array,
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getProfileBiodata();
        this.props.getProfileEvaluationData();
        this.props.getProfileJobData();
    }

    render() {
        const { biodataResponse, evaluationDataResponse, jobDataResponse } = this.props;
        return (
            <ProfileComponent
                biodataResponse={biodataResponse}
                evaluationDataResponse={evaluationDataResponse}
                jobDataResponse={jobDataResponse}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        biodataResponse: biodataSelector(state),
        evaluationDataResponse: evaluationDataSelector(state),
        jobDataResponse: jobDataSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getProfileBiodata: () => dispatch(getBiodata()),
        getProfileEvaluationData: () => dispatch(getEvaluationData()),
        getProfileJobData: () => dispatch(getJobData()),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);