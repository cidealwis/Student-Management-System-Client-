import React, { useState, useEffect } from 'react';
import { SpeedDial } from '@mui/material';
import { styled } from '@mui/system';

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    const handleResize = () => {
        const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
        setIsMobile(isMobileDevice);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the value on the first render
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

const StyledSpeedDial = styled(SpeedDial)`
  .MuiSpeedDial-fab {
    background-color: #006600; /* Change the main background color */
    &:hover {
      background-color: #004400; /* Change the background color on hover */
    }
  }
`;

export default StyledSpeedDial;
