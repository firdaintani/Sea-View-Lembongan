import React from 'react'

class RoomDetails extends React.Component{
    state={
        rooms : [
            {
                name : 'Family Room with Sea View',
                desc : 'Family Room with Sea View features one queen bed or two twin beds, safety box, flat screen TV, DVD player, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, terrace with sea view. Room size is 32 Sqm and located on the ground floor with the stair access to the rooms.',
                amenities : ['Free daily bottled water','One queen bed and two twin beds','Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet in each room', 'Bath towel','Terrace with sea and pool views',' Flat screen TV in each room','DVD player','Wardrobe','Ironing facilities', 'Sofa', 'Desk' ]
            },
            {
                name : 'Bunk Bed in 6-Bed Mixed Dormitory',
                desc : 'Bunk Bed in 6-Bed Mixed Dormitory features single bed (twin size bed) on bunk beds, shared bathroom with shower and toilet, soap, bath towel, shared common area. Room size is 40 Sqm and located on the ground floor.',
                amenities : ['single bed (twin size bed) on the bunk bed','Shared bathroom with shower and toilet','Bath towel','Shared common area','Wardrobe']
            },
            {
                name : 'Superior Room with Sea View',
                desc : 'Superior Room with Sea View features one queen bed or two twin beds, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, balcony with sea view. Room size is 24 Sqm and located on the upper floor with the stair access.',
                amenities : ['Free daily bottled water','One queen bed and two twin beds','Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet', 'Bath towel',"Balcony with sea view",' Flat screen TV','DVD player','Wardrobe','Ironing facilities', 'Sofa', 'Desk' ]
            },
            {
                name : 'Deluxe Room with Sea View',
                desc : 'Deluxe Room with Sea View features one queen bed or two twin beds, safety box, flat screen TV, DVD player, en-suite bathroom with shower and toilet, soap and shampoo, bath towel, terrace with sea view. Room size is 24 Sqm and located on the ground floor',
                amenities : ['Free daily bottled water','One queen bed and two twin beds','Minibar refrigerator', 'In room safety box', 'En-suite bathroom with shower and toilet', 'Bath towel',"Terrace with sea view",' Flat screen TV','DVD player','Wardrobe','Ironing facilities', 'Sofa', 'Desk' ]
            }
        ]
    }
    render(){
        return(
            <div>
            {this.props.match.params.roomtype}
            </div>
        )
    }
}

export default RoomDetails