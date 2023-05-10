import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    biodataSelector,
    evaluationDataSelector,
    jobDataSelector,
    institutionDataSelector,
    deleteMessageSelector
} from "./selector";
import {
    getBiodata,
    getEvaluationData,
    getJobData,
    getInstitutionData,
    deleteInstitutionEntry
} from "./action";

const ProfileComponent = lazy(() => import("../../components/Profile"));

export class ProfileContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        biodataResponse: PropTypes.any,
        evaluationDataResponse: PropTypes.array,
        jobDataResponse: PropTypes.array,
        institutionDataResponse: PropTypes.array,
        deleteMessageResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
        this.state = ({
            showAllEvaluation: false,
            showAllJob: false,
            showAllInstitution: false,
            showModal: false,
        });
        this.handleShow = this.handleShow.bind(this);
        this.handleDeleteInstitution = this.handleDeleteInstitution.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        const { biodataResponse, evaluationDataResponse, jobDataResponse, institutionDataResponse } = this.props;
        if (!biodataResponse) {
            this.props.getProfileBiodata();
        }
        if (evaluationDataResponse.length === 0) {
            this.props.getProfileEvaluationData();
        }
        if (jobDataResponse.length === 0) {
            this.props.getProfileJobData();
        }
        if (institutionDataResponse.length === 0) {
            this.props.getProfileInstitutionData();
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        const { deleteMessageResponse, institutionDataResponse } = this.props;
        const { showModal } = this.state;
        if (prevProps.deleteMessageResponse !== deleteMessageResponse && deleteMessageResponse) {
            this.toggleModal();
        }
        if (prevState.showModal !== showModal && prevState.showModal) {
            this.props.getProfileInstitutionData();
        }
    }

    private handleShow(e: any): void {
        const { name } = e.target;
        this.setState({
            ...this.state,
            [name]: !this.state[name],
        });
    }

    private handleDeleteInstitution(id: string): void {
        this.props.deleteInstitutionEntryData(id);
    }

    private toggleModal(): void {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal,
        });
    }

    render() {
        const { biodataResponse, evaluationDataResponse, jobDataResponse, institutionDataResponse } = this.props;
        const { showAllEvaluation, showAllJob, showAllInstitution, showModal } = this.state;
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
                handleDeleteInstitution={this.handleDeleteInstitution}
                showModal={showModal}
                toggleModal={this.toggleModal}
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
        deleteMessageResponse: deleteMessageSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getProfileBiodata: () => dispatch(getBiodata()),
        getProfileEvaluationData: () => dispatch(getEvaluationData()),
        getProfileJobData: () => dispatch(getJobData()),
        getProfileInstitutionData: () => dispatch(getInstitutionData()),
        deleteInstitutionEntryData: (params: any) => dispatch(deleteInstitutionEntry(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);