import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Groups from '../../components/groups/Groups'

const Home = () => {

  const {currentUser,logIn,logOut} = useContext(AuthContext)

  

  return (
    <div className='homePage'>
      <Groups/>
    </div>
  )
}

export default Home