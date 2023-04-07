import { lazy, PureComponent } from "react";
import PropTypes from "prop-types";

const EditProfileSPBEComponent = lazy(() => import("../../components/EditProfileSPBE"));

export class EditProfileSPBEContainer extends PureComponent<any, any> {
    static propTypes = {
        history: PropTypes.any,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            item: {
                role: "",
                spbe_institution: "",
                eval_year: "",
            },
            list_items: [],
        };
        this.addField = this.addField.bind(this);
        this.deleteField = this.deleteField.bind(this);
    }

    componentDidMount() {
        this.addField();
    }

    private addField(): void {
        const { item, list_items } = this.state;
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

    render() {
        const { list_items } = this.state;
        return (
            <EditProfileSPBEComponent
                list_items={list_items}
                addField={this.addField}
                deleteField={this.deleteField}
            />
        )
    }
}
  
export default EditProfileSPBEContainer;