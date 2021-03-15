import React from 'react'

function Body() {
    return (
        <>
             <div className='back_img'>
                  <img src='https://api.time.com/wp-content/uploads/2019/04/impossible-whopper-burger-king.jpg?quality=85&crop=0px%2C98px%2C1024px%2C536px&resize=1200%2C628&strip' 
                  alt='A.Tiffins' />
                  
              </div>
              <div><h1 className='company_name'><strong style={{color:'#FD7527'}}>B</strong>urger 
              <strong style={{color:'#FD7527'}}>P</strong>alace</h1>
             <br/> <br/>
             <a href='^'  className='order_link' >Order Food</a><br /><br />
             
             <a href='&' className='login_link' >Login</a>
              </div>
             <div>
                 <h2 style={{position:'absolute', bottom:'-250px',left:'50px', fontSize:'6vh'}}><strong style={{color:'var(--bcolor)'}}>B</strong><span style={{color:'var(--pcolor)'}}>urger</span>
                 <strong style={{color:'var(--bcolor)'}}>P</strong>
                 <span style={{color:'var(--pcolor)'}}>alace</span> <span style={{opacity:'0.5'}}>is a dream place for ordering
                 delicious Burgers, Fries, Drinks and Many More.</span></h2>
                 <img src='https://www.flaticon.com/svg/vstatic/svg/733/733547.svg?token=exp=1615746384~hmac=7acf055a3bf09aaaece8e1b77386e4d3'
                 style={{width:'3%', position:'relative',top:'-30px',left:'0px'}} alt='fb' />
                 <img src='https://www.flaticon.com/svg/vstatic/svg/2111/2111463.svg?token=exp=1615746630~hmac=8ae660433c476db5d608bc8266b3a029'
                 style={{width:'3%', position:'relative',top:'-30px',left:'10px'}} alt='fb' />
                <img src='https://www.flaticon.com/svg/vstatic/svg/1384/1384060.svg?token=exp=1615746740~hmac=8eefa3c1417cd7e04e51a59bf88280d8'
                 style={{width:'4%', position:'relative',top:'-25px',left:'20px'}} alt='fb' />
             </div>
        </>
    )
}

export default Body
