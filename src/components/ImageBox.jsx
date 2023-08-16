export const ImageBox = (props) => {


    return (
        <div className="w-auto ">
            <img className="h-auto w-auto cursor-pointer hover:opacity-80" src={props.images} alt=""
            />
        </div >
    )
}