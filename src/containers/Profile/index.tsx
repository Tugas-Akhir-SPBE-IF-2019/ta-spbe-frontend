import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const ProfileComponent = lazy(() => import("../../components/Profile"));

export class ProfileContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ProfileComponent/>
        )
    }
}
  
export default ProfileContainer;