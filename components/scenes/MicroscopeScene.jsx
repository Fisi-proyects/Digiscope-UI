import { data_models } from "../../data/models.js";
import { ViroARScene, Viro3DObject, ViroAmbientLight } from "@reactvision/react-viro";

const models = data_models;

export const MicroscopeScene = (props) => (
  <ViroARScene>
    <ViroAmbientLight color="#ffffff" />
    <Viro3DObject
      source={models[0].model}
      type={models[0].type}
      scale={models[0].scale}
    />
  </ViroARScene>
);
