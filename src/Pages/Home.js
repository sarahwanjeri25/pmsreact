import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Sidenav from './Sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

// import Sidenav from './Sidenav';

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
        <Carousel.Caption 
        >
         <h3>Our Staff</h3>
         <p>Our staff is dedicated to providing the best service possible.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://th.bing.com/th/id/OIP.4U24swhnIcUOpR-BE8hwtAHaEA?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Our Services"/>
        <Carousel.Caption>
           <h3>Our Services</h3>
           <p>We offer a wide range of services to cater to your needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://th.bing.com/th/id/OIP.4U24swhnIcUOpR-BE8hwtAHaEA?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Our Equipment" />
        <Carousel.Caption>
         <h3>Our Equipment</h3>
         <p>Our equipment is state of the art and well maintained.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      <div className='About_us'>
        <h1 >About Us</h1>
        <h3>Welcome To DocStop</h3>
        <p>At Our Healthcare Center, we are dedicated to providing compassionate and comprehensive medical care to our community. Our team of experienced doctors, nurses, and support staff work tirelessly to ensure the well-being of our patients.</p>

        <h3 >Our Mission</h3>
        <p>Our mission is simple: to improve lives through exceptional healthcare. We believe that everyone deserves access to high-quality medical services, and we strive to make a positive impact on the health and happiness of our patients.</p>

        <h3 >What Sets Us Apart</h3>
        <ul>
          <li>Expertise: Our board-certified physicians specialize in various fields, from pediatrics to geriatrics. We stay up-to-date with the latest medical advancements to offer the best care possible.</li>
          <li>Personalized Approach: We understand that each patient is unique. That’s why we take the time to listen, answer questions, and tailor treatment plans to individual needs.</li>
          <li>State-of-the-Art Facilities: Our modern facilities are equipped with advanced technology, ensuring accurate diagnoses and effective treatments.</li>
          <li>Community Involvement: We actively participate in health awareness campaigns, workshops, and community events. Our commitment extends beyond our clinic walls.</li>
          </ul>

          <h6>Thank you for choosing Our Healthcare Center. We look forward to serving you and your loved ones.</h6>
      </div>
        
    </div>
  );
}

export default Home;

{/* <img src="https://th.bing.com/th/id/OIP.F5zVJ5gmzRZOrYV82PkEWAHaE8?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Our staff" />
            <h5>Our staff</h5>
            <p>Their expertise and profe<ssionalism are commendable</p> */}

            // <img src="https://th.bing.com/th/id/OIP.4U24swhnIcUOpR-BE8hwtAHaEA?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Our Services" />
            // <h5>Our Services</h5>
            // <p>Making your well-being our first priority</p>

            // <img src="https://th.bing.com/th/id/OIP.4U24swhnIcUOpR-BE8hwtAHaEA?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Our Equipment" />
            // <h5>Our Equipment</h5>
            // <p>Medical devices and equipment are essential for diagnosing, treating, and monitoring patients.</p>