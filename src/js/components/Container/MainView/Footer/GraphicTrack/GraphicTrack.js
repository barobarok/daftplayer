import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../../../../AppContext";

const GraphicTrack = ({}) => {
  const context = useContext(AppContext);

  const trackLength = context.playlist[context.activeSongIndex].time;
  const getRandomInt = (min, max, totalMin, totalMax) => {
    if (max > totalMax) {
      max = totalMax;
    } else {
      max = Math.floor(max);
    }

    if (min < totalMin) {
      min = totalMin;
    } else {
      min = Math.ceil(min);
    }

    return Math.floor(Math.random() * (max - min)) + min;
  };

  useEffect(() => {
    setNewTrack(trackLength);
  }, [context.activeSongIndex]);

  const generateNewRandomCountsList = len => {
    const list = [];
    let lastCount = 30;
    for (let i = 0; i < len; i++) {
      const count = getRandomInt(
        lastCount - 1 - lastCount / 3,
        lastCount + 1 + lastCount / 2,
        20,
        40
      );
      list.push(count);
    }
    return list;
  };
  const [countsList, setCountsList] = useState(
    generateNewRandomCountsList(trackLength)
  );
  const setNewTrack = len => {
    setCountsList(generateNewRandomCountsList(len));
  };

  return (
    <div className="graphicTrack__container">
      {countsList.map((elem, i) => {
        const styles = {
          height: `${elem}px`,
          width: `${trackLength / 100}%`,
          background: i <= 53 ? "#0fd65a" : "#9a9b9b",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%"
        };
        return <div style={styles} key={i} />;
      })}
    </div>
  );
};

export default GraphicTrack;
