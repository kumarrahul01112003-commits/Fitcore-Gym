import React, { useEffect, useState } from 'react'
import "./Slideup.css"

const Slideup = () => {

  const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/048/905/224/small_2x/neon-lit-modern-gym-interior-with-weightlifting-equipment-photo.jpg",
    "https://png.pngtree.com/background/20230528/original/pngtree-gym-is-reflected-in-an-odd-light-picture-image_2773779.jpg",
    "https://wallpaperaccess.com/full/4722464.jpg",
    "https://wallpapercave.com/wp/wp2639569.jpg",
    "https://wallpaperaccess.com/full/1087621.jpg",
    "https://png.pngtree.com/background/20230516/original/pngtree-gym-with-many-weights-in-dark-lighting-picture-image_2611113.jpg"

  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="imageBox">
      <img
        key={index}
        className="Img"
        src={images[index]}
        alt="member"
      />
    </div>
  )
}
export default Slideup