import React from 'react'

const Video = ({video}) => {

    if (!video) {
        return <p>یه ویدیو انتخاب کن گل تپلی</p>
    }
  return (

        <video src={video.vid}  controls className="w-full rounded-lg"/>

  )
}

export default Video