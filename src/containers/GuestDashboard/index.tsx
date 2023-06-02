import { lazy, PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { indexListSelector, institutionListSelector } from "./selector";
import { getIndexList, getInstitutionList } from "./action";
import { Pagination } from 'react-bootstrap';

const GuestDashboardComponent = lazy(() => import("../../components/GuestDashboard"));

export class GuestDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        indexResponse: PropTypes.any,
        institutionListResponse: PropTypes.any,
    };

    private textInput: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.state = {
            limit: 10,
            page: 1,
            institution: "",
            dates: "",
            start_date: "",
            end_date: "",
            index_min: 1,
            index_max: 5,
            total_pages: 0,
            page_component: [],
            showSuggestions: false,
            suggestions: [],
            showPages: false,
            pagesNum: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleSelectSuggestion = this.handleSelectSuggestion.bind(this);
        this.handleOutFocus = this.handleOutFocus.bind(this);
        this.handleSelectPageNum = this.handleSelectPageNum.bind(this);
        this.handleFocusPage = this.handleFocusPage.bind(this);

        this.textInput = createRef();
    }

    componentDidMount() {
        this.props.getIndexData(this.state);
        this.props.getInstitutionListData({limit: 1000});
        this.setState({
            ...this.state,
            pagesNum: Array.from(Array(100).keys()),
        })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        const { indexResponse } = this.props;
        const { page } = this.state;

        if (prevProps.indexResponse !== indexResponse) {
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
                if (p > 0 && p !== 1 && p < indexResponse.total_pages) {
                    components.push(<Pagination.Item
                        active={page === p}
                        value={p}
                        onClick={() => this.handleInputChange({target: {name: "page", value: p}}, "PAGE")}
                        >{p}</Pagination.Item>);
                }
            }

            if (page+2 < indexResponse.total_pages-1) {
                components.push(<Pagination.Ellipsis />);
            }

            if (indexResponse.total_pages !== 1) {
                components.push(<Pagination.Item
                    active={page === indexResponse.total_pages}
                    value={indexResponse.total_pages}
                    onClick={() => this.handleInputChange({target: {name: "page", value: indexResponse.total_pages}}, "PAGE")}
                    >{indexResponse.total_pages}</Pagination.Item>);
            }

            this.setState({
                ...this.state,
                total_pages: indexResponse.total_pages,
                page_component: components,
            });
        }

        if (prevState.page !== page) {
            this.submitFilter(true);
        }
    }

    private handleInputChange(e: any, type: string): void {
        let suggestions: any[] = [];
        let newPagesNum: any[] = [];
        let show = true;

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
            // Type === INSTITUTION / LIMIT / PAGE
            const { name, value } = e.target;

            if (name === "limit") {
                if (parseInt(value)) {
                    newPagesNum = Array.from(Array(100).keys()).filter((item: any) => item.toString().includes(value))
                }
                else if (value === "") {
                    show = false;
                    newPagesNum = Array.from(Array(100).keys());
                }
                else {
                    return
                }
            }
            
            if (name === "institution" && value) {
                suggestions = this.props.institutionListResponse.filter((item: any) => item.institution_name.toLowerCase().includes(value.toLowerCase()))
            }

            this.setState({
                ...this.state,
                [name]: value,
                showSuggestions: name === "institution" ? true : false,
                suggestions: name === "institution" ? suggestions : [],
                showPages: name === "limit" ? show : false,
                pagesNum: name === "limit" ? newPagesNum : Array.from(Array(100).keys()),
            });
        }
    }

    private submitFilter(changePage: any): void {
        const { limit, page, institution, start_date, end_date, index_min, index_max } = this.state;
        let formValues = {
            limit: limit,
            page: (changePage ? page : 1),
            institution: institution,
            start_date: start_date,
            end_date: end_date,
            index_min: index_min,
            index_max: index_max,
        }
        this.props.getIndexData(formValues);
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

    private handleSelectSuggestion(value: string): void {
        this.setState({
            ...this.state,
            institution: value,
            showSuggestions: false,
        })
        this.textInput.current?.focus();
    }

    private handleOutFocus(): void {
        this.setState({
            ...this.state,
            showSuggestions: false,
        })
    }

    private handleSelectPageNum(value: string): void {
        this.setState({
            ...this.state,
            limit: value,
            showPages: false,
        })
        this.textInput.current?.focus();
    }

    private handleFocusPage(): void {
        this.setState({
            ...this.state,
            showPages: !this.state.showPages,
        })
    }

    render() {
        const { indexResponse, institutionListResponse } = this.props;
        const { limit, page_component, index_min, index_max, showSuggestions, suggestions, institution, showPages, pagesNum } = this.state;
        return (
            <GuestDashboardComponent
                indexResponse={indexResponse}
                handleInputChange={this.handleInputChange}
                submitFilter={this.submitFilter}
                page_component={page_component}
                handleNext={this.handleNext}
                handlePrev={this.handlePrev}
                index_min={index_min}
                index_max={index_max}
                institutionListResponse={institutionListResponse}
                showSuggestions={showSuggestions}
                suggestions={suggestions}
                textInput={this.textInput}
                handleSelectSuggestion={this.handleSelectSuggestion}
                handleOutFocus={this.handleOutFocus}
                institution={institution}
                limit={limit}
                showPages={showPages}
                pagesNum={pagesNum}
                handleSelectPageNum={this.handleSelectPageNum}
                handleFocusPage={this.handleFocusPage}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        institutionListResponse: institutionListSelector(state),
        indexResponse: indexListSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getInstitutionListData: (params: any) => dispatch(getInstitutionList(params)),
        getIndexData: (params: any) => dispatch(getIndexList(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuestDashboardContainer);