import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/index.js";

const Successful = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let { data, error } = await supabase.from("successful").select("*");

      if (error) {
        console.error("Ошибка при загрузке данных:", error);
        return;
      }

      setProjects(data);
    };

    getData();
  }, []);

  if (projects.length === 0) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h1 className="h1">Более 900 успешных проектов</h1>
      <div className="container flex flex-wrap gap-y-[43px] pt-[25px] justify-between">
        {projects.map((el) => (
          <div key={el.id}>
            <img src={el.img} alt={el.name} className="img pb-3" />
            <h1 className="name mb-2">{el.name}</h1>
            <div className="desc">{el.text}</div>
          </div>
        ))}
      </div>
      <div className="buttons pd-[40px]">
        <button style={{ marginLeft: "-10px" }}>Жилые помещения</button>
        <button style={{ padding: "23px 33px" }}>Коммерческие помещения</button>
      </div>
    </div>
  );
};

export default Successful;
