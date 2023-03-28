import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const AboutUsComponent = lazy(() => import("../../components/AboutUs"));

export class AboutUsContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);

        this.state = {
            showLink: false,
        };
        this.setShowLink = this.setShowLink.bind(this);
    }

    private setShowLink(): void {
        this.setState({
            ...this.state,
            showLink: !this.state.showLink,
        });
    }

    render() {
        const { showLink } = this.state;
        return (
            <AboutUsComponent setShowLink={this.setShowLink} showLink={showLink}/>
        )
    }
}
  
export default AboutUsContainer;