import React from 'react'

const Profile = ({fullName, Bio, Profession, children, alert}) => {
  return (
    <div>
        <button onClick={() => {alert(fullName)}}>Who am I ?</button>
        <h1>fullName : {fullName}</h1>
        <h1>Bio : {Bio}</h1>
        <h1>Profession : {Profession}</h1>
        <div>
          {children}
        </div>
    </div>
  )
}

export default Profile