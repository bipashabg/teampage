// Services.js
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArrowButton = ({ direction, onClick }) => (
  <div className={`arrow-button ${direction}`} onClick={onClick}>
    {direction === "next" ? <span>&#8594;</span> : <span>&#8592;</span>}
  </div>
);

function Services() {
  let message = `The working of the E-Cell can directly be correlated with that of a startup. Just like any entrepreneurial venture, the E-Cell has no hierarchy, with the Secretary and the Additional Secretaries at the very top to the eager and enthusiastic volunteers from the freshmen year, the workload is quantitatively allocated in a very healthy fashion. The E-Cell not only promotes and nurtures the Entrepreneurship in the campus of IIT Roorkee, it also works diligently towards building an Entrepreneurial mindset among the Students of the Campus.`;

  const teamMembers = [
    {
      id: 1,
      name: 'Chirayu Mor',
      position: 'Secretary',
      bio: 'Honesty and Frankness make you vulnerable, be honest and frank anyways',
      social: {
        twitter: '#',
        pinterest: '#',
        facebook: '#',
      },
      imgSrc: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
    },
    {
      id: 2,
      name: 'Pratyush Mangal',
      position: 'Additional Secretary',
      bio: 'Life is what happens to us while we are making other plans.',
      social: {
        twitter: '#',
        pinterest: '#',
        facebook: '#',
      },
      imgSrc: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
    },
    {
      id: 3,
      name: 'Ishika',
      position: 'Head of Technical Operations',
      bio: 'A well-spent day brings happy sleep.',
      social: {
        twitter: '#',
        pinterest: '#',
        facebook: '#',
      },
      imgSrc: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
    },
    {
      id: 4,
      name: 'Divyanshu Dev',
      position: 'Head of Technical Operations',
      bio: 'Keep calm and carry on.',
      social: {
        twitter: '#',
        pinterest: '#',
        facebook: '#',
      },
      imgSrc: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
    },
    {
      id: 5,
      name: 'Priyanshu Gupta',
      position: 'Head of Design',
      bio: 'The time is always right to do what is right.',
      social: {
        twitter: '#',
        pinterest: '#',
        facebook: '#',
      },
      imgSrc: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
    },
    {
        id: 5,
        name: 'Rishika',
        position: 'Head of Weekly Discussions and Newsletter',
        bio: 'Doing the best at this moment puts you in the best place for the next moment.',
        social: {
          twitter: '#',
          pinterest: '#',
          facebook: '#',
        },
        imgSrc: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
      },
      {
        id: 5,
        name: 'Shubhanshu Shukla',
        position: 'Head of E-club',
        bio: 'Out of difficulties grow miracles.',
        social: {
          twitter: '#',
          pinterest: '#',
          facebook: '#',
        },
        imgSrc: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg',
      },
    
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
  };

  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">The Team Behind E-cell IITR</h2>
            <p className="text-lg text-white">{message}</p>
          </div>

          <Slider {...settings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="team-item">
                <img src={member.imgSrc} className="team-img" alt={member.name} />
                <h3>{member.name}</h3>
                <div className="team-info">
                  <p>{member.position}</p>
                </div>
                <p>{member.bio}</p>
                <ul className="team-icon">
                  <li>
                    <a href={member.social.twitter} className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={member.social.pinterest} className="pinterest">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href={member.social.facebook} className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </Slider>

        </div>
      </div>
    </section>
  );
}

export default Services;
