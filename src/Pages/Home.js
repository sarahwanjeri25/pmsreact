import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Sidenav from './Sidenav';

function Home() {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  return (
    <div>
      <Sidenav />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="https://th.bing.com/th/id/OIP.F5zVJ5gmzRZOrYV82PkEWAHaE8?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Our staff" />
          <Carousel.Caption>
            <h5>Our staff</h5>
            <p>Their expertise and professionalism are commendable</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://th.bing.com/th/id/OIP.4U24swhnIcUOpR-BE8hwtAHaEA?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Our Services" />
          <Carousel.Caption>
            <h5>Our Services</h5>
            <p>Making your well-being our first priority</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://th.bing.com/th/id/OIP.4U24swhnIcUOpR-BE8hwtAHaEA?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Our Equipment" />
          <Carousel.Caption>
            <h5>Our Equipment</h5>
            <p>Medical devices and equipment are essential for diagnosing, treating, and monitoring patients.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
