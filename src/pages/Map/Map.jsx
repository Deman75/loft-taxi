import React, { useEffect, useRef } from "react";
import Routing from "../../components/Routing/Routing";
import MapAPI from "./MapAPI";

import "./Map.css";

function Map(props) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const mapAPI = new MapAPI(mapContainer);
    mapAPI.create();

    return () => {
      mapAPI.remove();
    };
  }, []);

  return (
    <div className="map__wrap" ref={mapContainer}>
      <div className="map__rout">
        <Routing />
      </div>
    </div>
  );
}

export default Map;
