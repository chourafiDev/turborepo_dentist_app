import React, { CSSProperties } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
const CustomScrollbars = ({ children }: { children: React.ReactNode }) => {
  const renderThumbVertical = ({
    style,
    ...props
  }: {
    style: CSSProperties;
  }) => {
    const thumbStyle = {
      backgroundColor: "#a3aed1",
      opacity: 0.2,
      borderRadius: "10px",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  return (
    <Scrollbars
      renderThumbVertical={renderThumbVertical}
      autoHide
      universal
      thumbSize={90}
    >
      {children}
    </Scrollbars>
  );
};
export default CustomScrollbars;
