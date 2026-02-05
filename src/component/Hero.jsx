import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center  gap-20 items-center m-10 p-5 ">
        <div className="card  lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              className="w-80 h-80"
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="card card-sm bg-base-200 max-w-60 shadow">
            <figure className="hover-gallery">
              <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
              <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
              <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
              <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                daisyUI Hat
                <span className="font-normal">$25</span>
              </h2>
              <p>High Quality classic cap hat with stitch logo</p>
            </div>
          </div>
        </div>
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
      <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
        {/* content */}
        <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body">
            <div className="flex justify-between mb-10">
              <div className="font-bold">BANK OF LATVERIA</div>
              <div className="text-5xl opacity-10">❁</div>
            </div>
            <div className="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs opacity-20">CARD HOLDER</div>
                <div>VICTOR VON D.</div>
              </div>
              <div>
                <div className="text-xs opacity-20">EXPIRES</div>
                <div>29/08</div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </>
  );
}
