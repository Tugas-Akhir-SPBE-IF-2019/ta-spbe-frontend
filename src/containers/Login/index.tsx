import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginMessageSelector, institutionDataSelector } from "./selector";
import { loginWithGoogle, getInstitutionData } from "./action";
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginComponent = lazy(() => import("../../components/Login"));

export class LoginContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        loginMessageResponse: PropTypes.object,
        institutionDataResponse: PropTypes.array,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            access_token: "",
        };
        this.handleLoginState = this.handleLoginState.bind(this);
    }

    componentDidMount() {
        const { authToken } = this.props;
        if (authToken) {
            this.props.history.replace("/dashboard");
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        const { loginMessageResponse, institutionDataResponse } = this.props;
        const { access_token } = this.state;
        if (prevState.access_token !== access_token) {
            this.props.initiateGoogleLogin(this.state);
        }
        if (prevProps.loginMessageResponse !== loginMessageResponse) {
            if (loginMessageResponse.access_token && loginMessageResponse.refresh_token) {
                localStorage.setItem("AUTH_TOKEN", loginMessageResponse.access_token.token);
                localStorage.setItem("REFRESH_TOKEN", loginMessageResponse.refresh_token.token);
                this.props.getProfileInstitutionData();
            }
        }
        if (prevProps.institutionDataResponse !== institutionDataResponse) {
            if (institutionDataResponse.length !== 0) {
                this.props.history.replace("/dashboard");
            }
            else {
                this.props.history.replace("/edit-profile/institution");
            }
        }

    }

    private handleLoginState (token: string): void {
        this.setState({
            ...this.state,
            access_token: token,
        });
    }

    render() {
        return (
            <GoogleOAuthProvider clientId="657950965679-e0t64efubu8769a9du5c09vkke359ek9.apps.googleusercontent.com">
                <LoginComponent
                    handleLoginState={this.handleLoginState}
                />
            </GoogleOAuthProvider>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        loginMessageResponse: loginMessageSelector(state),
        institutionDataResponse: institutionDataSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        initiateGoogleLogin: (params: any) => dispatch(loginWithGoogle(params)),
        getProfileInstitutionData: () => dispatch(getInstitutionData()),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);