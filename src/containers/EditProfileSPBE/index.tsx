import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    institutionListSelector,
    evaluationDataSelector,
    successMessageSelector
} from "./selector";
import {
    getInstitutionList,
    getEvaluationData,
    updateEvaluationData
} from "./action";
import { showToast } from "../../utils/general";

const EditProfileSPBEComponent = lazy(() => import("../../components/EditProfileSPBE"));

export class EditProfileSPBEContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        institutionListResponse: PropTypes.any,
        evaluationDataResponse: PropTypes.any,
        successMessageResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            list_items: [],
            showModal: false,
        };
        this.addField = this.addField.bind(this);
        this.deleteField = this.deleteField.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdateEvaluationData = this.handleUpdateEvaluationData.bind(this);
        this.validateEdit = this.validateEdit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.getProfileEvaluationData();
        this.props.getInstitutionListData({limit: 1000});
    }

    componentDidUpdate(prevProps: any) {
        const { list_items } = this.state;
        const { evaluationDataResponse } = this.props;
        if (prevProps.evaluationDataResponse !== evaluationDataResponse) {
            if (evaluationDataResponse.length !== 0) {
                this.setState({
                    ...this.state,
                    list_items: JSON.parse(JSON.stringify(evaluationDataResponse)),
                });
            }
            else if (list_items.length === 0) {
                this.addField();
            }
        }
        if (prevProps.successMessageResponse !== this.props.successMessageResponse) {
            this.toggleModal();
        }
    }

    private addField(): void {
        const { list_items } = this.state;
        let item = {
            role: "",
            institution_id: "",
            evaluation_year: "",
        };
        this.setState({
            ...this.state,
            list_items: [...list_items, item],
        })
    }

    private deleteField(index: number): void {
        const { list_items } = this.state;
        let new_list = [...list_items];
        new_list.splice(index+1, 1);
        this.setState({
            ...this.state,
            list_items: new_list,
        })
    }

    private handleInputChange(e: any, index: number): void {
        const { name, value } = e.target;
        const { list_items } = this.state;

        let val = value;
        let new_list = [...list_items];
        if (name !== "role" && val !== "") {
            val = parseInt(val);
        }
        new_list[index][name] = val;
        this.setState({
            ...this.state,
            list_items: new_list,
        })
    }

    private handleUpdateEvaluationData(e: any): void {
        e.preventDefault();
        const { list_items } = this.state;
        if (this.validateEdit()) {
            this.props.updateProfileEvaluationData(list_items);
        }
    }

    private validateEdit(): boolean {
        const { list_items } = this.state;
        for (let item of list_items) {
            if (!item.role) {
                showToast("Peran harus diisi!");
                return false;
            }
            else if (!item.institution_id) {
                showToast("Nama institusi harus diisi!");
                return false;
            }
            else if (!item.evaluation_year) {
                showToast("Tahun evaluasi harus diisi!");
                return false;
            }
        }
        return true;
    }

    private toggleModal(): void {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal,
        });
    }

    render() {
        const { list_items, showModal } = this.state;
        const { institutionListResponse } = this.props;
        return (
            <EditProfileSPBEComponent
                list_items={list_items}
                addField={this.addField}
                deleteField={this.deleteField}
                handleInputChange={this.handleInputChange}
                handleUpdateEvaluationData={this.handleUpdateEvaluationData}
                showModal={showModal}
                toggleModal={this.toggleModal}
                institutionListResponse={institutionListResponse}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        institutionListResponse: institutionListSelector(state),
        evaluationDataResponse: evaluationDataSelector(state),
        successMessageResponse: successMessageSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getInstitutionListData: (params: any) => dispatch(getInstitutionList(params)),
        getProfileEvaluationData: () => dispatch(getEvaluationData()),
        updateProfileEvaluationData: (params: any) => dispatch(updateEvaluationData(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileSPBEContainer);