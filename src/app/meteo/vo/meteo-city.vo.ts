export interface MeteoCity {
    coord: {
        lat: number,
        long: number
    },
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
}