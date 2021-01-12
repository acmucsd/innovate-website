import React from 'react';
import './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTools } from '@fortawesome/free-solid-svg-icons';
library.add(faTools);

const Description: React.FC = () => (
  <div className="description" id="description">
    <h2>
      A Community of Innovators <FontAwesomeIcon icon={['fas', 'tools']} size="xs" />{' '}
    </h2>
    <div className="description-content">
      <span className="text">
        We are a sub-org of ACM, and our goal is to create and foster an entrepreneurial and innovative spirit at UC San
        Diego with regard to both new nonprofit and for-profit companies. Our goals are to increase interest in
        startups, make them much more accessible, and bring the innovation spirit and mentality to all aspects of
        members’ careers. <br />
        <br />
        We frequently host activities including, but not limited to, guest speaker talks and workshops, and we have a
        lot of exciting stuff planned in the future! 
        <br/><br/>
        Our events are for people of all skill levels, so whether you're
        just getting into entrepreneurship or are the CEO of a nonprofit, we'd be happy to have you join the ACM
        Innovate community!
      </span>
      {/* <img className="description-image" src={DescriptionImg} alt="It's us!" /> */}
    </div>
  </div>
);

export default Description;
