import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    jobDataSelector,
    successMessageSelector
} from "./selector";
import {
    getJobData,
    updateJobData
} from "./action";
import { showToast } from "../../utils/general";

const EditProfileWorkComponent = lazy(() => import("../../components/EditProfileWork"));

export class EditProfileWorkContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        jobDataResponse: PropTypes.any,
        successMessageResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            list_items: [],
        };
        this.addField = this.addField.bind(this);
        this.deleteField = this.deleteField.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validateEdit = this.validateEdit.bind(this);
        this.handleUpdateJobData = this.handleUpdateJobData.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.getProfileJobData();
    }

    componentDidUpdate(prevProps: any) {
        const { list_items } = this.state;
        const { jobDataResponse } = this.props;
        if (prevProps.jobDataResponse !== jobDataResponse) {
            if (jobDataResponse.length !== 0) {
                this.setState({
                    ...this.state,
                    list_items: JSON.parse(JSON.stringify(jobDataResponse)),
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
            job: "",
            company: "",
            joined_year: "",
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
        if (name === "joined_year") {
            if (parseInt(val)) {
                val = parseInt(val);
            }
            else {
                val = "";
            }
        }
        new_list[index][name] = val;
        this.setState({
            ...this.state,
            list_items: new_list,
        })
    }

    private validateEdit(): boolean {
        const { list_items } = this.state;
        for (let item of list_items) {
            if (!item.role) {
                showToast("Pekerjaan/Jabatan harus diisi!");
                return false;
            }
            else if (!item.company) {
                showToast("Nama instansi harus diisi!");
                return false;
            }
            else if (!item.joined_year) {
                showToast("Tahun masuk harus diisi!");
                return false;
            }
        }
        return true;
    }

    private handleUpdateJobData(e: any): void {
        e.preventDefault();
        const { list_items } = this.state;
        if (this.validateEdit()) {
            this.props.updateProfileJobData(list_items);
        }
    }

    private toggleModal(): void {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal,
        });
    }

    render() {
        const { list_items, showModal } = this.state;
        return (
            <EditProfileWorkComponent
                list_items={list_items}
                addField={this.addField}
                deleteField={this.deleteField}
                handleInputChange={this.handleInputChange}
                handleUpdateJobData={this.handleUpdateJobData}
                showModal={showModal}
                toggleModal={this.toggleModal}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        jobDataResponse: jobDataSelector(state),
        successMessageResponse: successMessageSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getProfileJobData: () => dispatch(getJobData()),
        updateProfileJobData: (params: any) => dispatch(updateJobData(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileWorkContainer);