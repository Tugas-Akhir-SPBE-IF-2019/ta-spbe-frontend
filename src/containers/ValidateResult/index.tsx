import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { validationMessageSelector } from "./selector";
import { sendValidation } from "./action";

const ValidateResultComponent = lazy(() => import("../../components/ValidateResult"));

export class ValidateResultContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        validationMessageResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ValidateResultComponent />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        validationMessageResponse: validationMessageSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        sendValidationData: (params: any) => dispatch(sendValidation(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidateResultContainer);