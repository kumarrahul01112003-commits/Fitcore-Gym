import React from 'react'
import "./Section.css"
import "./index.css"
import Card from './Card'

const Section = () => {
  return (
    <>
    <div className='section'>

      
        
       
                    <img src='https://i.pinimg.com/originals/7e/79/cf/7e79cf22847356c20b64aabe21d8ee3c.jpg' alt='...' id='a'></img>


         <div>          
        <h1 className='h1'>Build your Dream physique </h1>
        {/* <h1 className='h1'>dream physique</h1> */}
        <h2 className='red'>physical fitness...</h2>
        </div>  

        

        
    </div>
    
     

     <div id='pageT'>
      <h1 className='our'>Our Trainer</h1>
      </div>
     
    <div className='cards'>
      <Card img="https://www.ultimatebeefmagazine.com/wp-content/uploads/2021/01/milos%20sarcev%202003%20Grand%20Prix%20of%20Hungary%20nella%20posa%20di%20side%20chest-768x961.jpg" name="Milos sarcve"/>
      <Card img="https://wallpaperaccess.com/full/1966380.jpg" name="Jay Cutler"/>
      <Card img="https://tse2.mm.bing.net/th/id/OIP.YJO9CRx-47DtDUGawY1aHwHaE9?r=0&pid=Api&h=220&P=0" name="Mukesh Singh Gahlot"/>
      <Card img="https://images.openai.com/static-rsc-4/Uahy7zquOfUmeypMyaq2ZGuh85PE_KWnlZMuQeRt1vEAbFQWv1McLq9YxChfVLISv0Lh5hzGhgVfAy3RJJKmF7WZEi1XDcWb4JI96hcEU8wJGgnN4vBzZqzGACMb5hNkAu9046P1_fSVsfSby9s4HerYYYC9OPq_zGIgMmo1okPGzl4P5HjxYedFxmjcIFWD?purpose=fullsize" name="Joe Bennett"/>
      <Card img="https://images.openai.com/static-rsc-4/p-R1Q2wTXji0YcKmaH9eST3aSMHkO6YH4rr2CZ0IFFLDxpRfM34YDHvcSgpYeCIiuvaJoDgK6ay8bFJRI2zTCn1ngKlrNr7gZYiZRhaqjxJCF-Tf8RU0gcbFplH1zbbjZG8KTqKwVafC9_Vy2pRC53s3F3IOS6PI4ezpJkQ9POzSzQ-Ud0NwT-GWal2ar76j?purpose=fullsize" name="Chris Aceto"/>
      <Card img="https://images.openai.com/static-rsc-4/dbqsYjXeTEIiBdn3kQCGgmi3n9Rjte6cuT5V1ThquvZsjNpzEMCS-k4g_C9HkpbVIUiUmYSM2yYoPwVHN2qHPKNdCp9hp87HIsHuxP0D9WNKkicEGc-CJjDRSoHmzwod9gTtKrYIlq2JduSC6cYDfoD0gpSlW-5jWJmHYn3QaPN88CbNAqt-cXfHZBkRiaxR?purpose=fullsize" name="George Farah"/>

    
 </div>

 <div id='ab'>
  <h1 className='our'>Excercise</h1>
 </div>

 <div className='cards1'>
  <div className='card1'>
    <img src='https://ultimatetraininggear.com/wp-content/uploads/Strength-Training-Exercises-For-Women-1.png'alt='..'></img>
    <p className='p'>Strength</p>
 </div>
 <div className='card1'>
    <img src='https://marathonhandbook.com/wp-content/uploads/Is-CrossFit-Bad-For-You-4.jpg' alt='...'></img>
    <p className='p'>Cross Fit</p>
 </div>
 <div className='card1'>
    <img src='https://tse3.mm.bing.net/th/id/OIP.NdaqtW3o-XogRzRbT6T-WQHaFj?r=0&pid=Api&h=220&P=0' alt='...'></img>
    <p className='p'>Cardio</p>
 </div>
 <div className='card1'>
    <img src='https://img.freepik.com/photos-gratuite/jeune-homme-femme-spirituels-pratiquant-yoga-interieur_23-2149163320.jpg'alt='...'></img>
    <p className='p'>Yoga</p>
 </div>
  <div className='card1'>
    <img src='https://res.cloudinary.com/liaison-inc/image/upload/c_fill,f_auto,q_auto/services/lessons/backgrounds/boxing.jpg'alt='...'></img>
    <p className='p'>Boxing</p>
 </div>
 <div className='card1'>
    <img src='https://tse2.mm.bing.net/th/id/OIP.tQOnWagaCTTSJKP_ETjRYgHaE8?r=0&pid=Api&h=220&P=0'alt='...'></img>
    <p className='p'>Body Building</p>
 </div>
  

 </div>


      

    </>
  )
}

export default Section