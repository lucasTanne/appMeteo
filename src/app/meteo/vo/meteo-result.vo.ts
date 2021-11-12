import { MeteoCity } from "./meteo-city.vo";
import { MeteoItem } from "./meteo-item.vo";

export interface MeteoResult {
    city : MeteoCity,
    list : Array<MeteoItem>
}