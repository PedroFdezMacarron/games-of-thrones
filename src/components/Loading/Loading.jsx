import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import './Loading.scss'

function Loading(promise) {

  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
    {(promiseInProgress) ? <div className='c-load'><div className="lds-dual-ring"></div></div> : null}
    </>
  )
}

export default Loading