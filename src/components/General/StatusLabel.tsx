import { checkTextColor, checkBackgroundColor, checkStatus } from "../../utils/helper";

const StatusLabel = (props: any) => {
    return (
        <div className={"width-fit " + props?.className}>
            <h6 className={`px-4 py-2 rounded-pill ${checkTextColor(props?.text)} ${checkBackgroundColor(props?.text)}`}>{checkStatus(props?.text)}</h6>
        </div>
    )
}

export default StatusLabel;