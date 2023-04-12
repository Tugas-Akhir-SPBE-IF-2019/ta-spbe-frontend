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
            item: {
                indicator_number: "",
                result_correct: false,
                correct_level: 0,
                explanation: "",
            },
            listItem: [],
            link_list: [],
        };
        this.handleParseHTML = this.handleParseHTML.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSendValidation = this.handleSendValidation.bind(this);
        this.initField = this.initField.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getAssessmentResultData(id);
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.assessmentResultResponse !== this.props.assessmentResultResponse) {
            this.initField();
        }
    }
    
    private initField(): void {
        const { assessmentResultResponse } = this.props;
        const { item } = this.state;
        let list: any[] = [];
        let newLink: any[] = [];
        assessmentResultResponse.result.forEach(function (el) {
            let newItem = {
                ...item,
                indicator_number: el.indicator_number,
            }
            list.push(newItem);

            if (!newLink.includes(el.indicator_number)) {
                newLink.push(el.indicator_number);
            }
        });

        this.setState({
            ...this.state,
            listItem: list,
            link_list: newLink,
        });
    }

    private handleParseHTML(raw: any): any {
        const parse = require('html-react-parser');
        return parse(String(raw));
    }

    private handleInputChange(e: any, type: string, idx: number): void {
        const { name, value } = e.target;
        const { listItem } = this.state;
        let val = value;
        let newListItem = [...listItem];
        if (type === "INT") {
            val = parseInt(value);
        }
        else if (type === "BOOL") {
            val = Boolean(Number(value));
        }

        let key = name.split("-")[0];
        newListItem[idx][key] = val;
        this.setState({
            ...this.state,
            listItem: newListItem,
        })
    }

    private handleSendValidation(e: any): void {
        e.preventDefault();
        const { id } = this.props.match.params;
        let formValues = {
            data: this.state.listItem,
            id: id,
        }
        this.props.sendValidationData(formValues);
    }

    render() {
        const { assessmentResultResponse, validationMessageResponse } = this.props;
        const { listItem, link_list } = this.state;
        return (
            <ValidateResultComponent
                assessmentResultResponse={assessmentResultResponse}
                validationMessageResponse={validationMessageResponse}
                handleParseHTML={this.handleParseHTML}
                handleInputChange={this.handleInputChange}
                handleSendValidation={this.handleSendValidation}
                listItem={listItem}
                link_list={link_list}
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