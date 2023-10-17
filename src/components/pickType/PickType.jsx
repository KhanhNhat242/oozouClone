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
import PickItem from './pickItem/PickItem'
import email from '../../assets/email.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import google from '../../assets/google.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import user from '../../assets/user.png'
import multiTenant from '../../assets/multiTenant.png'
import subDomain from '../../assets/subDomain.png'
import customDomain from '../../assets/customDomain.png'
import dashboard from '../../assets/dashboard.png'
import activityFeed from '../../assets/activityFeed.png'
import fileUploading from '../../assets/fileUploading.png'
import userProfile from '../../assets/userProfile.png'
import transactionalEmail from '../../assets/transactionalEmail.png'
import ratingReview from '../../assets/ratingReview.png'
import audioVideo from '../../assets/audioVideo.png'
import freeText from '../../assets/freeText.png'
import tags from '../../assets/tags.png'
import calendaring from '../../assets/calendaring.png'
import mapData from '../../assets/mapData.png'
import mapMaker from '../../assets/mapMaker.png'
import booking from '../../assets/booking.png'
import messaging from '../../assets/messaging.png'
import forumCommenting from '../../assets/forumCommenting.png'
import socialSharing from '../../assets/socialSharing.png'
import facebookOpen from '../../assets/facebookOpen.png'
import subscriptionPlan from '../../assets/subscriptionPlan.png'
import paymentProcessing from '../../assets/paymentProcessing.png'
import userMarketplace from '../../assets/userMarketplace.png'
import dataAdmin from '../../assets/dataAdmin.png'
import cmsIntegration from '../../assets/cmsIntegration.png'
import moderationContent from '../../assets/moderationContent.png'
import intercom from '../../assets/intercom.png'
import userAnalytic from '../../assets/userAnalytic.png'
import crashReporting from '../../assets/crashReporting.png'
import performanceManagement from '../../assets/performanceManagement.png'
import multilinggual from '../../assets/multilinggual.png'
import thirdParty from '../../assets/thirdParty.png'
import buildApi from '../../assets/buildApi.png'
import smsMessaging from '../../assets/smsMessaging.png'
import phoneNumber from '../../assets/phoneNumber.png'
import sslCertificate from '../../assets/sslCertificate.png'
import dosProtection from '../../assets/dosProtection.png'
import twoFactor from '../../assets/twoFactor.png'
import shoppingCart from '../../assets/shoppingCart.png'
import userAdmin from '../../assets/userAdmin.png'

