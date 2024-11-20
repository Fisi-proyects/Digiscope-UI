import { data_models } from "../models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const PetriScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[8].model}
      type={models[8].type}
      scale={models[8].scale}
    />
  </ViroARScene>
);