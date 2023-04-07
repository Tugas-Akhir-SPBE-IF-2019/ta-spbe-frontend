import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const EditProfileBioComponent = lazy(() => import("../../components/EditProfileBio"));

export class EditProfileBioContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <EditProfileBioComponent />
        )
    }
}
  
export default EditProfileBioContainer;