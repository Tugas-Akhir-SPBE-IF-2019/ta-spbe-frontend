import { lazy, PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    institutionDataSelector,
    successMessageSelector,
    institutionListSelector
} from "./selector";
import {
    getInstitutionData,
    updateInstitutionData,
    getInstitutionList
} from "./action";
import { showToast } from "../../utils/general";

const EditProfileInstitutionComponent = lazy(() => import("../../components/EditProfileInstitution"));

export class EditProfileInstitutionContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        institutionDataResponse: PropTypes.array,
        successMessageResponse: PropTypes.string,
        institutionListResponse: PropTypes.any,
    };

    private textInput: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.state = {
            prev_items: [],
            list_items: [],
            showModal: false,
            showSuggestions: [],
            suggestions: [],
        };
        this.addField = this.addField.bind(this);
        this.deleteField = this.deleteField.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdateInstitutionData = this.handleUpdateInstitutionData.bind(this);
        this.validateEdit = this.validateEdit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSelectSuggestion = this.handleSelectSuggestion.bind(this);

        this.textInput = createRef();
    }

    componentDidMount() {
        if (this.state.list_items.length === 0) {
            this.addField();
        }
        this.props.getProfileInstitutionData();
        this.props.getInstitutionListData({limit: 1000});
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.institutionDataResponse !== this.props.institutionDataResponse) {
            this.setState({
                ...this.state,
                prev_items: JSON.parse(JSON.stringify(this.props.institutionDataResponse)),
            });
        }
        if (prevProps.successMessageResponse !== this.props.successMessageResponse) {
            this.toggleModal();
        }
    }

    private addField(): void {
        const { list_items, showSuggestions } = this.state;
        let item = {
            role: "",
            institution_name: "",
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
        new_list[index][name] = value;

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

    private handleUpdateInstitutionData(e: any): void {
        e.preventDefault();
        const { prev_items, list_items } = this.state;
        let all_items = prev_items.concat(list_items);
        if (this.validateEdit()) {
            this.props.updateProfileInstitutionData(all_items);
        }
    }

    private validateEdit(): boolean {
        const { list_items } = this.state;
        for (let item of list_items) {
            if (!item.role) {
                showToast("Peran harus diisi!");
                return false;
            }
            else if (!item.institution_name) {
                showToast("Nama institusi harus diisi!");
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

    private handleSelectSuggestion(value: string, index: number): void {
        const { list_items, showSuggestions } = this.state;

        let new_list = [...list_items];
        new_list[index]["institution_name"] = value;

        let newShows = [...showSuggestions];
        newShows[index] = false;

        this.setState({
            ...this.state,
            list_items: new_list,
            showSuggestions: newShows,
        })
        this.textInput.current?.focus();
    }

    render() {
        const { list_items, showModal, showSuggestions, suggestions } = this.state;
        const { institutionDataResponse, institutionListResponse } = this.props;
        return (
            <EditProfileInstitutionComponent
                list_items={list_items}
                showModal={showModal}
                addField={this.addField}
                deleteField={this.deleteField}
                institutionDataResponse={institutionDataResponse}
                handleInputChange={this.handleInputChange}
                handleUpdateInstitutionData={this.handleUpdateInstitutionData}
                toggleModal={this.toggleModal}
                showSuggestions={showSuggestions}
                suggestions={suggestions}
                textInput={this.textInput}
                handleSelectSuggestion={this.handleSelectSuggestion}
                institutionListResponse={institutionListResponse}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        institutionDataResponse: institutionDataSelector(state),
        successMessageResponse: successMessageSelector(state),
        institutionListResponse: institutionListSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getProfileInstitutionData: () => dispatch(getInstitutionData()),
        updateProfileInstitutionData: (params: any) => dispatch(updateInstitutionData(params)),
        getInstitutionListData: (params: any) => dispatch(getInstitutionList(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileInstitutionContainer);