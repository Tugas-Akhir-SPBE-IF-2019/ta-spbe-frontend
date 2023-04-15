import { lazy, PureComponent, Suspense } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { loadingSelector } from "./selector";
import { getLoaderState } from "./action";
import LoadingIndicator from "../../components/Loading";

const GuestDashboardContainer = lazy(() => import("../GuestDashboard"));
const UploadDocumentsContainer = lazy(() => import("../UploadDocuments"));
const AssessmentResultContainer = lazy(() => import("../AssessmentResult"));
const ValidateResultContainer = lazy(() => import("../ValidateResult"));
const UserDashboardContainer = lazy(() => import("../UserDashboard"));
const LoginContainer = lazy(() => import("../Login"));
const AboutUsContainer = lazy(() => import("../AboutUs"));
const ProfileContainer = lazy(() => import("../Profile"));
const TutorialContainer = lazy(() => import("../Tutorial"));
const EditProfileBioContainer = lazy(() => import("../EditProfileBio"));
const EditProfileWorkContainer = lazy(() => import("../EditProfileWork"));
const EditProfileSPBEContainer = lazy(() => import("../EditProfileSPBE"));
const EditProfileInstitutionContainer = lazy(() => import("../EditProfileInstitution"));

export class LayoutContainer extends PureComponent<any, any> {
    static propTypes = {
        loadingResponse: PropTypes.bool,
        history: PropTypes.any,
    }
    
    constructor(props: any) {
        super(props);
    }

    render() {
        const { loadingResponse } = this.props;
        return (
            <div className="bg-gray" style={{ height: "100vh", overflowX: "hidden" }}>
                <Suspense fallback={<LoadingIndicator show={true}/>}>
                    {loadingResponse ? <LoadingIndicator show={true}/> : null}
                    <Switch>
                        <Route
                            exact
                            path={"/"}
                            render={(props: any) => {
                            return <GuestDashboardContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/upload"}
                            render={(props: any) => {
                            return <UploadDocumentsContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/result/:id"}
                            render={(props: any) => {
                            return <AssessmentResultContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/validate/:id"}
                            render={(props: any) => {
                            return <ValidateResultContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/dashboard"}
                            render={(props: any) => {
                            return <UserDashboardContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/login"}
                            render={(props: any) => {
                            return <LoginContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/about"}
                            render={(props: any) => {
                            return <AboutUsContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/profile"}
                            render={(props: any) => {
                            return <ProfileContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/tutorial"}
                            render={(props: any) => {
                            return <TutorialContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/edit-profile/biodata"}
                            render={(props: any) => {
                            return <EditProfileBioContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/edit-profile/occupation"}
                            render={(props: any) => {
                            return <EditProfileWorkContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/edit-profile/evaluation"}
                            render={(props: any) => {
                            return <EditProfileSPBEContainer {...this.props} {...props} />;
                            }}
                        />
                        <Route
                            path={"/edit-profile/institution"}
                            render={(props: any) => {
                            return <EditProfileInstitutionContainer {...this.props} {...props} />;
                            }}
                        />
                    </Switch>
                </Suspense>
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