import { Button } from 'react-bootstrap';

const PurpleButton = (props: any) => {
    return (
        <Button className="bg-purple text-white rounded-pill p-3 border-0 w-100" onClick={props?.onClick}>{props?.text}</Button>
    )
}

export default PurpleButton;