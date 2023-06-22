import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './Slider.css'

const Top_Slider = () => {

    const destinations = [
      {
        name: "Ashtanga Yoga",
        image: "https://www.healthifyme.com/blog/wp-content/uploads/2021/01/Yoga-for-Thyroid-1.jpg",
        description: "Ashtanga yoga is a direct offshoot of sage Patanjali’s Yoga Sutras. Famous as the yoga form for weight loss, the ashtanga word is a derivative of the word eight in Sanskrit. ",
        link: "https://en.parisinfo.com/"
      },
      {
        name: "Hatha Yoga",
        image: "https://www.healthifyme.com/blog/wp-content/uploads/2016/12/yb-1.jpg",
        description: "The Sanskrit word Hatha means “force.” Therefore, hatha yoga restores the balance of the body. This type of yoga works on the harmony between the chakras and energy points.",
        link: "https://www.barcelonaturisme.com/wv3/en/"
      },
      {
        name: "Vinyasa Yoga",
        image: "https://www.healthifyme.com/blog/wp-content/uploads/2016/12/yd-1.jpg",
        description: "This form of yoga is also called “flow” yoga. The word “Vinyasa” has two parts, with Vi meaning variation and Nyasa meaning within prescribed limits.",
        link: "http://www.turismoroma.it/?lang=en"
      }
    ];
  
    const renderDestinations = () => {
      return destinations.map((destination) => (
       
        <Carousel.Item key={destination.name}>
          <img
            className="d-block w-100 slider-img"
            src={destination.image}
            alt={destination.name}
          />
          <Carousel.Caption>
            <h3 className="slider-text">{destination.name}</h3>
            <p className="slider-text">{destination.description}</p>
            <a className="slider-text" href={destination.link}>Learn more</a>
          </Carousel.Caption>
        </Carousel.Item>
      ));
    };
  
    return (
      <Carousel>{renderDestinations()}</Carousel>
    );
  };
  
  export default Top_Slider;
