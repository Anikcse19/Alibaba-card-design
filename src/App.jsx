import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCrown } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import CardSlider from "./components/CardSlider";

function App() {
  const [count, setCount] = useState(0);

  const allShops = [
    {
      shopName: "Ningbo Weiyi Garments Ltd.",
      id: 0,
      shopImage:
        "https://s.alicdn.com/@sc04/kf/H304079d175be4457acfdab5e90026e46l.png_120x120.png",
      images: [
        {
          image1:
            "https://s.alicdn.com/@sc04/kf/H9f77c45a75114b77a3eb3487604559fdf.jpg_350x350.jpg",
        },
        {
          image2:
            "https://s.alicdn.com/@sc04/kf/H18cdea16061f4eb094043162bc75ea78H.jpg_220x220.jpg",
          image3:
            "https://s.alicdn.com/@sc04/kf/Hba5101a350d640819587096fcd47e9beB.jpg_220x220.jpg",
          image4:
            "https://s.alicdn.com/@sc04/kf/H332828ed67cf43609d6362297c398f65M.jpg_220x220.jpg",
          image5:
            "https://s.alicdn.com/@sc04/kf/H1f45fb628fdc4b3cbbe7e426b479532aL.jpg_220x220.jpg",
        },
      ],
    },

    {
      shopName: "Taian Lianchuang Textile Co., Ltd.",
      id: 1,
      shopImage:
        "https://s.alicdn.com/@sc04/kf/H9ba5d23cabdd4077bcfe129d18988149E.jpg_120x120.jpg",
      images: [
        {},
        {
          image4:
            "https://s.alicdn.com/@sc04/kf/H332828ed67cf43609d6362297c398f65M.jpg_220x220.jpg",
          image5:
            "https://s.alicdn.com/@sc04/kf/H1f45fb628fdc4b3cbbe7e426b479532aL.jpg_220x220.jpg",
        },
      ],
    },
    {
      shopName: "Ideal (zhangjiagang) Int'l Ltd.",
      id: 2,
      shopImage: "https://i.ibb.co/jvsVPGY/unnamed.png",
      images: [
        {},
        {
          image4:
            "https://s.alicdn.com/@sc04/kf/Hd440446451874c108678ac81c918eeacR.jpg_220x220.jpg",
          image5:
            "https://s.alicdn.com/@sc04/kf/Hb388473372204f3a9f256c053ad1d73d6.jpg_220x220.jpg",
        },
      ],
    },
    {
      shopName: "Hangzhou Ciny Fashion Co., Ltd.",
      id: 3,
      shopImage:
        "https://s.alicdn.com/@sc04/kf/Hf3097a51cfe340bba235b03cbabc2fc2L.png_120x120.png",
      images: [
        {},
        {
          image4:
            "https://s.alicdn.com/@sc04/kf/Hdc2dc4094c52484ebd07b4c468a5b845g.jpg_220x220.jpg",
          image5:
            "https://s.alicdn.com/@sc04/kf/H5106d4d1b55642fbb8295ac6f0c1c726I.jpg_220x220.jpg",
        },
      ],
    },
  ];

  return (
    <>
      {/* first card */}
      {allShops.map((allShop) => (
        <div
          key={allShop.id}
          className="w-full mx-auto p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex space-x-2 justify-between">
            <div className="flex space-x-1">
              <div>
                <img src={allShop.shopImage} alt="" className="h-8" />
              </div>
              <div className="flex-col text-left">
                <div>
                  <h4>{allShop.shopName}</h4>
                </div>
                {/* shop details */}
                <div className="flex items-center space-x-1">
                  <div>
                    <FontAwesomeIcon
                      icon={faCrown}
                      style={{ color: "#fad900" }}
                    />
                  </div>
                  <div>
                    <img
                      src="https://s.alicdn.com/@sc01/kf/H62868c75e7eb4fbba8f8eb600d749c2aR.png"
                      alt=""
                      className="h-[10px] w-[50px]"
                    />
                  </div>
                  <div>
                    <p>1 yrs .</p>
                  </div>
                  <div>
                    <p>140+ staff .</p>
                  </div>
                  <div>
                    <p>
                      5,300+m<sup>2</sup> .
                    </p>
                  </div>
                  <div>
                    <p>US $490,000+</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card header -- right portion */}
            <div className="flex space-x-4 items-center mb-3">
              <div>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#bcbec2" }} />
              </div>
              <div>
                <button
                  type="button"
                  className="inline-block rounded-full bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-normal-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Chat Now
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-block rounded-full bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                >
                  Contacts
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-block rounded-full bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                >
                  View profile
                </button>
              </div>
              <div></div>
            </div>
          </div>

          <div className="flex space-x-2 justify-between">
            <div className="flex flex-col space-y-10">
              <div className="flex flex-col text-left my-4">
                <div>
                  <h3 className="text-neutral-500">Ratings & Reviews</h3>
                </div>
                <div>
                  <p>
                    {" "}
                    <b>5.0/5</b>(4 reviews)
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-left text-neutral-500 text-lg ">
                  Capabilities
                </h2>
                <ol className="text-left ms-2 list-disc">
                  <li>
                    <b>ODM service available</b>
                  </li>
                  <li>
                    <b>Full Customization</b>
                  </li>
                  <li>
                    <b>Supplier assessment procedures</b>
                  </li>
                  <li>
                    <b>Finished product</b>
                  </li>
                </ol>
              </div>
            </div>
            <div className="relative">
              <img src={allShop.images[0].image1} alt="" className="h-full" />
              {allShop.images[0].image1 ? (
                <div className="absolute w-full bg-gray-300 bottom-0">$500</div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="relative">
                  <img src={allShop.images[1].image2} alt="" />
                  {allShop.images[1].image2 ? (
                    <div className="absolute w-full bg-gray-300 bottom-0">
                      $100
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative">
                  <img src={allShop.images[1].image3} alt="" />
                  {allShop.images[1].image3 ? (
                    <div className="absolute w-full bg-gray-300 bottom-0">
                      $50
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="relative">
                  <img src={allShop.images[1].image4} alt="" />
                  {allShop.images[1].image4 ? (
                    <div className="absolute w-full bg-gray-300 bottom-0">
                      $60
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative">
                  <img src={allShop.images[1].image5} alt="" />
                  {allShop.images[1].image5 ? (
                    <div className="absolute w-full bg-gray-300 bottom-0">
                      $60
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="w-[20%]">
              <CardSlider />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
