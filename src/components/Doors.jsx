import React from 'react'

const Doors = ({ DoorModel, img, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="bg-blue-700 h-36 flex flex-col items-center justify-center text-white relative overflow-hidden cursor-pointer hover:opacity-80 transition"
    >
      {img && (
        <img 
          src={img} 
          alt={DoorModel} 
          className="max-h-full max-w-full object-contain" 
        />
      )}
      <h2 className="absolute bottom-1 text-sm bg-black/50 px-2 rounded">
        {DoorModel}
      </h2>
    </div>
  )
}

export default Doors
