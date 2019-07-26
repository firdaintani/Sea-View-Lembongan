import React from 'react'
import FamilyRoom from '../support/img/room/family/family1.JPG'
import BunkBed from '../support/img/room/hostel/hostel1.png'
import SuperiorRoom from '../support/img/room/superior/superior1.jpg'
import '../support/css/Rooms.css'
import { Link } from 'react-router-dom'
import { IoIosInformationCircle } from 'react-icons/io'
// import RoomsDetail from './RoomsDetail'
class Rooms extends React.Component {
    state = {
        rooms: [
            { name: 'Family Two-Bedroom with Sea View', picture: FamilyRoom, route: 'family-room' },
            { name: 'Deluxe Room with Sea View', picture: '', route: 'deluxe-room' },
            { name: 'Superior Room with Sea View', picture: SuperiorRoom, route: 'superior-room' },
            { name: 'Bunk Bed in 6-bed Mixed Dormitory', picture: BunkBed, route: 'bunk-bed' },
        ]
    }
   

    renderRoom = () => {
        var rooms = this.state.rooms.map((val) => {
            return (
                <div className="col-lg-6 col-md-12 col-rooms mt-3">
                    <div className='mx-2'>
                        <div>
                            <Link to={'/rooms/' + val.route}><img src={val.picture} className='img-rooms'></img>
                            </Link></div>
                        <Link to={'/rooms/' + val.route}><div className='mt-3 text-rooms'>
                            {val.name}
                        </div></Link>
                        <Link to={'/rooms/' + val.route}>
                            <div className='mt-4' style={{ color: 'blue' }}>
                                <IoIosInformationCircle /><br></br>
                                More info
                        </div></Link>
                        <hr ></hr>

                    </div>
                </div>
            )
        })
        return rooms
    }
    render() {
        return (
            <div>
                <div className="container">
                    <center>
                        <p className='title mt-4 mb-4'>Rooms</p>
                        <hr style={{width:'5%', borderTop:'2px black solid'}}></hr>
                        <div className="row mt-5">
                            {this.renderRoom()}
                        </div>
                    </center>
                </div>
            </div>
        )
    }
}
export default Rooms