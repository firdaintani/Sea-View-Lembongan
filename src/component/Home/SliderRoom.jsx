import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';
import '../../support/css/SliderRoom.css'
import FamilyRoom from '../../support/img/room/family/7.jpeg'
class SliderRoom extends React.Component {
    state = {
        room: [
            { name: 'Family Room', picture: FamilyRoom },
            { name: 'Deluxe', picture: '' },
            { name: 'Superior', picture: '' },
            { name: 'Hostel (Bunk Bed)', picture: '' },

        ]
    }

    renderRoom = () => {
        var room = this.state.room.map((val) => {
            return (
                <div>
                    <Card className="card">
                        <CardImg top width="100%" src={val.picture} className='sliderRoomPicture' alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{val.name}</CardTitle>

                        </CardBody>
                    </Card>
                </div>
            )
        })
        return room
    }
    render() {
      
        const settings = {
            className: "center slides",
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            
        };



        return (
            <div>
               
                <Slider {...settings}>
                    {this.renderRoom()}
                </Slider>
            </div>
        );
    }
}

export default SliderRoom