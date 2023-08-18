import React from 'react'
import './home.scss'
import Button from '@mui/material/Button';
// Icons
import AddIcon from '@mui/icons-material/Add';

// Component 
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Volunteer from '../../components/volunteerJob/Volunteer';
import TableComp from '../../components/table/TableComp';


const Home = () => {
  return (
    <section class="homeSection">
        <Sidebar/>
        <section className="homeContainer">
          <Navbar/>
          <section className="topHome">
              <h2 className='h2Greetings'>Hi, Welcome back</h2>
              <section className="createEvent">
                  <Button variant="contained" endIcon={<AddIcon />}>
                                Create an Event
                  </Button>
              </section>
          </section>
          <div className="volunteerJob">
              <Volunteer/>
          </div>
          <TableComp/>
        </section>
    </section>
  )
}

export default Home;  
