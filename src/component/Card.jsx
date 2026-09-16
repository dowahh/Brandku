import { useEffect } from "react";
import { getData } from "../api/getData";

function Card({ icon, title, subtitle }) {
  console.log(icon, title, subtitle);

  useEffect (() => {
    const data = getData();
    console.log(data, 'data');
  },);

  return (
    <div>
      <div className="border-2 border-slate-400 p-4">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;