import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginMessageSelector } from "./selector";
import { loginWithGoogle } from "./action";
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginComponent = lazy(() => import("../../components/Login"));

export class LoginContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        loginMessageResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <GoogleOAuthProvider clientId="254472569906-mvbqulpv5c8p7upor4e071654d5t48pp.apps.googleusercontent.com">
                <LoginComponent />
            </GoogleOAuthProvider>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        loginMessageResponse: loginMessageSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        sendGoogleLoginData: (params: any) => dispatch(loginWithGoogle(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);