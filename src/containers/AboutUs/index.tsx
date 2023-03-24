import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const AboutUsComponent = lazy(() => import("../../components/AboutUs"));

export class AboutUsContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <AboutUsComponent/>
        )
    }
}
  
export default AboutUsContainer;