export const ImageBox = (props) => {
    const [individualPicture, setIndividualPicture] = ('')

    console.log(individualPicture)
    return (
        <div className="w-auto ">
            <img className="h-auto w-auto cursor-pointer" src={props.images} alt=""
            />
        </div >
    )
}