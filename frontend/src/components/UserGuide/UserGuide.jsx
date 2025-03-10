import React, { useState } from "react";
import Joyride from "react-joyride";
import "./UserGuide"

const UserGuide = () => {
  const [runTour, setRunTour] = useState(true); // Tour starts automatically

  const steps = [
    {
      target: "#sign-in",
      content: "Sign in to our website",
      placement: "bottom", // Adjust tooltip position to avoid overlap
    },
    {
      target: "#user-cart",
      content: "This is your cart",
      placement: "right", // Position tooltip to the right
    },
    {
      target: ".add",
      content: "Adds the item to the cart",
      placement: "bottom",
    },
  ];

  return (
    <div>
      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          options: {
            zIndex: 1200,
            tooltipPadding: "15px",
            tooltipBackgroundColor: "white",
            primaryColor: "#007bff", // Customize button color
          },
          buttonSkip: {
            color: "#333",
            padding: "6px 12px",
          },
          buttonNext: {
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "6px 12px",
          },
        }}
        callback={(data) => {
          const { status } = data;
          if (["finished", "skipped"].includes(status)) {
            setRunTour(false);
          }
        }}
      />
    </div>
  );
};

export default UserGuide;
