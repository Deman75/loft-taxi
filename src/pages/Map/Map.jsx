import React, { useEffect, useRef } from "react";
import Mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Routing from "../../components/Routing/Routing";

import "./Map.css";

Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map(props) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new Mapboxgl.Map({
      container: mapContainer.current,
      center: [37.622738, 55.755447],
      zoom: 11,
      style: "mapbox://styles/mapbox/light-v10"
    });
    map.on("load", () => {
      map.setLayoutProperty("country-label", "text-field", ["get", "name_ru"]);
    });

    return () => {
      map.remove();
    };
  });

  return (
    <div className="map__wrap" ref={mapContainer}>
      <div className="map__rout">
        <Routing />
      </div>
    </div>
  );
}

export default Map;
