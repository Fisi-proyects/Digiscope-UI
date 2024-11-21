import { data_models } from "../../data/models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const ProbetaScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[5].model}
      type={models[5].type}
      scale={models[5].scale}
    />
  </ViroARScene>
);