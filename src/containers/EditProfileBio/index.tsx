import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    biodataSelector,
    successMessagesSelector
} from "./selector";
import {
    getBiodata,
    updateBiodata
} from "./action";

const EditProfileBioComponent = lazy(() => import("../../components/EditProfileBio"));

export class EditProfileBioContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        biodataResponse: PropTypes.any,
        successMessagesResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            name: "",
            contact_number: "",
            linkedin_profile: "",
            address: "",
            profile_picture: "",
            showModal: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdateBiodata = this.handleUpdateBiodata.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.getProfileBiodata();
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.biodataResponse !== this.props.biodataResponse) {
            let newBio = {...this.props.biodataResponse};
            delete newBio.profile_picture_link;
            if (!newBio.linkedin_profile) {
                newBio.linkedin_profile = "https://www.linkedin.com/in/";
            }
            this.setState({
                ...this.state,
                ...newBio,
            });
        }
        if (prevProps.successMessagesResponse !== this.props.successMessagesResponse) {
            this.toggleModal();
        }
    }

    private handleInputChange(e: any): void {
        const { name, value, files } = e.target;
        if (files !== null) {
            this.setState({
                ...this.state,
                [name]: files[0],
            });
        }
        else if (value !== null) {
            let val = value;
            if (name === "contact_number") {
                if (parseInt(value)) {
                    val = parseInt(value);
                }
                else {
                    val = "";
                }
            }
            this.setState({
                ...this.state,
                [name]: name === "contact_number" ? val : value,
            });
        }
    }

    private handleUpdateBiodata(e: any): void {
        e.preventDefault();
        const { email, name, contact_number, linkedin_profile, address, profile_picture } = this.state;
        const formValues = {
            email: email,
            name: name,
            contact_number: contact_number,
            linkedin_profile: linkedin_profile === "https://www.linkedin.com/in/" ? "" : linkedin_profile,
            address: address,
            profile_picture: profile_picture,
        }
        this.props.updateProfileBiodata(formValues);
    }
    
    private toggleModal(): void {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal,
        });
    }

    render() {
        const { biodataResponse } = this.props;
        const { email, name, contact_number, linkedin_profile, address, profile_picture, showModal } = this.state;
        return (
            <EditProfileBioComponent
                biodataResponse={biodataResponse}
                email={email}
                name={name}
                contact_number={contact_number}
                linkedin_profile={linkedin_profile}
                address={address}
                profile_picture={profile_picture}
                handleInputChange={this.handleInputChange}
                handleUpdateBiodata={this.handleUpdateBiodata}
                showModal={showModal}
                toggleModal={this.toggleModal}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        biodataResponse: biodataSelector(state),
        successMessagesResponse: successMessagesSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getProfileBiodata: () => dispatch(getBiodata()),
        updateProfileBiodata: (params: any) => dispatch(updateBiodata(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileBioContainer);