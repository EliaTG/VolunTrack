import React from 'react'
import './volunteer.scss'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Volunteer = () => {
  return (
    <>
        <section className="cards ">
            <img className='cardImage' src="https://images.unsplash.com/photo-1610093674388-cee0337f2684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
             <Avatar className='avatarCard' alt="Joe Doe Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
             <section className="cardContent">
                    <span className="dateCreated">25 Aug 2023</span>
                    <span className="title">Limpiar la playa de Boca Chica.</span>
                    <Button variant="contained" endIcon={<AddIcon />}>
                        Join
                    </Button>
             </section>
        </section>
        <section className="cards ">
            <img className='cardImage' src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
             <Avatar className='avatarCard' alt="Joe Doe Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
             <section className="cardContent">
                    <span className="dateCreated">25 Aug 2023</span>
                    <span className="title">Clases de tutoría.</span>
                    <Button variant="contained" endIcon={<AddIcon />}>
                        Join
                    </Button>
             </section>
        </section>
        <section className="cards ">
            <img className='cardImage' src="https://images.unsplash.com/photo-1577175889968-f551f5944abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
             <Avatar className='avatarCard' alt="Joe Doe Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
             <section className="cardContent">
                    <span className="dateCreated">28 Aug 2023</span>
                    <span className="title">Apoyo en refugios de animales</span>
                    <Button variant="contained" endIcon={<AddIcon />}>
                        Join
                    </Button>
             </section>
        </section>
        <section className="cards ">
            <img className='cardImage' src="https://images.unsplash.com/photo-1641320201668-1b2bedb4a066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" srcset="" />
             <Avatar className='avatarCard' alt="Joe Doe Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
             <section className="cardContent">
                    <span className="dateCreated">1 Sept 2023</span>
                    <span className="title">Reforestación</span>
                    <Button variant="contained" endIcon={<AddIcon />}>
                        Join
                    </Button>
             </section>
        </section>
        <section className="cards ">
            <img className='cardImage' src="https://images.unsplash.com/photo-1600336153113-d66c79de3e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" srcset="" />
             <Avatar className='avatarCard' alt="Joe Doe Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
             <section className="cardContent">
                    <span className="dateCreated">Now</span>
                    <span className="title">Ayuda en desastres naturales</span>
                    <Button variant="contained" endIcon={<AddIcon />}>
                        Join
                    </Button>
             </section>
        </section>
        <section className="cards ">
            <img className='cardImage' src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" srcset="" />
             <Avatar className='avatarCard' alt="Joe Doe Sharp" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
             <section className="cardContent">
                    <span className="dateCreated">19 Aug 2023</span>
                    <span className="title">Promoción de la salud</span>
                    <Button variant="contained" endIcon={<AddIcon />}>
                        Join
                    </Button>
             </section>
        </section>
    </>
  )
}

export default Volunteer
