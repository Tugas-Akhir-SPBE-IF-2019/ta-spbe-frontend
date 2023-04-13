import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    biodataSelector,
    successMessageaSelector
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
        successMessageaResponse: PropTypes.string,
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
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdateBiodata = this.handleUpdateBiodata.bind(this);
    }

    componentDidMount() {
        this.props.getProfileBiodata();
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.biodataResponse !== this.props.biodataResponse) {
            console.log("Updated");
            let newBio = {...this.props.biodataResponse};
            // Temp
            delete newBio.house_address;
            // Remove unnecessary field
            delete newBio.profile_picture_link;
            this.setState({
                ...this.state,
                ...newBio,
            });
        }
    }

    private handleInputChange(e: any): void {
        const { name, value, files } = e.target;
        console.log(files);
        console.log(value);
        if (files !== null) {
            this.setState({
                ...this.state,
                [name]: files[0],
            });
        }
        else if (value !== null) {
            this.setState({
                ...this.state,
                [name]: value,
            });
        }
    }

    private handleUpdateBiodata(e: any): void {
        e.preventDefault();
        this.props.updateProfileBiodata(this.state);
    }

    render() {
        const { biodataResponse } = this.props;
        const { email, name, contact_number, linkedin_profile, address, profile_picture } = this.state;
        console.log(this.state);
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
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        biodataResponse: biodataSelector(state),
        successMessageaResponse: successMessageaSelector(state),
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