function PickType() {
    const [color, setColor] = useState('#4FC7FF')
    const [flag, setFlag] = useState(0)
    const [flag2, setFlag2] = useState(0)

    return ( 
        <div>
            <div id='web' className='pick-type-wrapper'>
                <div className='pick-type type1' onClick={() => setColor('#4FC7FF')} style={{height: 136}}>
                    <h2 className='pick-type-title'><FontAwesomeIcon className='pick-type-icon' icon={faDesktop} />Web</h2>
                    <p className='pick-type-detail'>A web app or a <br /> back-end to a mobile app</p>
                </div>
                <div className='pick-type type2' onClick={() => setColor('#F4D03F')} style={{height: 136}}>
                    <h2 className='pick-type-title'><FontAwesomeIcon className='pick-type-icon' icon={faApple} />iOS</h2>
                    <p className='pick-type-detail'>An iPhone/iPad app <br /> {`${'(Excluding back-end)'}`}</p>
                </div>
                <div className='pick-type type3' onClick={() => setColor('#03C9A9')} style={{height: 136}}>
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
                <div className='multi-item-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='multi-title'>3. Users & Accounts</h2>
                    <div className='multi-item-row'>
                        <PickItem title='Email / Password Sign Up' img={email} />
                        <PickItem title='Facebook Sign Up' img={facebook} />
                        <PickItem title='Twitter Sign Up' img={twitter} />
                        <PickItem title='Google Sign Up' img={google} />
                    </div>
                    <div className='multi-item-row'>
                        <PickItem title='LinkedIn Sign Up' img={linkedin} />
                        <PickItem title='Github Sign Up' img={github} />
                        <PickItem title='User Invitation Emails' img={user} />
                        <PickItem title='Multi-tenant Accounts' img={multiTenant} />
                    </div>
                    <div className='multi-item-row'>
                        <PickItem title='Subdomains' img={subDomain} />
                        <PickItem title='Custom Domains' img={customDomain} />
                    </div>
                </div>
                <div className='multi-item-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='multi-title'>4. User Generated Content</h2>
                    <div className='multi-item-row'>
                        <PickItem title='Dashboard' img={dashboard} />
                        <PickItem title='Activity Feed' img={activityFeed} />
                        <PickItem title='File Uploading' img={fileUploading} />
                        <PickItem title='User Profiles' img={userProfile} />
                    </div>
                    <div className='multi-item-row'>
                        <PickItem title='Transactional Emails' img={transactionalEmail} />
                        <PickItem title='Tags' img={tags} />
                        <PickItem title='Ratings or reviews' img={ratingReview} />
                        <PickItem title='Audio/Video processing' img={audioVideo} />
                    </div>
                    <div className='multi-item-row'>
                        <PickItem title='Free text searching' img={freeText} />
                    </div>
                </div>
                <div className='multi-item-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='multi-title'>5. Dates & Locations</h2>
                    <div className='multi-item-row'>
                        <PickItem title='' img={calendaring} />
                        <PickItem title='' img={mapData} />
                        <PickItem title='' img={mapMaker} />
                        <PickItem title='' img={booking} />
                    </div>
                </div>
                <div className='multi-item-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='multi-title'>6. Social & Engagement</h2>
                    <div className='multi-item-row'>
                        <PickItem title='Messaging' img={messaging} />
                        <PickItem title='Forums or commenting' img={forumCommenting} />
                        <PickItem title='Social Sharing' img={socialSharing} />
                        <PickItem title='Push to Facebook Open Graph' img={facebookOpen} />
                    </div>
                </div>
                <div className='multi-item-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='multi-title'>7. Billing & eCommerce</h2>
                    <div className='multi-item-row'>
                        <PickItem title='Subscription plans' img={subscriptionPlan} />
                        <PickItem title='Payment processing' img={paymentProcessing} />
                        <PickItem title='Shopping Cart' img={shoppingCart} />
                        <PickItem title='User Marketplace' img={userMarketplace} />
                    </div>
                    <div className='multi-item-row'>
                        <PickItem title='Product Management' img={dataAdmin} />
                    </div>
                </div>
                <div className='multi-item-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='multi-title'>8. Admin, Feedback & Analytics</h2>
                    <div className='multi-item-row'>
                        <PickItem title='CMS Integration' img={cmsIntegration} />
                        <PickItem title='User Admin pages' img={userAdmin} />
                        <PickItem title='Moderation / Content Approval' img={moderationContent} />
                        <PickItem title='Intercom' img={intercom} />
                    </div>
                    <div className='multi-item-row'>
                        <PickItem title='Usage Analytics' img={userAnalytic} />
                        <PickItem title='Crash Reporting' img={crashReporting} />
                        <PickItem title='Performance Monitoring ' img={performanceManagement} />
                        <PickItem title='Multilingual Support' img={multilinggual} />
                    </div>
                </div>
                <div className='multi-item-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='multi-title'>8. Admin, Feedback & Analytics</h2>
                    <div className='multi-item-row'>
                        <PickItem title='Connect to one or more third party services' img={thirdParty} />
                        <PickItem title='An API for others to integrate with your app' img={buildApi} />
                        <PickItem title='SMS Messaging' img={smsMessaging} />
                        <PickItem title='Phone Number Masking' img={phoneNumber} />
                    </div>
                </div>
                <div className='multi-item-wrapper' style={{borderBottom: `50px solid ${color}`}}>
                    <h2 className='multi-title'>8. Admin, Feedback & Analytics</h2>
                    <div className='multi-item-row'>
                        <PickItem title='SSL Certificate based Security' img={sslCertificate} />
                        <PickItem title='DoS protection' img={dosProtection} />                        
                        <PickItem title='Two Factor Authentication' img={twoFactor} />
                    </div>
                </div>
            </div>
            <a href='#web'>
                <div className='pick-type-wrapper' style={{height: 260}}>
                    <div className='pick-type type1' onClick={() => setColor('#4FC7FF')} style={{height: '100%'}}>
                        <h2 className='pick-type-title'><FontAwesomeIcon className='pick-type-icon' icon={faDesktop} /></h2>
                        <p className='pick-type-detail'>Need a Web App? <br /> <span>{`${'(or a back-end to your mobile app)'}`}`</span></p>
                    </div>
                    <div className='pick-type type2' onClick={() => setColor('#F4D03F')} style={{height: '100%'}}>
                        <h2 className='pick-type-title'><FontAwesomeIcon className='pick-type-icon' icon={faApple} /></h2>
                        <p className='pick-type-detail'>Need an iOS App?</p>
                    </div>
                    <div className='pick-type type3' onClick={() => setColor('#03C9A9')} style={{height: '100%'}}>
                        <h2 className='pick-type-title'><FontAwesomeIcon className='pick-type-icon' icon={faAndroid} /></h2>
                        <p className='pick-type-detail'>Need an Anroid App?</p>
                    </div>
                </div>  
            </a>
            <div className='total-wrapper'>
                <h1 className='total-title'>Total Cost: $0</h1>
                <p className='total-detail'>Based on Oozou rates. To use your own rates, click Show Calculations above.</p>
                <p className='note'>Please note, all cost estimates are intended to be indicative of development costs and timescales only and are exclusive of all hosting costs, paid services or purchased assets of any kind. All prices are in USD and inclusive of sales tax.</p>
            </div>
            <div className='save-wrapper'>
                <h4 className='save-title'>Save your estimate and get a permalink so you can share with your team</h4>
                <input className='email-input' type='text' placeholder='Enter your email address' /> <br />
                <input type='checkbox' checked />
                <label>Receive useful information about building apps in your inbox. No spam. Ever.</label> <br />
                <button className='save-btn'>Save Estimate</button>
            </div>
        </div>
     );
}

export default PickType;