import React from 'react'
import './CharacterGallery.scss'
import { useNavigate } from 'react-router-dom'


const CharacterGallery = ({character}) => {
const navigate = useNavigate()
const {age} = character

  return (
    <div className='b-father__characters'>
      <div className='b-character__card' onClick={() => navigate(`/character/${character.id}`)}>
          
              <img  className='b-character__img' src={character.imageUrl} alt=''/>
              <div className='b-character-container'>
                
                <h2 className='b-character-name'>{character.fullName}</h2>
              </div>
          
          
      </div>
    </div>
    
  )
}

export default CharacterGallery