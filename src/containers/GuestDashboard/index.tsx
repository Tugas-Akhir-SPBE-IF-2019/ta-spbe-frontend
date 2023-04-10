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
        this.state = {
            limit: "",
            page: "",
            institution: "",
            dates: "",
            start_date: "",
            end_date: "",
            index_min: "",
            index_max: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
    }

    private handleInputChange(e: any, type: string): void {
        if (type === "INDEX") {
            const { name, value } = e.target;
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
            // Type === INSTITUTION / LIMIT
            const { name, value } = e.target;
            this.setState({
                ...this.state,
                [name]: value,
            });
        }
    }

    private submitFilter(): void {
        this.props.getIndexData(this.state);
    }

    componentDidMount() {
        this.props.getIndexData();
    }

    render() {
        const { indexResponse } = this.props;
        return (
            <GuestDashboardComponent
                indexResponse={indexResponse}
                handleInputChange={this.handleInputChange}
                submitFilter={this.submitFilter}
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