import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'

const Button = ({opcion}) => {
    const {t,number,setNumber} = useContext(MyContext)
  return (
    <>
        {opcion === 'add' &&<div onClick={()=>setNumber(number + 1)}>{t(opcion)}</div>}
        {opcion === 'sub' &&<div onClick={()=>setNumber(number - 1)}>{t(opcion)}</div>}
    </>
  )
}

export default Button