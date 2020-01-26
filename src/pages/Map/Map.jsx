import React, { useEffect, useRef } from "react";
import Mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Routing from "../../components/Routing/Routing";

import { ContextLogin } from "../../store/context/Context";

import "./Map.css";

Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map(props) {
  const mapContainer = useRef(null);
  const { user } = React.useContext(ContextLogin);

  useEffect(() => {
    if (!user.isLoggedIn) return;

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
    user.isLoggedIn && (
      <div className="map__wrap" ref={mapContainer}>
        <div className="map__rout">
          <Routing />
        </div>
      </div>
    )
  );
}

export default Map;
