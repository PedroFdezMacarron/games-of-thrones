import React, { useContext } from 'react'
import './SearcherCharacters.scss'
// import search from '../../img/search.png'
import { MyContext } from '../../context/MyContext'

export const SearcherCharacters = ({setSearch}) => {
  const handleChange = (event) =>{
    const {value} = event.target;
    setSearch(value);
  }
  const {t} = useContext(MyContext);
  return (
    <div className='searcher__container'>
      {/* <img className='b-icon__seacher' src={search} alt='search-icon'></img> */}
      <input  className='b-searcher__characters' type="text" name='nombre' placeholder={t('Search...')} onChange={handleChange}/>
    </div>
  )
}