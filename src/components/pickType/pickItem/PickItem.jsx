// import email from '../../../assets/email.png'
import { useState } from 'react';
import './PickItem.scss'

function PickItem({ title, img }) {
    const [isActive, setIsActive] = useState('')
    const [block, setBlock] = useState('none')
    const [flag, setFlag] = useState(false)

    const handleIsActive = () => {
        setIsActive('isActive')
        setBlock('block')
        setFlag(true)
    }

    const handleNotActive = () => {
        setIsActive('')
        setBlock('none')
        setFlag(false)
    }
    return ( 
        <div className='multi-item' onClick={flag == false ? handleIsActive : handleNotActive}>
            <p className='multi-item-title'>{title}</p>
            <img className={`multi-item-img ${isActive}`} src={img} />
            <p className='tick2' style={{display: `${block}`}}>&#x2714;</p>
        </div>
     );
}
export default PickItem;