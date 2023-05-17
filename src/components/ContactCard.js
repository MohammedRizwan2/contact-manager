import React from 'react';
import user from '../images/user.png';
export default function ContactCard(props) {
    const{name,Email}=props.contact;
  return (
    <div className='item'>
    <img className='ui avatar image'src={user} alt='user'/>
    <div className="content">
        <div className="header">{name}</div>
        <div>{Email}</div>
    </div>
<i className='trash  alternate outline icon'style={{color:"blue"}}></i>
</div>
  )
}
