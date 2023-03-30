const BlockLabel = (props: any) => {
    return (
        <div className="bg-light-purple width-label text-center me-3">
            <h6 className="text-purple p-2">{props?.text}</h6>
        </div>
    )
}

export default BlockLabel;