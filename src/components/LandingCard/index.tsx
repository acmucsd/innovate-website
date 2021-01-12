import React from 'react';
import leftside from 'assets/left_diamonds.svg';
import rightside from 'assets/right_diamonds.svg';
import './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { siteConfigs } from 'configs';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(faChevronDown);
library.add(fab);

const LandingCard: React.FC = () => {
  return (
    <div className="LandingCard">
      <div className="backdrop-wrapper">
        <img src={leftside} className="backdrop-left" alt="backdrop" />
        <img src={rightside} className="backdrop-right" alt="backdrop" />
        <div className="arrow">
          <div>
            <a color="white" href={siteConfigs.links.discord}>
              join us on <FontAwesomeIcon size="xs" color="white" icon={['fab', 'discord']} />
            </a>
          </div>
          <br></br>
          <FontAwesomeIcon onClick={() => document.getElementById('description')?.scrollIntoView({ behavior: 'smooth' })} style={{cursor: "pointer"}} icon="chevron-down" />
        </div>
        <span className="landing-text">
          <h1 className="landing-title">ACM Innovate</h1>
          <p className="landing-slogan">bringing innovation to every level</p>
        </span>
      </div>
    </div>
  );
};

export default LandingCard;
