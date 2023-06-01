import { lazy, PureComponent, createRef } from "react";
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
import { ifError } from "assert";

const EditProfileSPBEComponent = lazy(() => import("../../components/EditProfileSPBE"));

export class EditProfileSPBEContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        institutionListResponse: PropTypes.any,
        evaluationDataResponse: PropTypes.any,
        successMessageResponse: PropTypes.string,
    };

    private textInput: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.state = {
            list_items: [],
            showModal: false,
            showSuggestions: [],
            suggestions: [],
        };
        this.addField = this.addField.bind(this);
        this.deleteField = this.deleteField.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdateEvaluationData = this.handleUpdateEvaluationData.bind(this);
        this.validateEdit = this.validateEdit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSelectSuggestion = this.handleSelectSuggestion.bind(this);
        this.findInstitutionName = this.findInstitutionName.bind(this);

        this.textInput = createRef();
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
        const { list_items, showSuggestions } = this.state;
        let item = {
            role: "",
            institution_id: "",
            institution_name: "",
            evaluation_year: "",
        };
        this.setState({
            ...this.state,
            list_items: [...list_items, item],
            showSuggestions: [...showSuggestions, false],
        })
    }

    private deleteField(index: number): void {
        const { list_items, showSuggestions } = this.state;

        let new_list = [...list_items];
        new_list.splice(index+1, 1);

        let newShows = [...showSuggestions];
        newShows.splice(index+1, 1);

        this.setState({
            ...this.state,
            list_items: new_list,
            showSuggestions: newShows,
        })
    }

    private handleInputChange(e: any, index: number): void {
        const { name, value } = e.target;
        const { list_items, showSuggestions } = this.state;
        let suggestions: any[] = [];

        if (name === "institution_name" && value) {
            suggestions = this.props.institutionListResponse.filter((item: any) => item.institution_name.toLowerCase().includes(value.toLowerCase()))
        }

        let new_list = [...list_items];
        let val = value;
        if (name === "evaluation_year") {
            if (parseInt(val)) {
                val = parseInt(val);
            }
            else {
                e.target.value = "";
                val = "";
            }
        }
        new_list[index][name] = name == "evaluation_year" ? val : value;

        let newShows = [...showSuggestions];
        newShows = newShows.map((item: boolean) => { return false });
        newShows[index] = true;

        this.setState({
            ...this.state,
            list_items: new_list,
            showSuggestions: name === "institution_name" ? newShows : showSuggestions,
            suggestions: suggestions,
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
                showToast("Pilih nama institusi dari daftar atau daftarkan institusi terlebih dahulu!");
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

    private handleSelectSuggestion(value: any, name: string, index: number): void {
        const { list_items, showSuggestions } = this.state;

        let new_list = [...list_items];
        new_list[index]["institution_id"] = parseInt(value);
        new_list[index]["institution_name"] = name;

        let newShows = [...showSuggestions];
        newShows[index] = false;

        this.setState({
            ...this.state,
            list_items: new_list,
            showSuggestions: newShows,
        })
        this.textInput.current?.focus();
    }

    private findInstitutionName(id: any): string {
        const { institutionListResponse } = this.props;
        const institutionInfo = institutionListResponse.find((item: any) => item.id === parseInt(id));
        if (institutionInfo) {
            return institutionInfo.institution_name;
        }
        return "";
    }

    render() {
        const { list_items, showModal, showSuggestions, suggestions } = this.state;
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
                showSuggestions={showSuggestions}
                suggestions={suggestions}
                textInput={this.textInput}
                handleSelectSuggestion={this.handleSelectSuggestion}
                findInstitutionName={this.findInstitutionName}
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