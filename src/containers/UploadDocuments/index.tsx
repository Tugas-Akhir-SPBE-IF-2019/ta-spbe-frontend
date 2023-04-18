import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadMessageSelector } from "./selector";
import { uploadDocuments } from "./action";
import { INSTITUTION_LIST } from "../../config/constant";
import { showToast } from "../../utils/general";

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
            old_document: [],
            institution_options: [],
            meeting_minutes: [],
            show_modal: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUploadDocuments = this.handleUploadDocuments.bind(this);
        this.setInsitutionList = this.setInsitutionList.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        this.setInsitutionList();
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.uploadMessageResponse !== this.props.uploadMessageResponse) {
            this.toggleModal();
        }
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
            const filesArray = Array.from(files);
            let valid = true;
            filesArray.forEach(function (file: any) {
                if (!file.name.endsWith("pdf")) {
                    showToast("Semua file harus berbentuk PDF!");
                    e.target.value = "";
                    valid = false;
                }
            });
            if (valid) {
                this.setState({
                    ...this.state,
                    [name]: filesArray,
                });
            }
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

        if (this.validateForm()) {
            this.props.uploadDocumentsData(this.state);
        }
    }

    private isChecked (el: string): boolean {
        const { indicator_number } = this.state;
        if (indicator_number.indexOf(el) === -1) {
            return false
        }
        return true
    }

    private deleteFile (index: number, name: string): void {
        let new_list = [...this.state[name]];
        new_list.splice(index, 1);
        this.setState({
            ...this.state,
            [name]: new_list,
        })
    }

    private toggleModal(): void {
        const { showModal } = this.state;
        this.setState({
            ...this.state,
            showModal: !showModal,
        })
    }

    private validateForm(): any {
        const { institution_name, indicator_number, supporting_document, old_document, meeting_minutes } = this.state;

        let fileSize = 0;
        for (let file of supporting_document) {
            fileSize += file.size;
        }
        for (let file of old_document) {
            fileSize += file.size;
        }
        for (let file of meeting_minutes) {
            fileSize += file.size;
        }

        if (!institution_name) {
            showToast("Nama Institusi Tidak Boleh Kosong!");
        }
        else if (indicator_number.length === 0) {
            showToast("Nomor Indikator Tidak Boleh Kosong!");
        }
        else if (supporting_document.length === 0) {
            showToast("Jumlah Dokumen Pendukung Minimal 1!");
        }
        else if (fileSize > 10485760) {
            showToast("Ukuran total dokumen maksimal 10MB!");
        }
        else {
            return true;
        }
    }

    render() {
        const { uploadMessageResponse } = this.props;
        const { institution_options, old_document, supporting_document, meeting_minutes, showModal } = this.state;
        return (
            <UploadDocumentsComponent
                uploadMessageResponse={uploadMessageResponse}
                handleInputChange={this.handleInputChange}
                handleUploadDocuments={this.handleUploadDocuments}
                institution_options={institution_options}
                old_document={old_document}
                supporting_document={supporting_document}
                meeting_minutes={meeting_minutes}
                isChecked={this.isChecked}
                deleteFile={this.deleteFile}
                toggleModal={this.toggleModal}
                showModal={showModal}
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