import React, { useState } from 'react'
import Doors from '../components/Doors'
import ptr202 from '../assets/door thumnail/PTR 202.png'
import ptr115 from '../assets/door thumnail/PTR 115.png'
import ptr110 from '../assets/door thumnail/ptr110.png'
import ptr20 from '../assets/door thumnail/PTR 20.png'
import ptr20fh from '../assets/door thumnail/ptr20fh.png'
import PTR500 from '../assets/door thumnail/PTR500.png'
import PTR636 from '../assets/door thumnail/PTR636.png'
import PTR99 from '../assets/door thumnail/PTR99.png'
import PTR60 from '../assets/door thumnail/PTR60.png'
import PTR21 from '../assets/door thumnail/PTR21.png'
import PTR55 from '../assets/door thumnail/PTR555.JPG'
import PTR20OUTOPEN from '../assets/door thumnail/PTR20OUT OPEN.png'
import PTR201 from '../assets/door thumnail/PTR201.png'
import PTR30 from '../assets/door thumnail/PTR30.png'
import PTR101 from '../assets/door thumnail/PTR101.png'
import PTR189 from '../assets/door thumnail/PTR189.png'
import PTR75 from '../assets/door thumnail/PTR75.png'
import PTR45 from '../assets/door thumnail/PTR45.png'
import PTR220 from '../assets/door thumnail/PTR220.png'
import Modal from '../components/Modal'


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDoor, setSelectedDoor] = useState(null)

  const handleClick = (door) => {
    setSelectedDoor(door)
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setSelectedDoor(null)
    setIsModalOpen(false)
  }

  
  return (
    <div className="p-5 mx-auto max-w-5xl">
      <div className="grid grid-cols-3 gap-x-10 gap-y-5 bg-blue-100 p-4">
        {/* Row 1 */}
        <Doors onClick={() => handleClick({ name: "P-220", img: PTR220 })} DoorModel="P-220" img={PTR220} />
        <Doors onClick={() => handleClick({ name: "P-45", img: PTR45 })} DoorModel="P-45" img={PTR45} />
        <Doors onClick={() => handleClick({ name: "P-75", img: PTR75 })} DoorModel="P-75" img={PTR75} />

        {/* Row 2 */}
        <Doors onClick={() => handleClick({ name: "P-110", img: ptr110 })} DoorModel="PTR 110" img={ptr110} /> 
        <Doors onClick={() => handleClick({ name: "P-202", img: ptr202 })} DoorModel="PTR 202" img={ptr202} />
        <Doors onClick={() => handleClick({ name: "PTR 115", img: ptr115 })} DoorModel="PTR 115" img={ptr115} />

        {/* Row 3 */}
        <Doors onClick={() => handleClick({ name: "P-20", img: ptr20 })} DoorModel="PTR 20 BH" img={ptr20} />
        <Doors onClick={() => handleClick({ name: "P-500", img: PTR500 })} DoorModel="PTR 500" img={PTR500} />
        <Doors onClick={() => handleClick({ name: "P-20", img: ptr20fh })} DoorModel="PTR 20 FH" img={ptr20fh} />

        {/* Row 4 */}
        <Doors onClick={() => handleClick({ name: "P-636", img: PTR636 })} DoorModel="PTR 636" img={PTR636} />
        <Doors onClick={() => handleClick({ name: "P-60", img: PTR60 })} DoorModel="PTR 60" img={PTR60} />
        <Doors onClick={() => handleClick({ name: "P-99", img: PTR99 })} DoorModel="PTR 99" img={PTR99} />

        {/* Row 5 */}
        <Doors onClick={() => handleClick({ name: "Null", img: null })} DoorModel="Null" />
        <Doors onClick={() => handleClick({ name: "Null", img: null })} DoorModel="Null" />
        <Doors onClick={() => handleClick({ name: "P-21", img: PTR21 })} DoorModel="PTR 21" img={PTR21} />

        {/* Row 6 */}
        <Doors onClick={() => handleClick({ name: "P-55", img: PTR55 })} DoorModel="PTR 55" img={PTR55} />
        <Doors onClick={() => handleClick({ name: "P-20", img: PTR20OUTOPEN })} DoorModel="PTR20OUT OPEN" img={PTR20OUTOPEN} />
        <Doors onClick={() => handleClick({ name: "P-201", img: PTR201 })} DoorModel="PTR 201" img={PTR201} />

        {/* Row 7 */}
        <Doors onClick={() => handleClick({ name: "P-30", img: PTR30 })} DoorModel="PTR 30" img={PTR30} />
        <Doors onClick={() => handleClick({ name: "P-101", img: PTR101 })} DoorModel="PTR 101" img={PTR101} />
        <Doors onClick={() => handleClick({ name: "P-189", img: PTR189 })} DoorModel="PTR 189" img={PTR189} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleClose} door={selectedDoor} />
      )}
    </div>
  )
}

export default Home