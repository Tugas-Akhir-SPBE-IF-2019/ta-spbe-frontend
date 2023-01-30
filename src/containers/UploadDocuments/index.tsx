import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadMessageSelector } from "./selector";
import { uploadDocuments } from "./action";

const UploadDocumentsComponent = lazy(() => import("../../components/UploadDocuments"));

export class UploadDocumentsContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        uploadMessageResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <UploadDocumentsComponent />
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