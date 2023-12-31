// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
import banner1 from "../../../../assets/BannerImg/banner1.png"
// import football from "../../../../assets/BannerImg/football.png"
// import cricket from "../../../../assets/BannerImg/cricket.png"
// import hockey from "../../../../assets/BannerImg/hockey.png"
// import badminton from "../../../../assets/BannerImg/badminton.png"
// import basketball from "../../../../assets/BannerImg/basketball.png"
// import rugby from "../../../../assets/BannerImg/rugby.png"
import Marquee from "react-fast-marquee"
// import { Fade, Slide } from "react-awesome-reveal"

const Banner = () => {

  // const [sliderRef] = useKeenSlider(
  //   {
  //     loop: true,
  //   },
  //   [
  //     (slider) => {
  //       let timeout
  //       let mouseOver = false
  //       function clearNextTimeout() {
  //         clearTimeout(timeout)
  //       }
  //       function nextTimeout() {
  //         clearTimeout(timeout)
  //         if (mouseOver) return
  //         timeout = setTimeout(() => {
  //           slider.next()
  //         }, 2000)
  //       }
  //       slider.on("created", () => {
  //         slider.container.addEventListener("mouseover", () => {
  //           mouseOver = true
  //           clearNextTimeout()
  //         })
  //         slider.container.addEventListener("mouseout", () => {
  //           mouseOver = false
  //           nextTimeout()
  //         })
  //         nextTimeout()
  //       })
  //       slider.on("dragStarted", clearNextTimeout)
  //       slider.on("animationEnded", nextTimeout)
  //       slider.on("updated", nextTimeout)
  //     },
  //   ]
  // )

  return (
    <div>
      <div className="animate__animated animate__fadeInUp animate__slow"><img className="w-full max-h-screen" src={banner1} alt="" /></div>
      <Marquee className="text-blue-600 text-3xl pt-2 pb-3 font-bold z-0 bg-green-100" pauseOnHover={true}>
        ...Are you ready to take your summer camp experience to the next level? Look no further because Sportify Academy is here to make your holidays unforgettable!...
      </Marquee>
    </div>
  );
};

export default Banner;


{/* <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto mb-12 rounded">
  <div className="keen-slider__slide number-slide1"><img className="w-full max-h-screen" src={banner1} alt="" /></div>
  <div className="keen-slider__slide number-slide2"><img className="w-full max-h-screen" src={football} alt="" /></div>
  <div className="keen-slider__slide number-slide3"><img className="w-full max-h-screen" src={basketball} alt="" /></div>
  <div className="keen-slider__slide number-slide4"><img className="w-full max-h-screen" src={hockey} alt="" /></div>
  <div className="keen-slider__slide number-slide5"><img className="w-full max-h-screen" src={rugby} alt="" /></div>
  <div className="keen-slider__slide number-slide6"><img className="w-full max-h-screen" src={badminton} alt="" /></div>
  <div className="keen-slider__slide number-slide7"><img className="w-full max-h-screen" src={cricket} alt="" /></div>
</div> */}