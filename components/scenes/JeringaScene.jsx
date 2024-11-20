import { data_models } from "../models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const JeringaScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[9].model}
      type={models[9].type}
      scale={models[9].scale}
    />
  </ViroARScene>
);