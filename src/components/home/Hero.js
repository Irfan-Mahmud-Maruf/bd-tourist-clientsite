import React from 'react'
import { Carousel } from 'react-bootstrap'
import slider1 from '../../img/slider-1.jpg'
import slider2 from '../../img/slider-2.jpg'
import slider3 from '../../img/slider-3.jpg'

const Hero = ({ bg, className }) => {
    console.log('Hero: ', bg, className)


    return (
        <>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1>Lets visit The History</h1>
                  <button className='btn btn-secondary'>Visit Now</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h1>We Make Your Journey Safe</h1>
                  <button className='btn btn-secondary'>Order Now</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>Find The Right Place</h1>
                  <button className='btn btn-secondary'>find Now</button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Hero
