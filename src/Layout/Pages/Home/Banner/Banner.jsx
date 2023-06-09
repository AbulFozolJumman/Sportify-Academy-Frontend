import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import banner1 from "../../../../assets/banner1.png"
import football from "../../../../assets/football.png"
import cricket from "../../../../assets/cricket.png"
import hockey from "../../../../assets/hockey.png"
import badminton from "../../../../assets/badminton.png"
import basketball from "../../../../assets/basketball.png"
import rugby from "../../../../assets/rugby.png"

const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

    return (
        <div>
            <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto">
                <div className="keen-slider__slide number-slide1"><img className="w-full max-h-screen" src={banner1} alt="" /></div>
                <div className="keen-slider__slide number-slide2"><img className="w-full max-h-screen" src={football} alt="" /></div>
                <div className="keen-slider__slide number-slide3"><img className="w-full max-h-screen" src={basketball} alt="" /></div>
                <div className="keen-slider__slide number-slide4"><img className="w-full max-h-screen" src={hockey} alt="" /></div>
                <div className="keen-slider__slide number-slide5"><img className="w-full max-h-screen" src={rugby} alt="" /></div>
                <div className="keen-slider__slide number-slide6"><img className="w-full max-h-screen" src={badminton} alt="" /></div>
                <div className="keen-slider__slide number-slide7"><img className="w-full max-h-screen" src={cricket} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;