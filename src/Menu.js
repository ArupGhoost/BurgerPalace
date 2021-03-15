import React from 'react'

function Menu() {
    return (
        <>
             <div className='menu'>
                 <h1 style={{color:'var(--pcolor)', fontSize:'8vh'}}>Menu</h1>

                 <br/>
                 <br/>
                 <br />
                  <div className="menu_items">
                       <img className='image1' src='https://www.flaticon.com/svg/vstatic/svg/3075/3075977.svg?token=exp=1615725263~hmac=ff509b00865d083f01952c6d44107733' 
                       alt='burger' />
                        <img className='image2' src='https://www.flaticon.com/svg/vstatic/svg/1161/1161623.svg?token=exp=1615725579~hmac=975fcf50902363a0abbf56466493b2ca' 
                       alt='pizza' />
                        <img className='image3' src='https://www.flaticon.com/svg/vstatic/svg/1057/1057356.svg?token=exp=1615725950~hmac=02cb6bbf6d8d3159a1749d7bb3195e77' 
                       alt='fries' />
                       <br/>
                       <br /><br />
                       <img className='image4' src='https://www.flaticon.com/svg/vstatic/svg/2405/2405479.svg?token=exp=1615726265~hmac=5f45b43bef0ae8a5d66f150b2cf54bfa' 
                       alt='drinks' />
                        <img className='image5' src='https://www.flaticon.com/svg/vstatic/svg/2872/2872362.svg?token=exp=1615745263~hmac=4139ee3b0a75aeba61389ad705b367b0' />
                  </div>
                  <br/>
                  <br/>
                  <br />
                  <br />
                  </div>
        </>
    )
}

export default Menu
