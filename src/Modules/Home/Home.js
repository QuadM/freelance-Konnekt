import React, { useEffect, useRef } from "react";

import "./style.css";
import { useMatch } from "react-router-dom";

const Home = () => {
  const headPic = useRef();

  const match = useMatch("/");

  const allHandler = () => {
    if (!match) return;
    onScrollHandler();
  };

  console.log(match);
  const onScrollHandler = () => {
    headPic.current.style.transform =
      "translate(0," + window.scrollY / 10 + "px)";
  };
  const body = document.body;
  body.onscroll = allHandler;
  return (
    <div className="page-container" onScroll={onScrollHandler}>
      <div id="image-container" ref={headPic}></div>
      <div id="section-header" className="light-transparent-background">
        <h1 id="header-konnekt">Konnekt</h1>
      </div>
      {/* 
      <div id="section-three"></div>
      <div id="section-four"></div> */}

      <div className="section-container blue-background">
        <div className="section-content-container">
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
          وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
          المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
          وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
          المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
          وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
          المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
        </div>
      </div>

      <div className="section-container white-background">
        <div className="section-content-container">
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙
          <span className="highlight">
            Konnekt Union team wishing you and your family peace, happiness,
            good
          </span>
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 Konnekt
          Union team wishing you and your family peace, happiness, good health
          and prosperity ahead of Ramadan. Ramadan Mubarak 🌙
        </div>
      </div>

      <div className="section-container blue-background">
        <div className="section-content-container ">
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
          وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
          المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
          وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
          المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
          وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
          المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
        </div>
      </div>
      <div className="section-container white-background">
        <div className="section-content-container">
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙
          <span className="highlight">
            Konnekt Union team wishing you and your family peace, happiness,
            good
          </span>
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 Konnekt
          Union team wishing you and your family peace, happiness, good health
          and prosperity ahead of Ramadan. Ramadan Mubarak 🌙
        </div>
      </div>
      <div className="section-container dark-transparent-background">
        <div className="section-content-container">
          Konnekt Union team wishing you and your family peace, happiness, good
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙
          <span className="highlight">
            Konnekt Union team wishing you and your family peace, happiness,
            good
          </span>
          health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 Konnekt
          Union team wishing you and your family peace, happiness, good health
          and prosperity ahead of Ramadan. Ramadan Mubarak 🌙
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div id="container-1">
//   <div id="section-one">
//     Konnekt Union team wishing you and your family peace, happiness, good
//     health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
//     وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
//     المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
//     Konnekt Union team wishing you and your family peace, happiness, good
//     health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
//     وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
//     المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
//     Konnekt Union team wishing you and your family peace, happiness, good
//     health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
//     وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
//     المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
//   </div>
//   <img
//     style={{
//       zIndex: "2",
//       position: "absolute",
//       left: "0",
//     }}
//     src={img}
//     alt="trying"
//   />
//   <div id="section-two">
//     <div className="section-content">
//       <div id="s2-left">
//         Konnekt Union team wishing you and your family peace, happiness,
//         good health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل
//         عام وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر
//         رمضان المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن
//         والبركات Konnekt Union team wishing you and your family peace,
//         happiness, good health and prosperity ahead of Ramadan. Ramadan
//         Mubarak 🌙 كل عام وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال
//         بمناسبة حلول شهر رمضان المبارك أعاده الله عليكم وعلى وطننا الحبيب
//         بالخير واليمن والبركات Konnekt Union team wishing you and your
//         family peace, happiness, good health and prosperity ahead of
//         Ramadan. Ramadan Mubarak 🌙 كل عام وحضراتكم ومن تحبون بخير وصحة
//         وسعادة وراحة بال بمناسبة حلول شهر رمضان المبارك أعاده الله عليكم
//         وعلى وطننا الحبيب بالخير واليمن والبركات
//       </div>
//       <div id="s2-right"></div>
//     </div>
//   </div>
// </div>
// <div id="container-1">
//   <div id="section-one">
//     <img
//       style={{
//         zIndex: "2",
//         position: "absolute",
//         left: "0",
//       }}
//       src={img}
//       alt="trying"
//     />
//     Konnekt Union team wishing you and your family peace, happiness, good
//     health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
//     وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
//     المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
//     Konnekt Union team wishing you and your family peace, happiness, good
//     health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
//     وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
//     المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
//     Konnekt Union team wishing you and your family peace, happiness, good
//     health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل عام
//     وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر رمضان
//     المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن والبركات
//   </div>
//   <div id="section-two">
//     <div className="section-content">
//       <div id="s2-left">
//         Konnekt Union team wishing you and your family peace, happiness,
//         good health and prosperity ahead of Ramadan. Ramadan Mubarak 🌙 كل
//         عام وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال بمناسبة حلول شهر
//         رمضان المبارك أعاده الله عليكم وعلى وطننا الحبيب بالخير واليمن
//         والبركات Konnekt Union team wishing you and your family peace,
//         happiness, good health and prosperity ahead of Ramadan. Ramadan
//         Mubarak 🌙 كل عام وحضراتكم ومن تحبون بخير وصحة وسعادة وراحة بال
//         بمناسبة حلول شهر رمضان المبارك أعاده الله عليكم وعلى وطننا الحبيب
//         بالخير واليمن والبركات Konnekt Union team wishing you and your
//         family peace, happiness, good health and prosperity ahead of
//         Ramadan. Ramadan Mubarak 🌙 كل عام وحضراتكم ومن تحبون بخير وصحة
//         وسعادة وراحة بال بمناسبة حلول شهر رمضان المبارك أعاده الله عليكم
//         وعلى وطننا الحبيب بالخير واليمن والبركات
//       </div>
//       <div id="s2-right"></div>
//     </div>
//   </div>
// </div>
