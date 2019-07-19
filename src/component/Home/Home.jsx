import React from 'react'
import Carousel from './Carousel'
import '../../support/css/Home.css'
import SliderRoom from './SliderRoom'
import Maps from './Maps'
import { FaPhone, FaMapMarkedAlt, FaMailBulk } from 'react-icons/fa'
class Homedesc extends React.Component {
    render() {
        return (
            <div className="container">
                <Carousel />
                <center>
                    <div className='descriptionHome'>
                        <p className='brandName'>SEA VIEW LEMBONGAN</p>
                        <hr style={{ width: '25%', borderTop: '2px black solid' }}></hr>
                        <p className='description'>Situated in Lembongan in the Bali Region, 1 km from Mushroom Bay, Sea View Lembongan features an outdoor pool and views of the garden. </p>
                        <p>The Sandy Beach Club is 1.5 km away. Free WiFi is available throughout the property.
                        All units include a seating area. A minibar and kettle are also offered. There is a private bathroom with a shower and free toiletries in each unit. Bed linen is featured. </p>
                        <p> Guests can enjoy a drink at the on-site bar. </p>
                        <p> Bike hire is available at the property and the area is popular for snorkelling and diving. The area is popular for fishing and canoeing. Blue Corner is 2.1 km from Darsan Lembongan Boutique Cottage. The nearest airport is Ngurah Rai International Airport, 31 km from the property.
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
                                <FaMapMarkedAlt size={20}/>
                                <hr style={{ width: '10%', borderTop: '2px black solid' }}></hr>
                            </div>
                            <div className="col-md-3 columnContact">
                                <FaMailBulk size={20}/>
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