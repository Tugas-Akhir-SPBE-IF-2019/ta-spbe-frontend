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
            support_doc_name: [],
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
        let doc_name = [...Array(10)].map(e => Array());
        assessmentResultResponse.result.forEach(function (item) {
            if (!list.includes(item.indicator_number)) {
                list.push(item.indicator_number);
            }
            item.support_document_proof.forEach(function (doc) {
                if (!doc_name[item.indicator_number - 1].includes(doc.name)) {
                    doc_name[item.indicator_number - 1].push(doc.name);
                }
            });
        });
        this.setState({
            ...this.state,
            link_list: list,
            support_doc_name: doc_name,
        });
    }

    render() {
        const { id } = this.props.match.params;
        const { assessmentResultResponse } = this.props;
        const { link_list, support_doc_name } = this.state;
        return (
            <AssessmentResultComponent
                assessmentId={id}
                assessmentResultResponse={assessmentResultResponse}
                handleParseHTML={this.handleParseHTML}
                copyText={this.copyText}
                link_list={link_list}
                support_doc_name={support_doc_name}
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