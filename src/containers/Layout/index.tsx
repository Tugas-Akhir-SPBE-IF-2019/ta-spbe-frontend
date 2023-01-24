import { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadingSelector } from "./selector";
import { getLoaderState } from "./action";

export class LayoutContainer extends PureComponent<any, any> {
    static propTypes = {
        loadingResponse: PropTypes.bool,
        history: PropTypes.any,
    }
    
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>TEST LAYOUT</h1>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        loadingResponse: loadingSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        setLoading: (params: any) => dispatch(getLoaderState(params)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);