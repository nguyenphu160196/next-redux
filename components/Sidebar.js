import React from 'react'
import {Link, Router} from '../router'
import Auth from '../services/auth'
let auth, role

class SideBar extends React.Component {

  static async getInitialProps({ req }) {
    
  }

  constructor(props){
    super(props);
  }

  state ={
    menuRoute: [
      {
        className: 'dashboard',
        name: 'Dashboard',
        url: '/dashboard',
      },
      {
        className: 'ir',
        name: 'Service Inquiries & Request',
        url: '/ir'
      },
      {
        className: 'notify',
        name: 'Announcements',
        url: '/notify'
      },
      {
        className: 'event',
        name: 'Event',
        url: '/event'
      },
      {
        className: 'tenant',
        name: 'Tenant Directory',
        url: '/tenant'
      },
      {
        className: 'promo',
        name: 'Business Corner',
        url: '/promo'
      },
      {
        className: 'job',
        name: 'Job Corner',
        url: '/job'
      },
      {
        className: 'setting',
        name: 'Setting',
        url: '/setting',
        role: ['admin'],
      },
    ]
  }

  componentDidMount(){
    auth = new Auth()
    auth.getToken()
    role = auth.role()
  }

  checkActive(url) {
    console.log(url)
    let active = false
    let {pathname} = Router
    if(pathname.startsWith(url)) {
      active = true
    }
    if(pathname.startsWith("/new") && pathname.includes(url)) {
      active = true
    }
    return active
  }

  render () {
    const {menuRoute} = this.state;
    return (
      <div className='side-bar'>
        <div className='side-list'>
          {menuRoute.map((k,i) => (
            <span key={i}>
              {!!(!k.role || (!!role && k.role.includes(role.name))) &&
                /*<Link className={this.checkActive(k.url) ? "node-active" : ""} route={k.url} activeClassName={'node-active'}>
                  <div className='side-node'>
                    <div className={'side-icon side-icon-' + k.className}></div>
                    <div className='side-name'><p>{k.name}</p></div>
                  </div>
                </Link>*/
                <div className='side-node'>
                  <div className={'side-icon side-icon-' + k.className}></div>
                  <div className='side-name'><p>{k.name}</p></div>
                </div>
              }
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default SideBar
