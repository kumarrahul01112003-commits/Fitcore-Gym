import React from 'react'
import "./Member.css"

const Member = () => {
  return (
    <>
    <div id='mdiv'>
    <img className='Mimg' src='/Membership.jpg'></img>

    <h1 className='mh1'>MEMBERSHIP</h1>
    <h2 className='mh2'>PLANS</h2>
    <h1 className='Dh1'>STRONGER EVERYDAY</h1>
</div>

 <div className='mcards'>
  <div className='mcard'>
    <img src='https://wallpaperaccess.com/full/1108004.jpg' alt='...'/>
   <div className='md2'>
     <h3 className='mh3'>BASICS</h3>
    <p className='mp'>For Beginners</p>
    <p className='mp2'>₹ 999/ Month</p>
    </div>
    <div className="card-body">
    <ul>
      <li>✓ <span>Gym Access</span></li>
      <li>✓ <span>Basic Equipment</span></li>
      <li>✓ <span>Locker Room</span></li>
      <li>✓ <span>1 Free Fitness Assessment</span></li>
    </ul>

    <button className='mbtn'>CHOOSE PLAN</button>
  </div>
    

   </div>
   <div className='mcard'>
    <img src='https://wallpaperbat.com/img/922756-sports-bodybuilding-hd-wallpaper.jpg' alt='...'/>
   <div className='md2'>
     <h3 className='mh3'>STANDARD</h3>
    <p className='mp'>For Regular</p>
    <p className='mp2'>₹ 1,999/ Month</p>
    </div>
    <div className="card-body">
    <ul>
      <li>✓ <span>Gym Access</span></li>
      <li>✓ <span>Basic Equipment</span></li>
      <li>✓ <span>Locker Room</span></li>
      <li>✓ <span>1 Free Fitness Assessment</span></li>
    </ul>

    <button className='mbtn'>CHOOSE PLAN</button>
  </div>
    
     </div>
     <div className='mcard'>
    <img src='https://wallpaperaccess.com/full/1484388.jpg' alt='...'/>
   <div className='md2'>
     <h3 className='mh3'>PREMIUM</h3>
    <p className='mp'>For Athletis</p>
    <p className='mp2'>₹ 4,999/ Month</p>
    </div>
      <div className="card-body">
    <ul>
      <li>✓ <span>Gym Access</span></li>
      <li>✓ <span>Basic Equipment</span></li>
      <li>✓ <span>Locker Room</span></li>
      <li>✓ <span>1 Free Fitness Assessment</span></li>
    </ul>

    <button className='mbtn'>CHOOSE PLAN</button>
  </div>
    </div>

  





 </div>
    
    

    

    

    </>
  )
}

export default Member