import { data_models } from "../models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const TestTubesScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[4].model}
      type={models[4].type}
      scale={models[4].scale}
    />
  </ViroARScene>
);