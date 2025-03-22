import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/index.js";
import "./Texnica.css";
// import Basic from '/src/assets/basik.svg';

const Texnica = () => {
  const [texnica, setTexnica] = useState([]);

  useEffect(() => {
    const getTexnicaData = async () => {
      let { data: texnicaData, error: texnicaError } = await supabase
        .from("texnica")
        .select("*");
      console.log(texnicaData); // Fixed the typo here
      if (texnicaError) {
        console.error("Error fetching data:", texnicaError);
        return;
      }
      setTexnica(texnicaData);
    };
    getTexnicaData();
  }, []);

  if (!texnica.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container" style={{ color: "white", paddingTop: "5%" }}>
      {/*<div style={{ lineHeight: '60px', fontSize: '25px', letterSpacing: '3px' }}>*/}
      {/*    Всего <span style={{*/}
      {/*    fontSize: '40px',*/}
      {/*    color: 'rgba(225, 222, 206, 0.92)',*/}
      {/*}}> 6 шагов, 3 дня</span> и вы <br /> можете <span style={{*/}
      {/*    fontSize: '40px',*/}
      {/*    color: 'rgba(225, 222, 206, 0.92)',*/}
      {/*}}>приступать </span>к <br /><span style={{*/}
      {/*    fontSize: '40px',*/}
      {/*    color: 'rgba(225, 222, 206, 0.92)',*/}
      {/*}}>ремонту</span>*/}
      {/*</div>*/}

      <div className="remontCard">
        {texnica.map((item, index) => (
          <div key={index} className="hover:l">
            {/*<img src={Basic} alt="" />*/}
            <h3>{item?.name}</h3>
            <p>{item?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Texnica;
