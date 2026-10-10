import React from 'react'

const PanelUser = () => {
  return (
    <div
    className="
    h-screen
    bg-500
    grid
    grid-cols-[5fr_1fr]
    gap-10
    py-10
    px-30
    "
    >

        <div className="
        navbar
        bg-sky-500
        rounded-lg
        "></div>

        <div className="
        content
        bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
        rounded-lg
        "></div>

    </div>
  )
}

export default PanelUser