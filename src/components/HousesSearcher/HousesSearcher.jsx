import React from 'react'
import './HousesSearcher.scss'
import search from '../../img/search.png'

export const HousesSearcher = ({setSearch}) => {
  const handleChange = (event) =>{
    const {value} = event.target
    setSearch(value);
  }

  return (
    <div className='searcher__container'>
      <img className='b-icon__searcher' src={search} alt=''></img>
      <input  className='b-searcher__houses' type="text" name='nombre' placeholder='Buscar ...' onChange={handleChange}/>
    </div>
  )
}