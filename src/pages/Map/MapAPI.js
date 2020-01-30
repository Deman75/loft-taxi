import Mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export class MapAPI {
  constructor(mapContainer) {
    this.mapContainer = mapContainer;
    this.map = new Mapboxgl.Map({
      container: this.mapContainer.current,
      center: [37.622738, 55.755447],
      zoom: 11,
      style: "mapbox://styles/mapbox/light-v10"
    });
  }

  create() {
    this.map.on("load", () => {
      this.map.setLayoutProperty("country-label", "text-field", [
        "get",
        "name_ru"
      ]);
    });
  }

  remove() {
    this.map.remove();
  }
}

export default MapAPI;
