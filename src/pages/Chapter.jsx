import React from 'react'
import { useParams } from 'react-router'

const Chapter = () => {

    const param = useParams()
    console.log(param)


  return (
    <div>Chapter</div>
  )
}

export default Chapter