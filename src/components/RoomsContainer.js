import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

const RoomsContainer = ({context}) => {
  const { loading, sortedRooms, rooms } = context
  console.log(context)
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  )
}

export default withRoomConsumer(RoomsContainer)





// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {
//           const { loading, sortedRooms, rooms } = value
//           if (loading) {
//             return <Loading />
//           }
          
//           return (
//             <div>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//           )
//         }
//       }
//     </RoomConsumer>
//   )
// }

// export default RoomsContainer
