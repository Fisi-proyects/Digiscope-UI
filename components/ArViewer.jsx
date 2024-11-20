import { Text } from "react-native";
import BouncyCheckboxGroup, {
    CheckboxButton,
  } from "react-native-bouncy-checkbox-group";

export default function ArViewerC (){
    return (
    <>
        <Text>AR Viewer</Text>
        <BouncyCheckboxGroup
  data={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ]}
/>
<BouncyCheckboxGroup
  data={
    [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ]
  }
  style={{ flexDirection: "column" }}
/>

    </>
    );
    
}