"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const ImageSlider = () => {
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
          }, 1500)
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
    <>
      <div ref={sliderRef} className="keen-slider  x-overflow-auto max-h-96">
        <div className="keen-slider__slide number-slide1">
          <img
            src="https://img.freepik.com/free-photo/white-wedding-arrangement-with-copy-space_23-2148243968.jpg"
            className="w-full"
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          {" "}
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default ImageSlider;