import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { indexListSelector } from "./selector";
import { getIndexList } from "./action";
import { Pagination } from 'react-bootstrap';

const GuestDashboardComponent = lazy(() => import("../../components/GuestDashboard"));

export class GuestDashboardContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        indexResponse: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            limit: 10,
            page: 1,
            institution: "",
            dates: "",
            start_date: "",
            end_date: "",
            index_min: "",
            index_max: "",
            total_pages: 0,
            page_component: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    componentDidMount() {
        this.props.getIndexData(this.state);
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
        if (type === "INDEX") {
            const { value } = e.target;
            this.setState({
                ...this.state,
                index_min: +value,
                index_max: +value+1,
            });
        }
        else if (type === "DATE") {
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
            this.setState({
                ...this.state,
                [name]: value,
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
        const { page, limit, total_pages } = this.state;
        if (page+1 <= total_pages) {
            this.props.getIndexData({
                page: page+1,
                limit: limit,
            });
            this.setState({
                ...this.state,
                page: page+1,
            });
        }
    }

    private handlePrev(): void {
        const { page, limit } = this.state;
        if (page-1 >= 1) {
            this.props.getIndexData({
                page: page-1,
                limit: limit,
            });
            this.setState({
                ...this.state,
                page: page-1,
            });
        }
    }

    render() {
        const { indexResponse } = this.props;
        const { page_component } = this.state;
        console.log(this.state);
        return (
            <GuestDashboardComponent
                indexResponse={indexResponse}
                handleInputChange={this.handleInputChange}
                submitFilter={this.submitFilter}
                page_component={page_component}
                handleNext={this.handleNext}
                handlePrev={this.handlePrev}
            />
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
        getIndexData: (params: any) => dispatch(getIndexList(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuestDashboardContainer);