import React from 'react'
import family from './RoomsPicture/family'
import superior from './RoomsPicture/superior'
import hostel from './RoomsPicture/hostel'
// import familyroom from './RoomsPicture/family'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  
} from 'reactstrap';
import Loader from 'react-loader-spinner'

class RoomDetails extends React.Component {

    state = {
        activeIndex: 0, roomtypes: null, pict: null, getData: false, slides: null,
        rooms: [
            {
                name: 'Family Room with Sea View',
                desc: 'Family Room with Sea View features one queen bed or two twin beds, safety box, flat screen TV, DVD player, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, terrace with sea view. Room size is 32 Sqm and located on the ground floor with the stair access to the rooms.',
                amenities: ['Free daily bottled water', 'One queen bed and two twin beds', 'Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet in each room', 'Bath towel', 'Terrace with sea and pool views', ' Flat screen TV in each room', 'DVD player', 'Wardrobe', 'Ironing facilities', 'Sofa', 'Desk']
            },
            {
                name: 'Bunk Bed in 6-Bed Mixed Dormitory',
                desc: 'Bunk Bed in 6-Bed Mixed Dormitory features single bed (twin size bed) on bunk beds, shared bathroom with shower and toilet, soap, bath towel, shared common area. Room size is 40 Sqm and located on the ground floor.',
                amenities: ['single bed (twin size bed) on the bunk bed', 'Shared bathroom with shower and toilet', 'Bath towel', 'Shared common area', 'Wardrobe']
            },
            {
                name: 'Superior Room with Sea View',
                desc: 'Superior Room with Sea View features one queen bed or two twin beds, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, balcony with sea view. Room size is 24 Sqm and located on the upper floor with the stair access.',
                amenities: ['Free daily bottled water', 'One queen bed and two twin beds', 'Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet', 'Bath towel', "Balcony with sea view", ' Flat screen TV', 'DVD player', 'Wardrobe', 'Ironing facilities', 'Sofa', 'Desk']
            },
            {
                name: 'Deluxe Room with Sea View',
                desc: 'Deluxe Room with Sea View features one queen bed or two twin beds, safety box, flat screen TV, DVD player, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, terrace with sea view. Room size is 24 Sqm and located on the ground floor',
                amenities: ['Free daily bottled water', 'One queen bed and two twin beds', 'Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet', 'Bath towel', "Terrace with sea view", ' Flat screen TV', 'DVD player', 'Wardrobe', 'Ironing facilities', 'Sofa', 'Desk']
            }
        ]
    }
    onExiting=()=> {
        this.animating = true;
      }
    
      onExited=()=> {
        this.animating = false;
      }
    
      next=()=> {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.pict.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous=()=> {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.pict.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex=(newIndex)=> {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    

    setType = (type, picture) => {
        const slides = picture.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item}
                >
                    <img src={item} className='img-carousel' alt={'room pciture'} />
                 
                </CarouselItem>
            );
        });
        this.setState({ getData: true, roomtypes: type, pict: picture, slides })

    }
    componentDidMount = () => {
        if (this.props.match.params.roomtype === 'family-room') {
            this.setType(0, family)
        } if (this.props.match.params.roomtype === 'deluxe-room') {
            this.setType(3, family)
        } else if (this.props.match.params.roomtype === 'superior-room') {
            this.setType(2, superior)
        } else if (this.props.match.params.roomtype === 'bunk-bed') {
            this.setType(1, hostel)
        }
    }
    render() {
        const { activeIndex } = this.state;



        return (
            <div>

                {
                    this.state.getData ?
                        <div className='container'>
                            <center>
                                <div className='title mt-5'> {this.state.rooms[this.state.roomtypes].name}</div>
                                <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                            </center>
                            <Carousel
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                            >
                                <CarouselIndicators items={this.state.pict} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {this.state.slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                        
                        </div>
                        :
                        <div>
                            <center>
                                <Loader
                                    type="ThreeDots"
                                    color="#000000"
                                    height="300"
                                    width="300"
                                />
                            </center>
                        </div>
                }

            </div>
        )
    }
}

export default RoomDetails