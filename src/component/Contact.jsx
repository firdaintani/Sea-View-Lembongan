import React from 'react'
import '../support/css/Contact.css'
import { Alert } from 'reactstrap';
import Maps from './Home/Maps'
class Contact extends React.Component {
    render() {
        return (
            <div className='container'>
                <p className='title mt-4 mb-3'>Contact</p>
                <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>

                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="row">
                            <p>+63283298362</p>
                        </div>
                        <div className="row">
                            <p>sdsa@lembongan.com</p>
                        </div>
                        <div className="row">
                            <p> Song Lambung Beach
                             80771 Nusa Lembongan
                            Indonesia</p>
                        </div>
                        <div className="row">
                            <Maps components={'contact'}/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <p>Thanks for your interest! Complete the form below to send us your question or comment, and we'll get back to you as soon as possible.</p>

                        <div className="col" style={{ marginBottom: '50px' }}>
                            <div className="row ">
                                <div className="col-6">
                                    <form>
                                        <div>
                                            <label className="type1 desc-type">First Name*</label><br />
                                            <input type="text" id="name" name="name" className='form-input' />
                                        </div>
                                        <div>
                                            <label className="type1 desc-type">Email Address*</label><br />
                                            <input type="text" id="company_name" className='form-input' />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-6">
                                    <form>
                                        <div>
                                            <label className="type1 desc-type">Last Name*</label><br />
                                            <input type="text" id="email" className='form-input' />
                                        </div>
                                        <div>
                                            <label className="type1  desc-type">Phone</label><br />
                                            <input type="number" id="phone_number" className='form-input' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label htmlFor="exampleFormControlTextarea1" className="type1 desc-type">Comment*</label><br />
                                        <textarea rows={7} id="message" defaultValue={""} className='form-input' />
                                    </div>
                                </div>
                            </div>
                            <Alert color="warning">
                                Note: Don't disclose any additional personal or payment information in your request
      </Alert>
                            <div>

                            </div>
                            <center>
                                <input type='button' className='btn btn-info' value='SUBMIT' />

                            </center>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Contact