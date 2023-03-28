import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { assessmentResultSelector, validationMessageSelector } from "./selector";
import { getAssessmentResult, sendValidation } from "./action";

const ValidateResultComponent = lazy(() => import("../../components/ValidateResult"));

export class ValidateResultContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        assessmentResultResponse: PropTypes.object,
        validationMessageResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            result_correct: false,
            correct_level: 0,
            explanation: "",
        };
        this.handleParseHTML = this.handleParseHTML.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSendValidation = this.handleSendValidation.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getAssessmentResultData(id);
    }

    private handleParseHTML(raw: any): any {
        const parse = require('html-react-parser');
        return parse(String(raw));
    }

    private handleInputChange(e: any, type: string): void {
        const { name, value } = e.target;
        let val = value;
        if (type === "INT") {
            val = parseInt(value);
        }
        else if (type === "BOOL") {
            val = Boolean(Number(value));
        }
        this.setState({
            ...this.state,
            [name]: val,
        })
    }

    private handleSendValidation(e: any): void {
        e.preventDefault();
        const { id } = this.props.match.params;
        let formValues = {
            data: this.state,
            id: id,
        }
        this.props.sendValidationData(formValues);
    }

    render() {
        const { assessmentResultResponse, validationMessageResponse } = this.props;
        return (
            <ValidateResultComponent
                assessmentResultResponse={assessmentResultResponse}
                validationMessageResponse={validationMessageResponse}
                handleParseHTML={this.handleParseHTML}
                handleInputChange={this.handleInputChange}
                handleSendValidation={this.handleSendValidation}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        assessmentResultResponse: assessmentResultSelector(state),
        validationMessageResponse: validationMessageSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getAssessmentResultData: (params: any) => dispatch(getAssessmentResult(params)),
        sendValidationData: (params: any) => dispatch(sendValidation(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidateResultContainer);