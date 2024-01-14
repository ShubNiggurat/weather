enum windDirections {
    SOUTH = "S",
    NORTH = "N",
    WEST = "W",
    EAST = "E",
    NORTHEAST = "NE",
    SOUTHEAST = "SE",
    SOUTHWEST = "SW",
    NORTHWEST = "NW",
    SOUTHSOUTHWEST = "SSW",
    WESTSOUTHWEST = "WSW",
    WESTNORTHWEST = "WNW",
    NORTHNORTHWEST = "NNW",
    NORTHNORTHEAST = "NNE",
    EASTNORTHEAST = "ENE",
    EASTSOUTHEAST = "ESE",
    SOUTHSOUTHEAST = "SSE"
}

enum typeWeatherDataRequest {
    CURRENT = "current",
    FORECAST = "forecast",
    FUTURE = "future",
    HISTORY = "history",
    MARINE = "marine",
    SEARCH = "search",
    IP = "ip",
    TIMEZONE = "timezone",
    ASTRONOMY = "astronomy"
}

export {windDirections, typeWeatherDataRequest};