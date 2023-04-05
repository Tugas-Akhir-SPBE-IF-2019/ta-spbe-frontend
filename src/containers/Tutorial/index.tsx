import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const TutorialComponent = lazy(() => import("../../components/Tutorial"));

export class TutorialContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <TutorialComponent />
        )
    }
}
  
export default TutorialContainer;