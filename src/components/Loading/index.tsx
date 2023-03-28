import PropTypes from "prop-types";
import { PureComponent } from "react";
import { Spinner } from "react-bootstrap";

export default class LoadingIndicator extends PureComponent<any, any> {
    static propTypes = {
        show: PropTypes.bool,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        const { show } = this.props;
        return (
            <>
                {show && (
                    <div
                        style={{
                            zIndex: "1000",
                            backgroundColor: "hsla(0, 0%, 100%, 0.6)",
                        }}
                        className="h-100 w-100 d-flex flex-column position-fixed top-0 left-0 align-items-center justify-content-center"
                    >
                        <Spinner animation="border" variant="secondary" />
                    </div>
                )}
            </>
        );
    }
}
