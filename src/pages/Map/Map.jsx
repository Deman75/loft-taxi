import React from "react";
import Mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Routing from "../../components/Routing/Routing";

import "./Map.css";

Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends React.Component {
  componentDidMount() {
    this.map = new Mapboxgl.Map({
      container: this.mapContainer,
      center: [37.622738, 55.755447],
      zoom: 11,
      style: "mapbox://styles/mapbox/light-v10"
    });
    this.map.on("load", () => {
      this.map.setLayoutProperty("country-label", "text-field", [
        "get",
        "name_ru"
      ]);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map__wrap" ref={el => (this.mapContainer = el)}>
        <div ref={el => (this.mapContainer = el)} />
        <div className="map__rout">
          <Routing />
        </div>
      </div>
    );
  }
}

export default Map;
