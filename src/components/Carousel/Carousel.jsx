// import logo from './logo.svg';
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
export default function CarouselComponent() {
  return (
    <div className="carousel-component">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="image"
            src="../../assets/banner1.jpg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="../../assets/banner2.jpg"
            alt="Second slide"
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="../../assets/banner3.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="../../assets/banner4.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="../../assets/banner5.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="../../assets/banner6.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
