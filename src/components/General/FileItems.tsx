import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';

const FileItems = (props: any) => {
    return (
        <>
            {props?.items?.length !== 0 && (props.items.map((item: any, index: number) => {
                return (
                    <Row className="p-0 align-items-center w-100" key={index}>
                        <Col className="p-0 text-truncate">
                            <span>{item.name}</span>
                        </Col>
                        <Col xs={1}>
                            <FontAwesomeIcon icon={faXmarkSquare} size="2x" className="text-red pointer" onClick={() => props?.onDelete(index, props?.name)} />
                        </Col>
                    </Row>
                )
            }))}
        </>
    )
}

export default FileItems;