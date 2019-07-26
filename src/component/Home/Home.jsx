import React from 'react'
import Carousel from './Carousel'
import '../../support/css/Home.css'
import SliderRoom from './SliderRoom'
import Maps from './Maps'
import { FaPhone, FaMapMarkedAlt, FaMailBulk } from 'react-icons/fa'
class Homedesc extends React.Component {
    render() {
        return (
            <div className="container" >
                <Carousel />
                <center>
                    <div className='descriptionHome'>
                        <p className='brandName'>SEA VIEW LEMBONGAN</p>
                        <hr style={{ width: '25%', borderTop: '2px black solid' }}></hr>
                        <p className='description'>Sea View Lembongan Cottage and Hostels boast sea view outdoor swimming pool, rooms, and restaurant. Featuring on-site spa with beds and choices of massages. </p>
                        <p>Nusa Penida Island and Nusa Ceningan Island views are visible from the swimming pool and most of the rooms. Sea View Lembongan is situated 1.8km from Yellow Bridge Ceningan, 1.5km from Mushroom Bay, 1.8km from Devil's Tears Bay, and 2.0km from Jungut Batu Harbor
 </p>
                        <p> Two Brothers Restaurant on site provides choices of foods and beverages from local Balinese cuisine to western ones. With the garden, sea view, and breezy ambiance, the Two Brothers Restaurant serves breakfast, lunch, and dinner.

</p>
                        <p> Speedboat and transportation reservation are provided with additional charge. Snorkeling, Diving, Scooter rental, village tour, and many more activities can be booked at the reception desk.

</p>
                    </div>

                    <div className="amenitiesHome spaceSubMenu">
                        <p className='title'>Amenities</p>
                        <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                        <p>VIEW ALL</p>

                    </div>
                    <div className="roomHome spaceSubMenu">
                        <p className='title'>Rooms</p>
                        <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                        <p>VIEW ALL</p>
                        <SliderRoom />
                    </div>
                    <div className='spaceSubMenu'>
                        <p className='title'>Restaurant & Spa</p>
                        <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                        <p>VIEW ALL</p>
                        <Maps />
                        <p className="title" style={{ marginTop: '540px' }}> Sea View Lembongan</p>
                    </div>
                    <div>
                        <p className='title'>Reviews</p>
                        <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                        <p>VIEW ALL</p>
                    </div>
                    <div>
                        <p className='title'>Sea View Lembongan</p>
                        <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                        <div className="row justify-content-center mt-4">
                            <div className="col-md-3 columnContact">
                                <FaPhone size={20} />

                                <hr style={{ width: '10%', borderTop: '2px black solid' }}></hr>
                            </div>
                            <div className="col-md-3 columnContact">
                                <FaMapMarkedAlt size={20} />
                                <hr style={{ width: '10%', borderTop: '2px black solid' }}></hr>
                            </div>
                            <div className="col-md-3 columnContact">
                                <FaMailBulk size={20} />
                                <hr style={{ width: '10%', borderTop: '2px black solid' }}></hr>
                            </div>

                        </div>
                    </div>
                </center>
            </div>
        )
    }
}
export default Homedesc