import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import './HousesSearcher.scss'


export const HousesSearcher = ({setSearch}) => {
  const handleChange = (event) =>{
    const {value} = event.target
    setSearch(value);
  }
  const {t} = useContext(MyContext);
  return (
    <div className='searcher__container'>
      {/* <img className='b-icon__searcher' src='search.svg' alt=''></img> */}
      <input  className='b-searcher__houses' type="text" name='nombre' placeholder= {t('Search...')} onChange={handleChange}/>
    </div>
  )
}