import React from "react";
import styles from "../../../styles/loading_bar.module.css";

interface ISkillPercent {
  name: string;
  percent: number;
}

export default function CircularSkill(props: ISkillPercent) {
  const radius = 15.9155; // Poloměr kruhu
  const circumference = 2 * Math.PI * radius; // Obvod kruhu
  const offset = circumference - (props.percent / 100) * circumference; // Výpočet pro dasharray

  return (
    <div className="flex flex-col items-center my-4">
      <div className={styles.circularChart}>
        <svg viewBox="0 0 36 36" className={styles.circularSkill}>
          <path
            className={styles.circleBg}
            d={`M18 2.0845 a ${radius} ${radius} 0 0 1 0 31.831 a ${radius} ${radius} 0 0 1 0 -31.831`}
          />
          <path
            className={styles.circle}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            d={`M18 2.0845 a ${radius} ${radius} 0 0 1 0 31.831 a ${radius} ${radius} 0 0 1 0 -31.831`}
          />
          <text x="18" y="19" className={styles.percentage}>
            {props.percent}%
          </text>
        </svg>
      </div>
      <div className="mt-2 text-white font-semibold">
        {props.name} {/* Popis dovednosti */}
      </div>
    </div>
  );
}
