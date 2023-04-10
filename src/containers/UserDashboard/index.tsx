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
        this.state = {
            showModal: false,
            limit: "",
            page: "",
            institution: "",
            dates: "",
            start_date: "",
            end_date: "",
            status: "",
        }
        this.checkTextColor = this.checkTextColor.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
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

    private toggleModal(): void {
        const { showModal } = this.state;
        this.setState({
            ...this.state,
            showModal: !showModal,
        })
    }

    private handleInputChange(e: any, type: string): void {
        if (type === "DATE") {
            const { value } = e.target;
            let dates = value.split(" - ");
            this.setState({
                ...this.state,
                start_date: dates[0],
                end_date: dates[1],
            });
        }
        else {
            // Type === INSTITUTION / LIMIT / STATUS
            const { name, value } = e.target;
            this.setState({
                ...this.state,
                [name]: value,
            });
        }
    }

    private submitFilter(): void {
        this.props.getAssessmentData(this.state);
    }

    render() {
        const { assessmentResponse } = this.props;
        const { showModal } = this.state;
        console.log(this.state);
        return (
            <UserDashboardComponent
                assessmentResponse={assessmentResponse}
                checkTextColor={this.checkTextColor}
                showModal={showModal}
                toggleModal={this.toggleModal}
                handleInputChange={this.handleInputChange}
                submitFilter={this.submitFilter}
            />
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
        getAssessmentData: (params: any) => dispatch(getAssessmentList(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDashboardContainer);