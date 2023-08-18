import React from 'react'
import './sidebar.scss';
import Avatar from '@mui/material/Avatar';


// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import GroupIcon from '@mui/icons-material/Group';
import Logo from '../../assets/imgs/logo.png'; 





const Sidebar = () => {
  return (
    <section class="sidebar">
      <section className="logo top">
         <img src={Logo} alt="Logo de VolunTrack" srcset="" width="160"/>
      </section>
      <section className='avatarSidebar center'>
              <Avatar alt="Joe Doe Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
              <section className="profileName">
                  <h5>Joe Doe</h5>
              </section>

      </section>
      <section className="sidebarList bottom">
            <ul>
                <li>
                  <DashboardIcon/>
                  <span>Home</span>
                </li>
                <li>
                  <GroupIcon/>
                  <span>Users</span>
                </li>
                <li>
                  <ViewKanbanIcon/>
                  <span>Kanban</span>
                </li>
                <li>
                  <CalendarMonthIcon/>
                  <span>Calendar</span>
                </li>
                
            </ul>
      </section>
    </section>
  )
}

export default Sidebar
