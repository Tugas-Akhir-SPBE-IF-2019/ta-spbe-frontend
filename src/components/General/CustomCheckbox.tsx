import { FormCheck } from 'react-bootstrap';

const CustomCheckbox = (props: any) => {
    return (
        <>
            <FormCheck.Input
                className="shadow-none ms-auto me-5"
                type="checkbox"
                id={props?.id}
                name={props.name}
                value={props?.value}
                onChange={props?.onChange}
            />
        </>
    )
}

export default CustomCheckbox;