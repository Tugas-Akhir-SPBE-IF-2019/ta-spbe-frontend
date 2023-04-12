import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { assessmentResultSelector } from "./selector";
import { getAssessmentResult } from "./action";

const AssessmentResultComponent = lazy(() => import("../../components/AssessmentResult"));

export class AssessmentResultContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        assessmentResultResponse: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            link_list: [],
        };
        this.handleParseHTML = this.handleParseHTML.bind(this);
        this.copyText = this.copyText.bind(this);
        this.createLink = this.createLink.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getAssessmentResultData(id);
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.assessmentResultResponse !== this.props.assessmentResultResponse) {
            this.createLink();
        }
    }

    private handleParseHTML(raw: any): any {
        const parse = require('html-react-parser');
        return parse(String(raw));
    }

    private copyText(text: string): void {
        navigator.clipboard.writeText(text);
    }

    private createLink(): void {
        const { assessmentResultResponse } = this.props;
        let list: any[] = [];
        assessmentResultResponse.result.forEach(function (item) {
            if (!list.includes(item.indicator_number)) {
                list.push(item.indicator_number);
            }
        });
        this.setState({
            ...this.state,
            link_list: list,
        });
    }

    render() {
        const { id } = this.props.match.params;
        const { assessmentResultResponse } = this.props;
        const { link_list } = this.state;
        return (
            <AssessmentResultComponent
                assessmentId={id}
                assessmentResultResponse={assessmentResultResponse}
                handleParseHTML={this.handleParseHTML}
                copyText={this.copyText}
                link_list={link_list}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        assessmentResultResponse: assessmentResultSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getAssessmentResultData: (params: any) => dispatch(getAssessmentResult(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssessmentResultContainer);