import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { assessmentResultSelector, assessmentValidationSelector, validationMessageSelector } from "./selector";
import { getAssessmentResult, getAssessmentValidation, sendValidation } from "./action";
import { showToast } from "../../utils/general";

const ValidateResultComponent = lazy(() => import("../../components/ValidateResult"));

export class ValidateResultContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        assessmentResultResponse: PropTypes.object,
        assessmentValidationResponse: PropTypes.array,
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
            showModal: false,
        };
        this.handleParseHTML = this.handleParseHTML.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSendValidation = this.handleSendValidation.bind(this);
        this.initField = this.initField.bind(this);
        this.preFillField = this.preFillField.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getAssessmentResultData(id);
    }

    componentDidUpdate(prevProps: any) {
        const { id } = this.props.match.params;
        if (prevProps.assessmentResultResponse !== this.props.assessmentResultResponse) {
            // if (this.props.assessmentResultResponse.status === 2) {
                this.initField();
            // }
            // else if (this.props.assessmentResultResponse.status === 3) {
            //     this.props.getAssessmentValidationData(id)
            // }
        }
        // if (prevProps.assessmentValidationResponse !== this.props.assessmentValidationResponse) {
        //     this.preFillField();
        // }
        if (prevProps.validationMessageResponse !== this.props.validationMessageResponse) {
            this.toggleModal();
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
    
    private preFillField(): void {
        const { assessmentResultResponse, assessmentValidationResponse } = this.props;
        let newLink: any[] = [];
        assessmentValidationResponse.result.forEach(function (el) {
            if (!newLink.includes(el.indicator_number)) {
                newLink.push(el.indicator_number);
            }
        });

        this.setState({
            ...this.state,
            listItem: [],
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
        let key = name.split("-")[0];
        if (type === "INT") {
            val = parseInt(value);
        }
        else if (type === "BOOL") {
            val = Boolean(Number(value));
            if (val) {
                newListItem[idx]["correct_level"] = 0;
                newListItem[idx]["explanation"] = "";
            }
        }

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
        if (this.validateForm()) {
            this.props.sendValidationData(formValues);
        }
    }

    private toggleModal(): void {
        const { showModal } = this.state;
        this.setState({
            ...this.state,
            showModal: !showModal,
        })
    }

    private validateForm(): boolean {
        const { listItem } = this.state;
        for (let item of listItem) {
            if (!item.result_correct) {
                if (!item.correct_level) {
                    showToast("Level yang benar harus diisi!");
                    return false;
                }
                else if (!item.explanation.replaceAll(" ", "")) {
                    showToast("Penjelasan harus diisi!");
                    return false;
                }
            }
        }
        return true;
    }

    render() {
        const { assessmentResultResponse, validationMessageResponse } = this.props;
        const { listItem, link_list, showModal } = this.state;
        return (
            <ValidateResultComponent
                assessmentResultResponse={assessmentResultResponse}
                validationMessageResponse={validationMessageResponse}
                handleParseHTML={this.handleParseHTML}
                handleInputChange={this.handleInputChange}
                handleSendValidation={this.handleSendValidation}
                listItem={listItem}
                link_list={link_list}
                toggleModal={this.toggleModal}
                showModal={showModal}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        assessmentResultResponse: assessmentResultSelector(state),
        assessmentValidationResponse: assessmentValidationSelector(state),
        validationMessageResponse: validationMessageSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getAssessmentResultData: (params: any) => dispatch(getAssessmentResult(params)),
        getAssessmentValidationData: (params: any) => dispatch(getAssessmentValidation(params)),
        sendValidationData: (params: any) => dispatch(sendValidation(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidateResultContainer);