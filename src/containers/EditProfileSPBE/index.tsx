import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    evaluationDataSelector,
    successMessageaSelector
} from "./selector";
import {
    getEvaluationData,
    updateEvaluationData
} from "./action";

const EditProfileSPBEComponent = lazy(() => import("../../components/EditProfileSPBE"));

export class EditProfileSPBEContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
        evaluationDataResponse: PropTypes.any,
        successMessageaResponse: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            list_items: [],
            saved_items: [],
        };
        this.addField = this.addField.bind(this);
        this.deleteField = this.deleteField.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdateEvaluationData = this.handleUpdateEvaluationData.bind(this);
    }

    componentDidMount() {
        this.props.getProfileEvaluationData();
        this.addField();
    }

    private addField(): void {
        const { list_items } = this.state;
        let item = {
            role: "",
            institution_id: "",
            evaluation_year: "",
        };
        this.setState({
            ...this.state,
            list_items: [...list_items, item],
        })
    }

    private deleteField(index: number): void {
        const { list_items } = this.state;
        let new_list = [...list_items];
        new_list.splice(index+1, 1);
        this.setState({
            ...this.state,
            list_items: new_list,
        })
    }

    private handleInputChange(e: any, index: number): void {
        const { name, value } = e.target;
        const { list_items } = this.state;

        let val = value;
        let new_list = [...list_items];
        if (name !== "role") {
            val = parseInt(val);
        }
        new_list[index][name] = val;
        this.setState({
            ...this.state,
            list_items: new_list,
        })
    }

    private handleUpdateEvaluationData(e: any): void {
        e.preventDefault();
        let item = this.state.list_items[0];
        this.props.updateProfileEvaluationData(this.state.list_items);
    }

    render() {
        const { list_items } = this.state;
        console.log(this.state);
        return (
            <EditProfileSPBEComponent
                list_items={list_items}
                addField={this.addField}
                deleteField={this.deleteField}
                handleInputChange={this.handleInputChange}
                handleUpdateEvaluationData={this.handleUpdateEvaluationData}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        evaluationDataResponse: evaluationDataSelector(state),
        successMessageaResponse: successMessageaSelector(state),
    };
};
  
function mapDispatchToProps(dispatch: any) {
    return {
        getProfileEvaluationData: () => dispatch(getEvaluationData()),
        updateProfileEvaluationData: (params: any) => dispatch(updateEvaluationData(params)),
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileSPBEContainer);