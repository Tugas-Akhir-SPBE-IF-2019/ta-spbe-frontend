import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { assessmentListSelector, assessmentHistorySelector } from "./selector";
import { getAssessmentList, getAssessmentHistory } from "./action";
import { Pagination } from 'react-bootstrap';

const UserDashboardComponent = lazy(() => import("../../components/UserDashboard"));

export class UserDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        assessmentResponse: PropTypes.any,
        assessmentHistoryResponse: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            limit: 10,
            page: 1,
            institution: "",
            dates: "",
            start_date: "",
            end_date: "",
            status: "",
            total_pages: 0,
            page_component: [],
            history: [],
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.getHistory = this.getHistory.bind(this);
    }

    componentDidMount() {
        this.props.getAssessmentData(this.state);
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        const { assessmentResponse, assessmentHistoryResponse } = this.props;
        const { page } = this.state;

        if (prevProps.assessmentResponse !== assessmentResponse) {
            let components: any[] = [];

            components.push(<Pagination.Item
                active={page === 1}
                value={1}
                onClick={() => this.handleInputChange({target: {name: "page", value: 1}}, "PAGE")}
                >1</Pagination.Item>);

            if (page-2 > 2) {
                components.push(<Pagination.Ellipsis />);
            }

            for (let p=page-2; p<=page+2; p++) {
                if (p > 0 && p !== 1 && p < assessmentResponse.total_pages) {
                    components.push(<Pagination.Item
                        active={page === p}
                        value={p}
                        onClick={() => this.handleInputChange({target: {name: "page", value: p}}, "PAGE")}
                        >{p}</Pagination.Item>);
                }
            }

            if (page+2 < assessmentResponse.total_pages-1) {
                components.push(<Pagination.Ellipsis />);
            }

            if (assessmentResponse.total_pages !== 1) {
                components.push(<Pagination.Item
                    active={page === assessmentResponse.total_pages}
                    value={assessmentResponse.total_pages}
                    onClick={() => this.handleInputChange({target: {name: "page", value: assessmentResponse.total_pages}}, "PAGE")}
                    >{assessmentResponse.total_pages}</Pagination.Item>);
            }

            this.setState({
                ...this.state,
                total_pages: assessmentResponse.total_pages,
                page_component: components,
            });
        }

        if (prevState.page !== page) {
            this.submitFilter(true);
        }

        if (prevProps.assessmentHistoryResponse !== assessmentHistoryResponse) {
            let newStatus: any[] = [];
            for (let stat of assessmentHistoryResponse.status_histories) {
                if (!newStatus.some(e => e.status === stat.status)) {
                    newStatus.push(stat);
                }
            }
            this.setState({
                ...this.state,
                history: newStatus,
            })
        }

        if (prevState.history !== this.state.history) {
            this.toggleModal();
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

    private submitFilter(changePage: any): void {
        const { limit, page, institution, start_date, end_date, status } = this.state;
        let formValues = {
            limit: limit,
            page: (changePage ? page : 1),
            institution: institution,
            start_date: start_date,
            end_date: end_date,
            status: status,
        }
        this.props.getAssessmentData(formValues);
    }

    private handleNext(): void {
        const { page, total_pages } = this.state;
        if (page+1 <= total_pages) {
            this.setState({
                ...this.state,
                page: page+1,
            });
        }
    }

    private handlePrev(): void {
        const { page } = this.state;
        if (page-1 >= 1) {
            this.setState({
                ...this.state,
                page: page-1,
            });
        }
    }

    private getHistory(idx: number): void {
        const { assessmentResponse } = this.props;
        this.props.getHistoryData(assessmentResponse.items[idx].id);
    }

    render() {
        const { assessmentResponse, assessmentHistoryResponse } = this.props;
        const { showModal, page_component, history } = this.state;
        return (
            <UserDashboardComponent
                assessmentResponse={assessmentResponse}
                showModal={showModal}
                toggleModal={this.toggleModal}
                handleInputChange={this.handleInputChange}
                submitFilter={this.submitFilter}
                page_component={page_component}
                handleNext={this.handleNext}
                handlePrev={this.handlePrev}
                assessmentHistoryResponse={assessmentHistoryResponse}
                getHistory={this.getHistory}
                history={history}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        assessmentResponse: assessmentListSelector(state),
        assessmentHistoryResponse: assessmentHistorySelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getAssessmentData: (params: any) => dispatch(getAssessmentList(params)),
        getHistoryData: (params: any) => dispatch(getAssessmentHistory(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDashboardContainer);