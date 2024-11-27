import { useState } from "react";
import { data_models } from "../../data/models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const JeringaScene = (props) => {
  const [position, setPosition] = useState([0, 0, -.6]);
  const [scale, setScale] = useState(models[9].scale);
  const [rotate, setRotate] = useState([0, 0, 0]);

  return(
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[9].model}
      type={models[9].type}
      scale={scale}
      rotation={rotate}
      position={position}
      onDrag={
        (position, source) => {
          setPosition(position);
        }
      }
      onRotate={(rotateState, rotationFactor, source) => {
        if(rotateState==3){
          setRotate([rotate[0], rotate[1] + rotationFactor, rotate[2]]);
        }
        }
      }
    />
  </ViroARScene>
);}