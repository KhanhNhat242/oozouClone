import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'
import './PickType.scss'
import small from '../../assets/small.png'
import medium from '../../assets/medium.png'
import large from '../../assets/large.png'
import { useState } from 'react'
import basic from '../../assets/basic.png'
import mvp from '../../assets/mvp.png'
import polished from '../../assets/polished.png'


function PickType() {
    const [color, setColor] = useState('#4FC7FF')
    const [flag, setFlag] = useState(0)
    const [flag2, setFlag2] = useState(0)

    return ( 
        <div>
            <div className='pick-type-wrapper'>
                <div className='pick-type type1' onClick={() => setColor('#4FC7FF')}>
                    <h2 className='pick-type-title'><FontAwesomeIcon className='pick-type-icon' icon={faDesktop} />Web</h2>
                    <p className='pick-type-detail'>A web app or a <br /> back-end to a mobile app</p>
                </div>
                <div className='pick-type type2' onClick={() => setColor('#F4D03F')}>
                    <h2 className='pick-type-title'><FontAwesomeIcon className='pick-type-icon' icon={faApple} />iOS</h2>
                    <p className='pick-type-detail'>An iPhone/iPad app <br /> {`${'(Excluding back-end)'}`}</p>
                </div>
                <div className='pick-type type3' onClick={() => setColor('#03C9A9')}>
                    <h2 className='pick-type-title'><FontAwesomeIcon className='pick-type-icon' icon={faAndroid} />Anroid</h2>
                    <p className='pick-type-detail'>An Anroid Phone / Tablet app <br /> {`${'(Excluding back-end)'}`}</p>
                </div>
            </div>
            <div className='pick-item-wrapper' style={{backgroundColor: `${color}` }}>
                <div className='pick-size-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='size-title'>1. How big is your app?</h2>
                    <div className='size-wrapper'>
                        <div className='size-item' style={{position: 'relative'}} onClick={() => {setFlag(1)}}>
                            <p className='size-item-title'>Small</p>
                            <img className={`${flag == 1 ? 'size-item-img isActive' : 'size-item-img'}`} src={small} />
                            <p className='tick' style={{display: `${flag == 1 ? 'block' : 'none'}`}}>&#x2714;</p>
                        </div>
                        <div className='size-item' style={{position: 'relative'}} onClick={() => {setFlag(2)}}>
                            <p className='size-item-title'>Medium</p>
                            <img className={`${flag == 2 ? 'size-item-img isActive' : 'size-item-img'}`} src={medium} />
                            <p className='tick' style={{display: `${flag == 2 ? 'block' : 'none'}`}}>&#x2714;</p>
                        </div>
                        <div className='size-item' style={{position: 'relative'}} onClick={() => {setFlag(3)}}>
                            <p className='size-item-title'>Large</p>
                            <img className={`${flag == 3 ? 'size-item-img isActive' : 'size-item-img'}`} src={large} />
                            <p className='tick' style={{display: `${flag == 3 ? 'block' : 'none'}`}}>&#x2714;</p>
                        </div>
                    </div>
                </div>
                <div className='pick-size-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='size-title'>2. What level of UI would you like?</h2>
                    <div className='size-wrapper'>
                        <div className='size-item' style={{position: 'relative'}} onClick={() => {setFlag2(1)}}>
                            <p className='size-item-title'>MVP</p>
                            <img className={`${flag2 == 1 ? 'size-item-img isActive' : 'size-item-img'}`} src={mvp} />
                            <p className='tick' style={{display: `${flag2 == 1 ? 'block' : 'none'}`}}>&#x2714;</p>
                        </div>
                        <div className='size-item' style={{position: 'relative'}} onClick={() => {setFlag2(2)}}>
                            <p className='size-item-title'>Basic</p>
                            <img className={`${flag2 == 2 ? 'size-item-img isActive' : 'size-item-img'}`} src={basic} />
                            <p className='tick' style={{display: `${flag2 == 2 ? 'block' : 'none'}`}}>&#x2714;</p>
                        </div>
                        <div className='size-item' style={{position: 'relative'}} onClick={() => {setFlag2(3)}}>
                            <p className='size-item-title'>Polished</p>
                            <img className={`${flag2 == 3 ? 'size-item-img isActive' : 'size-item-img'}`} src={polished} />
                            <p className='tick' style={{display: `${flag2 == 3 ? 'block' : 'none'}`}}>&#x2714;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default PickType;