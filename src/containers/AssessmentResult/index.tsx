import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { assessmentResultSelector } from "./selector";
import { getAssessmentResult } from "./action";

const AssessmentResultComponent = lazy(() => import("../../components/AssessmentResult"));

export class AssessmentResultContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        assessmentResultResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
        this.handleParseHTML = this.handleParseHTML.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getAssessmentResultData(id);
    }

    private handleParseHTML(raw: any): any {
        const parse = require('html-react-parser');
        return parse(String(raw));
    }

    render() {
        const { id } = this.props.match.params;
        const { assessmentResultResponse } = this.props;
        return (
            <AssessmentResultComponent
                assessmentId={id}
                assessmentResultResponse={assessmentResultResponse}
                handleParseHTML={this.handleParseHTML}
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