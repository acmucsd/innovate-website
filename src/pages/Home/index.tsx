import React from 'react';
import LandingCard from 'components/LandingCard';
import Description from 'components/Description';
import EventList from 'containers/Events/EventsListContainer';
import NavBar from 'components/NavBar';
import './style.less';
import Team from 'components/Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faCalendarAlt);

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <LandingCard />
      <div className='container'>
        <Description />
        <h2>Upcoming Events <FontAwesomeIcon icon={["fas", "calendar-alt"]} size="xs"/> </h2>
        <p>Join us for socials, guest speakers, and more!</p>
        <EventList limit={4}/>
        <Team/>
      </div>
    </div>
  );
};

export default Home;
