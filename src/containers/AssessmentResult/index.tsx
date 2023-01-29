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
    }

    render() {
        return (
            <AssessmentResultComponent />
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