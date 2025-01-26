import React from "react";

function Work() {
  var images = [
    {
      url: "../src/assets/634ef09178195ce0073e38f3_Refokus Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "../src/assets/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "../src/assets/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "../src/assets/634ef0accfe1b3e66bc55462_Refokus Tools.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "../src/assets/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "../src/assets/634ef0af108a465002975acd_Showcase Websites (1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];

  return (
    <div className="w-full">
      <div className=" relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw]  leading-none tracking-tight font-medium select-none">
          Work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map((item,index)=>item.isActive && (<img
                style={{
                  top: item.top,
                  left: item.left,
                  translate: "-50% -50%",
                }}
                className="absolute w-50 rounded-md"
                src={item.url}
                alt=""
              />))}
        </div>
      </div>
    </div>
  );
}

export default Work;
