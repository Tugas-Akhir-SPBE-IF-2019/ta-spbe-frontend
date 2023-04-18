import { Form } from 'react-bootstrap';

const CustomRadio = (props: any) => {
    return (
        <>
            <Form.Check
                className="shadow-none p-0"
                type="radio"
                label={props?.label}
                id={props?.id}
                name={props.name}
                value={props?.value}
                onChange={props?.onChange}
                disabled={props?.disabled}
            />
        </>
    )
}

export default CustomRadio;