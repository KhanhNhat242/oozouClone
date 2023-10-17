import './Title.scss'

function Title() {
    return ( 
        <div className='title-wrapper'>
            <h1 className='title'>Estimate My App</h1>
            <h3 className='title2'>Select the items below which best describe your app and the features you require.</h3>
            <p className='title3'>All estimates are approximate but should give you a rough idea of what it will take to build your app.</p>
        </div>
     );
}

export default Title;