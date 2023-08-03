"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import {AiOutlineEdit} from 'react-icons/ai';

const ImageSlider = ({carouselUIConfig, images=[], mode, store}) => {
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
      <div ref={sliderRef} className="relative bg-cover keen-slider x-overflow-auto max-h-40 lg:max-h-[40rem]">
        {images.map((element, index)=>(
          <div className={`keen-slider__slide number-slide${index+1}`} key={index}>
            <img
              src={element.image}
              className="w-full"
            />
            <Link href="/store/category/87878787">
                <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{backgroundColor: "hsla(0,0%,0%,0.2)"}}
                >
                <div className="flex h-full items-center justify-center text-center">
                  <p className={`ttext-${carouselUIConfig.description} opacity-100 sm:w-1/2 text-medium lg:text-6xl lg:w-[30rem]`} 
                 >{element.label}</p> 
                </div>
              </div>
            </Link>
            {mode=="EDIT" &&
                <Link href={`/store/carousel/maintenance/${store}/${element._id}`} className='absolute bottom-10 right-2 bottom-0  overflow-hidden bg-fixed'>
                <AiOutlineEdit
                  className="rounded h-8 w-8 ml-15 bg-white"
                  color="gray"
                />
              </Link>}
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageSlider;