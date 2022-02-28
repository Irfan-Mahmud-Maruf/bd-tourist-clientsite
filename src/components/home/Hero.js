import React from 'react'

const Hero = ({ bg, className }) => {
    console.log('Hero: ', bg, className)


    return (
        <>
            <section className="be-home-hero ">
                <div className="bg" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/04/24/14/03/map-4152197_960_720.jpg)'}}>
                </div>
            </section>
        </>
    )
}

export default Hero
