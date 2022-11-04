import React from 'react'

const Banner = ({Portada}) => {
  return (
    <> <section>
      
    <div className="bannerini">
      <img src={Portada} alt="" className='banner'/>
    </div>
    <div className="titulo">
      <h1>Descubre nuestros productos</h1>
    </div>
  </section> </>
  )
}

export default Banner