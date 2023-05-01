import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    biodataSelector,
    evaluationDataSelector,
    jobDataSelector,
    institutionDataSelector
} from "./selector";
import {
    getBiodata,
    getEvaluationData,
    getJobData,
    getInstitutionData
} from "./action";

const ProfileComponent = lazy(() => import("../../components/Profile"));

export class ProfileContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        biodataResponse: PropTypes.any,
        evaluationDataResponse: PropTypes.array,
        jobDataResponse: PropTypes.array,
        institutionDataResponse: PropTypes.array,
    };

    constructor(props: any) {
        super(props);
        this.state = ({
            showAllEvaluation: false,
            showAllJob: false,
            showAllInstitution: false,
        });
        this.handleShow = this.handleShow.bind(this);
    }

    componentDidMount() {
        this.props.getProfileBiodata();
        this.props.getProfileEvaluationData();
        this.props.getProfileJobData();
        this.props.getProfileInstitutionData();
    }

    private handleShow(e: any): void {
        const { name } = e.target;
        this.setState({
            ...this.state,
            [name]: !this.state[name],
        });
    }

    render() {
        const { biodataResponse, evaluationDataResponse, jobDataResponse, institutionDataResponse } = this.props;
        const { showAllEvaluation, showAllJob, showAllInstitution } = this.state;
        return (
            <ProfileComponent
                biodataResponse={biodataResponse}
                evaluationDataResponse={evaluationDataResponse}
                jobDataResponse={jobDataResponse}
                institutionDataResponse={institutionDataResponse}
                handleShow={this.handleShow}
                showAllEvaluation={showAllEvaluation}
                showAllJob={showAllJob}
                showAllInstitution={showAllInstitution}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        biodataResponse: biodataSelector(state),
        evaluationDataResponse: evaluationDataSelector(state),
        jobDataResponse: jobDataSelector(state),
        institutionDataResponse: institutionDataSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getProfileBiodata: () => dispatch(getBiodata()),
        getProfileEvaluationData: () => dispatch(getEvaluationData()),
        getProfileJobData: () => dispatch(getJobData()),
        getProfileInstitutionData: () => dispatch(getInstitutionData()),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);