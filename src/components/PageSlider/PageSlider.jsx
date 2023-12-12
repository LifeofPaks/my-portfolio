import React, { useContext } from 'react'
import './PageSlider.scss'
import { AppContext } from '../../helpers/ContextApi/AppContext'

const PageSlider = () => {
    const {nextSlide, prevSlide, value} = useContext(AppContext)

  return (
    <div className="slider">
<div className={`leftNav ${value === 0 ? 'inactive' : ''}`} onClick={prevSlide}>
      <div className="imgWraps">
      <img width="16" height="16" src="https://img.icons8.com/metro/26/ffffff/chevron-left.png" alt="chevron-left"/>
      </div>
      <p>Prev Slide</p>
    </div>

    <div className="pageOf">
      <p>{value + 1}</p>/ <div className="hr"></div>
      <p>4</p>
    </div>
    <div className={`rightNav ${value === 3 ? 'inactive' : ''}`} onClick={nextSlide}>
      <p>Next Slide</p>
      <div className="imgWraps">
      <img width="16" height="16" src="https://img.icons8.com/metro/26/ffffff/chevron-right.png" alt="chevron-right"/>
      </div>
    </div>
  </div>
  )
}

export default PageSlider