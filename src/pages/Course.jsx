import React from 'react'

const Course = () => {
  return (
    <div className='flex flex-col'>
      {Array.from({length:45}).map((item,index) => (
        <div key={index}>Course</div>
      ))}
    </div>
  )
}

export default Course