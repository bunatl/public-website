// Custom build of React simple maps: https://www.react-simple-maps.io/

import React, { memo } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// country ISO codes: https://www.iban.com/country-codes
const visitedCountries = [
    // europe
    "PRT", "ESP", "LUX", "FRA", "GBR", "ITA", "BEL", "NLD", "DEU", "AUT", "CZE", "POL", "SVK", "HUN", "HRV", "MNE", "ALB", "MKD", "-99", "GRC", "BGR", "ROU", "UKR", "LTU", "LVA", "DNK", "NOR",
    // asia
    "IND", "CHN", "THA", "SGP", "LAO", "MYS", "PHL", "TWN", "KOR", "JPN",
    // africa
    "MAR",
    // middle-east
    "ISR", "PSE"
];

const MapChart = ({ setTooltipContent }) => {
    const setCountryColor = (country) => {
        // home country will have specific color
        if (country.properties.ISO_A3 === "CZE")
            return "#093b70";
        return visitedCountries.includes(country.properties.ISO_A3) ? "#0d9c9f" : "#EAEAEC";
    };

    // no border around countries + color fill on hover
    const noWrapBorder = {
        default: {
            outline: 'none'
        },
        hover: {
            fill: "#0d779f",
            outline: 'none'
        },
        pressed: {
            outline: 'none'
        }
    };

    return (
        <>
            <ComposableMap
                data-tip=""
                projection="geoMercator"
                projectionConfig={ {
                    rotate: [ 0, 0, 0 ],
                    scale: 175,
                } }
            >
                <ZoomableGroup center={ [ 60, 40 ] } zoom={ 1 }>
                    <Geographies geography={ geoUrl }>
                        { ({ geographies }) =>
                            geographies
                                .map(geo => (
                                    <Geography
                                        key={ geo.rsmKey }
                                        geography={ geo }
                                        fill={ setCountryColor(geo) }
                                        stroke="#A9A9A9"
                                        onMouseEnter={ () => {
                                            setTooltipContent(geo.properties.NAME);
                                        } }
                                        onMouseLeave={ () => {
                                            setTooltipContent("");
                                        } }
                                        style={ noWrapBorder }
                                    />
                                ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
