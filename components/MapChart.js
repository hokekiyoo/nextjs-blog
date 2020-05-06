import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip } from "@material-ui/core";
import Link from "next/link";
import { Category } from "@material-ui/icons";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = (props) => {
  const article_meta_data = props.data;
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#ffccbc",
                      outline: "none",
                    },
                    hover: {
                      fill: "#ffab91",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {article_meta_data.map(
            ({ id, date, category, title, long, lati, s_year, e_year, place }) => {
              long = parseFloat(long);
              lati = parseFloat(lati);
              if (category === "history") {
                return (
                  <Marker key={id} coordinates={[long, lati]} fill="#42a5f5">
                    <Link href="/posts/[id]" as={`/posts/${id}`}>
                      <Tooltip title={`${place}:${title}`} arrow>
                        <circle
                          r={6}
                          fill="#42a5f5"
                          stroke="#fff"
                          strokeWidth={2.5}
                        />
                      </Tooltip>
                    </Link>
                  </Marker>
                );
              }
            }
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
