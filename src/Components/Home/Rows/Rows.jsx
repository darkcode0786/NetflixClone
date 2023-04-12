import React from 'react'
const imgUrl = "https://image.tmdb.org/t/p/original";
const Card = ({ img }) => (
  <img className='card' src={img} alt="cover" />
)
const Rows = ({ title, arr = [] }) => {
  return (
    <div className='rows'>
      <h2>{title}</h2>
      <div>{
        arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />

        ))}
      </div>

    </div>
  )
}

export default Rows
