import { data_models } from "../models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const PipetaScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[7].model}
      type={models[7].type}
      scale={models[7].scale}
    />
  </ViroARScene>
);