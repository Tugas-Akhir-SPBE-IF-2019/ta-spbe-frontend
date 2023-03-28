import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadMessageSelector } from "./selector";
import { uploadDocuments } from "./action";
import { INSTITUTION_LIST } from "../../config/constant";

const UploadDocumentsComponent = lazy(() => import("../../components/UploadDocuments"));

export class UploadDocumentsContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        uploadMessageResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            institution_name: "",
            indicator_number: "",
            supporting_document: null,
            old_document: null,
            institutionOptions: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUploadDocuments = this.handleUploadDocuments.bind(this);
        this.setInsitutionList = this.setInsitutionList.bind(this);
    }

    componentDidMount() {
        this.setInsitutionList();
    }

    private setInsitutionList(): void {
        let cluster = Object.keys(INSTITUTION_LIST);
        let valueList = [];

        for (let idx in cluster) {
            valueList = valueList.concat(INSTITUTION_LIST[cluster[idx]]);
        }

        this.setState({
            ...this.state,
            institutionOptions: valueList,
        })
    }

    private handleInputChange(e: any, isFiles: boolean): void {
        if (!isFiles) {
            const { name, value } = e.target;
            this.setState({
                ...this.state,
                [name]: value,
            })
        }
        else {
            const { name, files } = e.target;
            this.setState({
                ...this.state,
                [name]: files[0],
            })
        }
    }

    private handleUploadDocuments(e: any): void {
        e.preventDefault();
        this.props.uploadDocumentsData(this.state);
    }

    render() {
        const { uploadMessageResponse } = this.props;
        const { institutionOptions } = this.state;
        return (
            <UploadDocumentsComponent
                uploadMessageResponse={uploadMessageResponse}
                handleInputChange={this.handleInputChange}
                handleUploadDocuments={this.handleUploadDocuments}
                institutionOptions={institutionOptions}

            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        uploadMessageResponse: uploadMessageSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        uploadDocumentsData: (params: any) => dispatch(uploadDocuments(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadDocumentsContainer);