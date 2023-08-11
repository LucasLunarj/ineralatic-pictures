import { useState } from 'react'
//Components
import { ImageBox } from './ImageBox'
import { Modal } from './Modal'

//Images
import picture1 from '../../public/1.jpg'
import picture2 from '../../public/2.jpg'
import picture3 from '../../public/3.jpg'
import picture4 from '../../public/4.jpg'
import picture5 from '../../public/5.jpg'
import picture6 from '../../public/6.jpg'
import picture7 from '../../public/7.jpg'
import picture8 from '../../public/8.jpg'
import picture9 from '../../public/9.jpg'



export const Page = () => {
    const [images, setImages] = useState([
        { picture: picture1, switch: false, id: 1 },
        { picture: picture2, switch: false, id: 2 },
        { picture: picture3, switch: false, id: 3 },
        { picture: picture4, switch: false, id: 4 },
        { picture: picture5, switch: false, id: 5 },
        { picture: picture6, switch: false, id: 6 },
        { picture: picture7, switch: false, id: 7 },
        { picture: picture8, switch: false, id: 8 },
        { picture: picture9, switch: false, id: 9 },
    ]);



    const [showModal, setShowModal] = useState(false);
    const [individualImg, setIndividualImg] = ([]);



    function handleSwitch(img) {
        if (!showModal === true) {
            setShowModal(true);
            () => setIndividualImg(img.filter((img) => img == img))
            console.log(individualImg)
        }
        else {
            setShowModal(false)

        }
    }


    return (
        <div className="text-white">
            {showModal === false ? <div>test</div> : null}
            <h1 className="text-center text-4xl p-4">Intergalactic Pictures</h1>
            <div className=' pt-10 h-screen lg:grid lg:grid-cols-3 gap-5 flex flex-col lg:mx-40 '>
                {images.map(item => {
                    return <div key={item.id} onClick={() => handleSwitch(item.img)} >
                        <ImageBox key={item.id} images={item.picture} />
                    </div>

                })}
            </div>

        </div>
    )
}