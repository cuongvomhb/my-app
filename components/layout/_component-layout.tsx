import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const ComponentLayout = ({ children }: any) => {

  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);

  // Function to update screen width when resized
  const updateScreenWidth = () => {
    setScreenWidth(Dimensions.get("window").width);
  };

  // Add event listener for screen resize
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", updateScreenWidth);

    // Cleanup function
    return () => {
      subscription.remove(); // Prevent memory leaks
    };
  }, []);

  const renderChildren = () => {
    return React.cloneElement(children, {
      screenWidth: screenWidth,
    });
  }

  return (<>
    {renderChildren()}
  </>)
}

export default ComponentLayout;