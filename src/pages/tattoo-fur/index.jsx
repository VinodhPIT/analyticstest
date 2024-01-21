import React from "react";
import Comp from '@/components/TestComponent/Comp'
export default function Furfaren() {
  return (
    <div>
      <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <button style={{ background: "red", padding: "10px", color: "#fff" }} className="hifrom german button">
            App Store
          </button>

          <button
            style={{ background: "#000", padding: "10px", color: "#fff" }}
            className="hifrom german button" >
            play store Store
          </button>
        </div>
      </div>

      
      <p> ISSS simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange</p>
 


       <Comp title={'Testing german page'} desrip={'Hier sind viele Variationen von Passagen von Lorem Ipsum verfügbar, aber die meisten wurden in irgendeiner Form verändert, durch injizierten Humor oder zufällige Wörter, die nicht einmal ansatzweise glaubwürdig aussehen. Wenn Sie'} button={'button german'}/>


       <button >Entdecken Sie mehr Tattoos</button>





       <button style={{ background: "red", padding: "10px", color: "#fff" }} className="onlyAppstore">
            App Store
          </button>

     

    </div>
  );
}
