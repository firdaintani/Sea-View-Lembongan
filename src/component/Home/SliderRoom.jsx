import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';
import '../../support/css/SliderRoom.css'
import FamilyRoom from '../../support/img/room/family/family1.JPG'
import BunkBed from '../../support/img/room/hostel/hostel1.png'
import SuperiorRoom from '../../support/img/room/superior/superior1.jpg'

class SliderRoom extends React.Component {
    state = {
        room: [
            { name: 'Family Two-Bedroom with Sea View', picture: FamilyRoom },
            { name: 'Deluxe Room with Sea View', picture: '' },
            { name: 'Superior Room with Sea View', picture: SuperiorRoom },
            { name: 'Bunk Bed in 6-bed Mixed Dormitory', picture: BunkBed },

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
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

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