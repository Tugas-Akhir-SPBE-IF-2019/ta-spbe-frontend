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
            indicator_number: [],
            supporting_document: [],
            old_document: null,
            institution_options: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUploadDocuments = this.handleUploadDocuments.bind(this);
        this.setInsitutionList = this.setInsitutionList.bind(this);
        this.isChecked = this.isChecked.bind(this);
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
            institution_options: valueList,
        })
    }

    private handleInputChange(e: any, type: string): void {
        if (type === "CHECK") {
            const { name, value } = e.target;
            const arr = this.state[name];
            if (arr.indexOf(value) === -1) {
                this.setState({
                    ...this.state,
                    [name]: [...arr, value],
                })
            }
            else {
                const newArr = arr.filter((el) => el !== value);
                this.setState({
                    ...this.state,
                    [name]: newArr,
                })
            }
        }
        else if (type === "FILES") {
            const { name, files } = e.target;
            this.setState({
                ...this.state,
                [name]: files[0],
            })
        }
        else {
            // Type === RADIO / SELECT / SELECTALL / RESET
            const { name, value } = e.target;
            this.setState({
                ...this.state,
                [name]: value,
            })
        }
    }

    private handleUploadDocuments(e: any): void {
        e.preventDefault();
        this.props.uploadDocumentsData(this.state);
    }

    private isChecked (el: string): boolean {
        const { indicator_number } = this.state;
        if (indicator_number.indexOf(el) === -1) {
            return false
        }
        return true
    }

    render() {
        console.log(this.state);
        const { uploadMessageResponse } = this.props;
        const { institution_options } = this.state;
        return (
            <UploadDocumentsComponent
                uploadMessageResponse={uploadMessageResponse}
                handleInputChange={this.handleInputChange}
                handleUploadDocuments={this.handleUploadDocuments}
                institution_options={institution_options}
                isChecked={this.isChecked}
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