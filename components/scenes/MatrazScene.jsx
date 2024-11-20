import { data_models } from "../models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const MatrazScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[1].model}
      type={models[1].type}
      scale={models[1].scale}
    />
  </ViroARScene>
);