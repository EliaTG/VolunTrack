import React from 'react'
import './list.scss'

// Component 
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
// import TableComp from '../../components/table/TableComp';


const List = () => {
  return (
    <section className='list'>
        <Sidebar/>
        <section className="listContainer">
          <Navbar/>
          <Datatable/>
        </section>
    </section>
  )
}

export default List
