import React from "react"

import './Slider.scss'

interface SliderProps {
  children: React.ReactNode
  indicate?: boolean
  height?: number
}

interface Status {
  activeSlideIndex: number
  slidesCount: number
}

const Slider: React.FC<SliderProps> = ({
   children ,
   indicate = true,
   height= 340
}) => {
  const [status, setStatus] = React.useState<Status>({ activeSlideIndex: 0, slidesCount: React.Children.count(children) })

  const slides = React.Children.map(children, child => {
    return React.cloneElement(child as React.ReactElement<any>, {
      style: {
        transform: `translateX(-${status.activeSlideIndex}00%)`,
        height
      }
    });
  })

  const circles: JSX.Element[] = []

  const slideTo = (index: number): void => {
    setStatus(prevState => {
      return { ...prevState, activeSlideIndex: index }
    })
  }

  for (let i = 0; i < status.slidesCount; i++) {
    circles.push(<div key={i} onClick={(): void => slideTo(i)} className={i === status.activeSlideIndex ? 'active' : undefined}/>)
  }

  const nextSlide = (): void => {
    if (status.slidesCount - 1  === status.activeSlideIndex) {
      slideTo(0)
      return
    }

    setStatus(prevState => {
      return { ...prevState, activeSlideIndex: status.activeSlideIndex + 1 }
    })
  }

  const prevSlide = (): void => {
    if (status.activeSlideIndex <= 0) {
      slideTo(status.slidesCount - 1)
      return
    }

    setStatus(prevState => {
      return { ...prevState, activeSlideIndex: status.activeSlideIndex - 1 }
    })
  }

  return (
    <div className='dc-slider'>
      <div className="dc-slider__items">
        {slides}
      </div>
      <div className="dc-slider__circles">
        {indicate ? circles : null}
      </div>
      <div className="dc-slider__buttons">
        <button onClick={prevSlide}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.33293 12.9365L16.0132 23.6166C16.2603 23.8638 16.59 24 16.9416 24C17.2932 24 17.623 23.8638 17.87 23.6166L18.6565 22.8303C19.1683 22.3179 19.1683 21.4851 18.6565 20.9735L9.68802 12.005L18.6665 3.02651C18.9135 2.77929 19.0499 2.44974 19.0499 2.09832C19.0499 1.74652 18.9135 1.41696 18.6665 1.16955L17.88 0.383411C17.6327 0.136193 17.3032 1.62228e-07 16.9516 1.62228e-07C16.6 1.62228e-07 16.2702 0.136193 16.0232 0.383411L5.33293 11.0733C5.08533 11.3213 4.94933 11.6524 4.95011 12.0044C4.94933 12.3578 5.08533 12.6887 5.33293 12.9365Z" fill="black"/>
          </svg>
        </button>
        <button onClick={nextSlide}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6671 11.0635L7.98676 0.383412C7.73974 0.136194 7.40999 0 7.05838 0C6.70677 0 6.37702 0.136194 6.13 0.383412L5.34347 1.16975C4.83167 1.68213 4.83167 2.51491 5.34347 3.02651L14.312 11.995L5.33352 20.9735C5.08649 21.2207 4.9501 21.5503 4.9501 21.9017C4.9501 22.2535 5.08649 22.583 5.33352 22.8304L6.12005 23.6166C6.36726 23.8638 6.69682 24 7.04843 24C7.40004 24 7.72979 23.8638 7.97681 23.6166L18.6671 12.9267C18.9147 12.6787 19.0507 12.3476 19.0499 11.9956C19.0507 11.6422 18.9147 11.3113 18.6671 11.0635Z" fill="black"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Slider