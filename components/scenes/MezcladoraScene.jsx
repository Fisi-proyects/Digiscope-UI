import { data_models } from "../../data/models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const MezcladoraScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[3].model}
      type={models[3].type}
      scale={models[3].scale}
    />
  </ViroARScene>
);