import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Castle_carousel = ({ vendor }) => {
    return (
        <div>

            <Carousel>
                <div>
                    <img src={vendor?.imgsrc}
                    />
                </div>
                {/* { vendor?.map((item)=>{
                return (
                <div>   
                    {item.imgsrc}
                    <img src={item.imgsrc} className="img-fluid" alt="" />
                </div>
                )
            }) } */}

                {/* <div>   
                    <img src="../assests/castle/Rectangle 267.svg" 
                    />
                </div> 
                <div>   
                    <img src="../assests/castle/Rectangle 267.svg" 
                    />
                </div>
                 <div>   
                    <img src="../assests/castle/Rectangle 267.svg" 
                    />
                </div>
                 <div>   
                    <img src="../assests/castle/Rectangle 267.svg" 
                    />
                </div> 
                <div>   
                    <img src="../assests/castle/Rectangle 267.svg" 
                    />
                </div> 
                <div>   
                    <img src="../assests/castle/Rectangle 267.svg" 
                    />
                </div>
                 <div>   
                    <img src="../assests/castle/Rectangle 267.svg" 
                    />
                </div>
                
                <div>   
                    <img src="../assests/asthetical/temp2.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp3.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp4.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp5.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp6.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp3.svg"/>
                </div> */}
            </Carousel>
        </div>
    )
}

export default Castle_carousel