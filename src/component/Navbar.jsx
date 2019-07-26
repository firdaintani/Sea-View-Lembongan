import React from 'react';
import '../support/css/Navbar.css'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,  Modal, ModalHeader, ModalBody
} from 'reactstrap';
import {changeMenu} from './../1.action'


class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.toggles = this.toggles.bind(this);
    this.state = {
      isOpen: false,
      prevScrollpos: window.pageYOffset,
      visible: false,
      showMenu: false,
      mediaQuery : null,
      modal: false,
      menuSelected : '',
      optionMenu: [{menu : 'Home', route:'/'},{menu : 'Rooms', route:'/rooms'},{menu : 'Photos', route:'/photos'},{menu : 'Restaurant & Spa', route:'/restaurantspa'},{menu : 'Contact', route:'/contact'},{menu : 'Reviews', route:'/reviews'}]

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggles() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleScroll = () => {
    
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 57 && this.state.mediaQuery) {
      // alert('ada')
      this.setState({ visible: true })
    } else {
      this.setState({ visible: false })
    }
  }
  getMediaQuery=()=>{
    var x = window.matchMedia("(max-width:960px)")
    if(x.matches){
      this.setState({mediaQuery:false})
    }else{this.setState({mediaQuery:true})}
  }


  mediaQueryonResize=()=>{
  
    var x = window.matchMedia("(max-width:960px)")
    if(x.matches){
        this.setState({mediaQuery:false, visible:false})  
    }else{
      if(window.pageYOffset<57){
       // alert('ada trus sejajar scroll')
        this.setState({mediaQuery:true, visible:false})

      }else {
      //  alert('ada trus dibawah scroll')
        this.setState({mediaQuery:true, visible:true})

      }
  
     
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.mediaQueryonResize);
    this.getMediaQuery()

  
  }

  componentWillReceiveProps=(newProps)=>{
    this.setState({menuSelected : newProps.menuSelected})
  }

  
  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.mediaQueryonResize);
  }

  closemodal=(menu)=>{
    this.toggles()
    this.props.changeMenu(menu)
  }

  renderOptionMenu = () => {
    var menu = this.state.optionMenu.map((val) => {
      if (this.props.menuSelected === val.route) {
        return (

          <div className='options'>
            <div>[&nbsp;</div>
            <div>{val.menu}</div>

            <div>&nbsp;]</div>
          </div>
        )
      }



      return (

        <div className='options'>
          <Link to={val.route} onClick={()=>this.closemodal(val.route)} className='optionMenu'><div >{val.menu}</div></Link>
          <div className='leftBracket'>[</div>

          <div className='rightBracket'>]</div>
        </div>
      )

    })

    return menu;
  }

  renderNavbarMenu = () => {
    var menuNavbar = this.state.optionMenu.slice(1, this.state.optionMenu.length)
    var navbarMenus = menuNavbar.map((val) => {
      if (this.props.menuSelected === val.route) {
        return (

          <div className='optionsNavbarMenu'>
            <div>[&nbsp;&nbsp;</div>
            <div>{val.menu}</div>

            <div>&nbsp;&nbsp;]</div>
          </div>
        )
      }
      return (
        <NavItem className='px-3'>
          <div className='optionsNavbarMenu'>
         <Link to={val.route} onClick={()=>this.props.changeMenu(val.route)} className='optionMenu'> <div>{val.menu}</div></Link>
          <div className='leftBracket'>[</div>

          <div className='rightBracket'>]</div>
        </div>
        </NavItem>
      )
    })
    return navbarMenus
  }
  render() {
    return (
      <div>
        <Navbar expand="lg" className="navbar" >
          <NavbarBrand href="/" className='navbar-brand'>Sea View Lembongan</NavbarBrand>
          <div className='navbar-toggler'><NavbarToggler tag='button' onClick={this.toggles}>Menu</NavbarToggler></div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navbarMenu" navbar>
             
              {this.renderNavbarMenu()}

            </Nav>
          </Collapse>
        </Navbar>

        <Navbar light className={`navbar-expand ${this.state.visible ? 'navbar-second' : 'hide-menu'}`} >
          <NavbarBrand href="/">Sea View Lembongan</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
          
            <Nav className="ml-auto">
              <NavItem>
                <NavLink onClick={() => this.setState({ modal: true })} style={{ cursor: 'pointer' }}>Menu</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>



        {/* Modal */}
        <div>
          {/* <Button color="danger" onClick={this.toggles}>klik</Button> */}
          <Modal isOpen={this.state.modal} toggle={this.toggles} size="lg" style={{ maxWidth: '100vw', width: '100%', marginTop: '-9px' }}>
            <ModalHeader toggle={this.toggles}></ModalHeader>
            <ModalBody>

              <center>
                <div className='fontMenu menu'>

                  {this.renderOptionMenu()}
                </div>
                <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                <div> Sea View Lembongan</div>
                <hr style={{ width: '5%', borderTop: '2px black solid' }}></hr>
                <div>+62 822-3739-9739</div>
                <div>Song Lambung Beach</div>
                <div>80771 Nusa Lembongan</div>
                <div>Indonesia</div>
                <div>sutawan@darsanlembongan.com</div>
              </center>

            </ModalBody>

          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuSelected: state.menu.menu
  }
}

export default connect(mapStateToProps, {changeMenu})(NavbarMenu);
