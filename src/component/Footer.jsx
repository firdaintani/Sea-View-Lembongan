import React from 'react'

import { FaPhone, FaMapMarkedAlt, FaMailBulk } from 'react-icons/fa'
export class Footer extends React.Component{
    render(){
        return(
            <div className='mt-5 container'>
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

        )
    }
}