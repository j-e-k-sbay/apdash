import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../../../Styles/Sections/AppsScreenshots/Carousel.css"
function CarouselComp(){
    return(
        <div className="carousel-container">
            <Carousel 
                width={"100%"}
                centerMode={true}
                centerSlidePercentage={25}
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
                swipeable={true}
                showArrows={false}
                emulateTouch={true}
                showStatus={false}
                showThumbs={false}
                preventMovementUntilSwipeScrollTolerance={true}
                className="carousel-content"
            >
                <div>
                    <img className="carousel-image" src="/Images/01.jpg" />
                </div>
                <div>
                    <img className="carousel-image" src="/Images/02.jpg" />
                </div>
                <div>
                    <img className="carousel-image" src="/Images/03.jpg" />
                </div>
                <div>
                    <img className="carousel-image" src="/Images/04.jpg" />
                </div> 
                <div>
                    <img className="carousel-image" src="/Images/05.jpg" />
                </div>
                <div>
                    <img className="carousel-image" src="/Images/06.jpg" />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselComp;