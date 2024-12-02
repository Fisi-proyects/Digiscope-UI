import { useState } from "react";
import { data_models } from "../../data/models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const MezcladoraScene = (props) => {
  const [position, setPosition] = useState([-3, 0, -16]);
  const [scale, setScale] = useState(models[3].scale);
  const [rotate, setRotate] = useState([0, 0, 0]);

  return(
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject

      source={models[3].model}
      type={models[3].type}
      scale={scale}
      position={position}
      rotation={rotate}
      onDrag={
        (position, source) => {
          setPosition(position);
        }
      }

      onPinch={(pinchState, scaleFactor, source) => {
        if (pinchState === 3) {
          setScale([scale[0] * scaleFactor, scale[1] * scaleFactor, scale[2] * scaleFactor]);
        }
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