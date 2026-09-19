import React from 'react'
import { Link, useParams } from 'react-router'

const Subscription = () => {

  const param = useParams()
  console.log(param)

  const year = param.yearId

  return (
    <Link
    to={`/year/buy/${year}`}
    className='
    bg-yellow-500    
    text-center
    text-yellow-100
    px-6
    py-3
    rounded-lg
    cursor-pointer
    border
    border-yellow-100
    '
    >
        خرید اشتراک
    </Link>
  )
}

export default Subscription