import React from "react";
import Comp from '@/components/TestComponent/Comp'
export default function Styleguide() {

  const handleClick = () => {
    // Push a custom event to the data layer
    window.dataLayer.push({
      event: 'exploreMoreButtonClick',
      buttonLabel: 'Explore More Tattoo',
    });
  
    // Additional button click logic can go here
  };

  
  
  return (
    <div>
      <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <button style={{ background: "red", padding: "10px", color: "#fff" }}>
            App Store
          </button>

          <button
            style={{ background: "#000", padding: "10px", color: "#fff" }}
          >
            play store 
          </button>
        </div>

        
        <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange</p>

        <button onClick={handleClick}>Explore more tattoo</button>;

        <Comp title={'Test'} desrip={'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'} button={"Button stylegudie"}/>



       
      </div>
    </div>
  );
}
