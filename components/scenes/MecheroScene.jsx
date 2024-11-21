import { data_models } from "../../data/models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const MecheroScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[2].model}
      type={models[2].type}
      scale={models[2].scale}
    />
  </ViroARScene>
);