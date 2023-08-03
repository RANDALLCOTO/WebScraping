"use client"
import React, { useEffect } from "react";
const holis = 'bbg-neutral-500';
const colorsName = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const bgSizeColor=[50, 100, 200, 300, 400, 500, 600, 700, 800, 900];


const ColorScheme = ({section, type, currentColor, onSelectedColor}) => {
    useEffect(() => {
        colorsName.forEach(color=>{
          bgSizeColor.forEach(size=>{
              //console.log(`.bfrom-${color}-${size}{ @apply from-${color}-${size};}`);
              //console.log(`.bvia-${color}-${size}{ @apply via-${color}-${size};}`);
              console.log(`.ttext-${color}-${size}{ @apply text-${color}-${size} !important;}`);
          })
        })
      }, [])
  return (
    <div className="fixed bg-opacity-30  top-0 left-0 right-0 z-50 flex flex-col items-center justify-center bg-black p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
    <div className="relative w-full max-w-md max-h-full rounded bg-white">
    <div className="grid grid-cols-3 grid-rows-1 gap-1 w-full p-2"> 
        <button className={`bg-white border rounded text-black ${'white'==currentColor?"bbg-border-black p-1":""}`} onClick={()=>{onSelectedColor(section, type, "white")}}>Blanco</button>   
        <button className={`bg-black border rounded text-white ${'black'==currentColor?"bbg-border-black p-1":""}`} onClick={()=>{onSelectedColor(section, type, "black")}}>Negro</button>   
        <button className={`bg-tranparent border rounded color-black ${'transparent'==currentColor?"bbg-border-black p-1":""}`} onClick={()=>{onSelectedColor(section, type, "transparent")}}>Transparente</button>   
    </div>
    <div className="grid grid-cols-10 grid-rows-21 gap-1 w-full p-2">
        {colorsName.map((color)=>(
            <>
             {bgSizeColor.map((size) => (
                 <button className={`bbg-${color}-${size} h-5 w-5 ${`${color}-${size}`==currentColor?"bbg-border-black p-1":""}`} onClick={()=>{onSelectedColor(section, type, `${color}-${size}`)}}/>   
            ))}         
            </>
        ))}
    </div>
    </div>
    </div>
  );
};

export default ColorScheme;
