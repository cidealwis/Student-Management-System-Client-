import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background-color: #ff5733; /* Orange */
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #ff8c66; /* Lighter orange */
      border-color: #ff704d; /* Darker orange */
      box-shadow: none;
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #333333; /* Dark gray */
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #555555; /* Darker gray */
      border-color: #555555; /* Darker gray */
      box-shadow: none;
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color: #990000; /* Darker red */
    color: white;
    &:hover {
      background-color: #cc0000; /* Red */
      border-color: #cc0000; /* Red */
      box-shadow: none;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #0066cc; /* Blue */
    color: #fff;
    &:hover {
      background-color: #0077ff; /* Lighter blue */
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #800080; /* Purple */
    color: #fff;
    &:hover {
      background-color: #993399; /* Lighter purple */
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background-color: #cc99ff; /* Light purple */
    color: #fff;
    &:hover {
      background-color: #e6b3ff; /* Lighter purple */
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background-color: #339933; /* Green */
    color: #fff;
    &:hover {
      background-color: #66cc66; /* Lighter green */
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #8b4513; /* Brown */
    color: white;
    &:hover {
      background-color: #a0522d; /* Lighter brown */
      border-color: #a0522d; /* Lighter brown */
      box-shadow: none;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color: #4b0082; /* Indigo */
    color: white;
    &:hover {
      background-color: #663399; /* Lighter indigo */
    }
  }
`;
