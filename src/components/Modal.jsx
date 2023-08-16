export const Modal = (props) => {
    return (
        <div className="container fixed m-20 cursor-pointer h-screen w-screen " >
            <img className="w-screen h-screen" onClick={props.click} src={props.img} alt="" />
            <div className="text-white" ><p>X</p></div>
        </div>
    )
}