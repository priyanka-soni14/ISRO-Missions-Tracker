import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

    const Imgdata=[
        {src:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/chandrayaan-3-pragyan-rover-241137-16x9.jpeg?VersionId=F.NRsCOHG_X7VSwRmQF59ZwtXMPkb2G5&size=690:388", alt:"image1"},
        {src:'https://steamdaily.com/wp-content/uploads/2020/08/resize-159707115020700524231010140119311882328_optimized-1024x686.jpg', alt:'image2'},
        {src:"https://wallpaperaccess.com/full/3517534.jpg" ,alt:'image3'},
    ];

const SlicSlider=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    
    return(
        <>
            <Slider {...settings}>
               {
                Imgdata.map((image,index)=>(
                    <div key={index}>
                    <img className="slic-img" src={image.src} alt={image.alt} />
                    </div>
                ))
               }
            </Slider>
        </>
    )
}
export default SlicSlider;