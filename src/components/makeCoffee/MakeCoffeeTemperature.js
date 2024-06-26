import React from 'react'
import "./MakeCoffeeTemperature.css"
import { CupHot, CupStraw } from "react-bootstrap-icons";

export const MakeCoffeeTemperature = ({isTemperatureSelected, toggleTemperature}) => {
    const temperatureList = {
        Hot: CupHot,
        Cold: CupStraw,
      };
  return (
    <div>
        <div className="temp-heading">
              What kind of coffee do you want?
            </div>
            <div style={{ display: "flex" }}>
              {Object.entries(temperatureList).map(
                ([temperature, IconComponent]) => (
                  <div
                    key={temperature}
                    className={
                      isTemperatureSelected(temperature)
                        ? "temp-button temp-button-selected"
                        : "temp-button"
                    }
                    onClick={() => toggleTemperature(temperature)}
                  >
                    {temperature}
                    <IconComponent className="temp-icon" />
                  </div>
                )
              )}
            </div>
    </div>
  )
}
