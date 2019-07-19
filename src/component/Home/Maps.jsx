import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'

const mapStyles = {
    width: '1200px',
    height: '500px'
}

export class MapContainer extends React.Component {
   

    onMarkerClick = () => {
      
        this.refs.linkMaps.click()
    }

   

    render() {
        return (
            <div>

                {/* <a href='https://www.google.com/maps?q=-8.693754, 115.439387' style={{display:'none'}} target="_blank" ref="linkMaps">aaaa</a> */}
                <a href='https://www.google.com/maps/place/Lembongan+seaview/@-8.6935367,115.4371663,17z/data=!4m8!3m7!1s0x2dd26db86b6b77a5:0x29cbfd955d5709e!5m2!4m1!1i2!8m2!3d-8.6938704!4d115.4394084' style={{ display: 'none' }} target="_blank" ref="linkMaps"></a>

                <Map
                    google={this.props.google}
                    zoom={16}
                    style={mapStyles}
                    initialCenter={{
                        lat: -8.693754,
                        lng: 115.439387
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                  
                    />
                
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCmmrCkXjXCP1Z4L26o2VWTE8L1wnWSFek'
})(MapContainer)