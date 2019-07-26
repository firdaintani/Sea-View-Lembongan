import React from 'react'
import Carousel from './Carousel'
import '../../support/css/Home.css'
import SliderRoom from './SliderRoom'
import Maps from './Maps'
import {Link} from 'react-router-dom'
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
                        <Link to='/amenities'><p>VIEW ALL</p></Link>

                    </div>
                    <div className="roomHome spaceSubMenu">
                        <p className='title'>Rooms</p>
                        <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                        <Link to='/rooms'><p>VIEW ALL</p></Link>
                        <SliderRoom />
                    </div>
                    <div className='spaceSubMenu'>
                        <p className='title'>Restaurant & Spa</p>
                        <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                        <Link to='/restaurant-spa'><p>VIEW ALL</p></Link>
                        <Maps />
                        <p className="title" style={{ marginTop: '540px' }}> Sea View Lembongan</p>
                    </div>
                    <div>
                        <p className='title'>Reviews</p>
                        <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                        <Link to='/reviews'><p>VIEW ALL</p></Link>
                    </div>
                </center>
            </div>
        )
    }
}
export default Homedesc