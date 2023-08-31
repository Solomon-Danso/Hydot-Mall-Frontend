import React from 'react'
import MenuButtons from './MenuButtons'
import Dashboard from './Dashboard'
import { MainDashboardContainer } from '../Designs/Styles/Styles'
const AdminDashboard = () => {
  return (
    <MainDashboardContainer>

        
        <MenuButtons/>      
        <Dashboard/>
     
    </MainDashboardContainer>
  )
}

export default AdminDashboard