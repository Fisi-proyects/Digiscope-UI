import { useState } from "react";
import { data_models } from "../../data/models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const MicroscopeScene = (props) => {
  const [position, setPosition] = useState([0, 0, -.3]);
  const [scale, setScale] = useState(models[0].scale);
  const [rotate, setRotate] = useState([0, 0, 0]);

  return(
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[0].model}
      type={models[0].type}
      scale={scale}
      rotation={rotate}
      position={position}

      onDrag={
        (position, source) => {
          setPosition(position);
        }
      }

      onPinch={(pinchState, scaleFactor, source) => {
        console.log(pinchState, scaleFactor, source);
        if (pinchState === 3) {
          console.log(scaleFactor)
          setScale([scale[0] * scaleFactor, scale[1] * scaleFactor, scale[2] * scaleFactor]);
        }
      }}


      onRotate={(rotateState, rotationFactor, source) => {
        if(rotateState==3){
          setRotate([rotate[0], rotate[1] + rotationFactor, rotate[2]]);
        }
        }}


    />
  </ViroARScene>
);}