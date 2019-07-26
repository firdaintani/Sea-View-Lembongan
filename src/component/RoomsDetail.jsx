import React from 'react'
import family from './RoomsPicture/family'
import superior from './RoomsPicture/superior'
import hostel from './RoomsPicture/hostel'
// import familyroom from './RoomsPicture/family'
import {connect} from 'react-redux'
import {changeRoom} from '../1.action'
import '../support/css/RoomsDetail.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  
} from 'reactstrap';

import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
const room_picture = [family, hostel, superior, family]
class RoomDetails extends React.Component {

    state = {
        activeIndex: 0, roomtypes: null, pict: null, getData: false, slides: null,
        rooms: [
            {
                name: 'Family Room with Sea View',
                desc: 'Family Room with Sea View features one queen bed or two twin beds, safety box, flat screen TV, DVD player, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, terrace with sea view. Room size is 32 Sqm and located on the ground floor with the stair access to the rooms.',
                amenities1: ['Free daily bottled water', 'One queen bed and two twin beds', 'Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet in each room'  ],
                amenities2:['Bath towel', 'Terrace with sea and pool views', ' Flat screen TV in each room', 'DVD player'],
                amenities3:['Wardrobe', 'Ironing facilities', 'Sofa', 'Desk'], route : 'family-room'
            },
            {
                name: 'Bunk Bed in 6-Bed Mixed Dormitory',
                desc: 'Bunk Bed in 6-Bed Mixed Dormitory features single bed (twin size bed) on bunk beds, shared bathroom with shower and toilet, soap, bath towel, shared common area. Room size is 40 Sqm and located on the ground floor.',
                amenities1: ['single bed (twin size bed) on the bunk bed', 'Shared bathroom with shower and toilet'],
                amenities2:[ 'Bath towel', 'Shared common area'],
                amenities3:[ 'Wardrobe'], route : 'bunk-bed'
            },
            {
                name: 'Superior Room with Sea View',
                desc: 'Superior Room with Sea View features one queen bed or two twin beds, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, balcony with sea view. Room size is 24 Sqm and located on the upper floor with the stair access.',
                amenities1: ['Free daily bottled water', 'One queen bed and two twin beds', 'Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet'],
                amenities2 :[ 'Bath towel', "Balcony with sea view", ' Flat screen TV', 'DVD player'],
                amenities3:['Wardrobe', 'Ironing facilities', 'Sofa', 'Desk'], route : 'superior-room'
            },
            {
                name: 'Deluxe Room with Sea View',
                desc: 'Deluxe Room with Sea View features one queen bed or two twin beds, safety box, flat screen TV, DVD player, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, terrace with sea view. Room size is 24 Sqm and located on the ground floor',
                amenities1: ['Free daily bottled water', 'One queen bed and two twin beds', 'Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet'],
                amenities2 : ['Bath towel', "Terrace with sea view", ' Flat screen TV', 'DVD player',
                ], amenities3 :[
                    'Wardrobe', 'Ironing facilities', 'Sofa', 'Desk'
                ], route : 'deluxe-room'
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

        this.props.changeRoom(this.state.rooms[type].route)
    }
    componentDidMount = () => {
        if (this.props.match.params.roomtype === 'family-room') {
            
            this.setType(0, room_picture[0])
        } if (this.props.match.params.roomtype === 'deluxe-room') {
            this.setType(3, room_picture[3])
        } else if (this.props.match.params.roomtype === 'superior-room') {
            this.setType(2, room_picture[2])
        } else if (this.props.match.params.roomtype === 'bunk-bed') {
            this.setType(1, room_picture[1])
        }
    }

    renderRoom=()=>{
        var rooms=
            this.state.rooms.map((val, index)=>{
                if (this.props.globalRoom === val.route) {
                    return (
            
                      <div className='options'>
                        <div>[&nbsp;</div>
                        <div>{val.name}</div>
            
                        <div>&nbsp;]</div>
                      </div>
                    )
                  }
            
            
            
                  return (
            
                    <div className='options'>
                      <Link to={val.route} onClick={()=>this.setType(index,room_picture[index])} className='optionMenu'><div >{val.name}</div></Link>
                      <div className='leftBracket'>[</div>
            
                      <div className='rightBracket'>]</div>
                    </div>
                  )
            })

            return rooms
        
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
                            <div>
                                <div className="row d-flex justify-content-between mt-5">
                                    {this.renderRoom()}
                                </div>
                            </div>
                            <Carousel
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                                className='mt-5'
                            >
                                <CarouselIndicators items={this.state.pict} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {this.state.slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                            <div className='mt-5'>
                            <div className='title'>Room Details</div>
                            <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                            <p className='mt-5'>{this.state.rooms[this.state.roomtypes].desc}</p>

                            </div>
                            </center>
                            <div className='mt-5'>
                            <div className='title' style={{textAlign:'center'}}>Amenities</div>
                            
                            <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                            
                            <div className="row">
                                
                                <div className="col-md-4">
                                    {
                                        this.state.rooms[this.state.roomtypes].amenities1.map((val)=>{
                                            return <div>{val}</div>
                                        })
                                    }
                                </div>
                                <div className="col-md-4" style={{borderLeft:'0.5px solid lightgrey'}}>
                                {
                                        this.state.rooms[this.state.roomtypes].amenities2.map((val)=>{
                                            return <div>{val}</div>
                                        })
                                    }
                                    </div>
                                    <div className="col-md-4" style={{borderLeft:'0.5px solid lightgrey'}}>
                                    {
                                        this.state.rooms[this.state.roomtypes].amenities3.map((val)=>{
                                            return <div>{val}</div>
                                        })
                                    }
                                    </div>
                            </div>

                            </div>
                            
                            
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

const mapStateToProps=(state)=>{
    return {
        globalRoom : state.room.room_type
    }
}

export default connect(mapStateToProps,{changeRoom})(RoomDetails)