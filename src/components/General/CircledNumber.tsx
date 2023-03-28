const CircledNumber = (props: any) => {
    return (
        <div className="bg-purple rounded-circle circle-fit text-center me-2">
            <p className="text-white p-2 fw-bold">{props?.number}</p>
        </div>
    )
}

export default CircledNumber;