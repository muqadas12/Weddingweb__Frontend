// import React from 'react'

// function ViewProfile() {
//     return (
//         <div>
//             view profile customer
//         </div>
//     )
// }

// export default ViewProfile
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../ReduxApi/User/userAction'
import { Card } from 'antd';


function ViewProfile ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2 style={{fontWeight:'bold'}}>View profile of users</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => 
          
          <p >
              {user.name}
              {/* <Card title={user.name}  style={{ width: 300,marginLeft:'360px',flexDirection:'row',marginTop:'10px'}}>
      <p>Cases: {user.name} </p>
      <p>Recovered:{user.email}</p>
      <p>Deaths:{user.password}</p>
        </Card>
               */}
             </p>
         

          
          
          )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProfile)