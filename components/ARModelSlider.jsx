import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export const ARModelSlider = ({ models, currentScene, handleSceneChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    handleSceneChange(models[currentIndex]?.target);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < models.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getModelsToRender = () => {
    const totalModels = models.length;
    
    if (totalModels <= 3) {
      return models;
    }
    if (currentIndex === 0) {
      return models.slice(0, 3);
    }
    if (currentIndex === totalModels - 1) {
      return models.slice(totalModels - 3);
    }

    return models.slice(currentIndex - 1, currentIndex + 2);
  };

  const modelsToRender = getModelsToRender();

  console.log(currentScene);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={handlePrev} 
        style={styles.arrow}
        disabled={currentIndex === 0}
      >
        <Text style={[
          styles.arrowText, 
          currentIndex === 0 && styles.disabledArrow
        ]}>
          {"<"}
        </Text>
      </TouchableOpacity>
      
      <View style={styles.modelsContainer}>
        {modelsToRender.map((model, index) => {
          const isSelected = (
            // borde inicial
            (currentIndex === 0 && index === 0) ||
            // borde final 
            (currentIndex === models.length - 1 && index === 2) ||
            // modelos intermedios
            (currentIndex > 0 && currentIndex < models.length - 1 && index === 1)
          );

          return (
            <View key={model.target} style={styles.modelWrapper}>
              <View
                style={[
                  styles.circleButton,
                  isSelected && styles.selectedCircleButton,
                ]}
              >
                {/* Luego reemplazar por imagenes */}
                <Text style={styles.buttonText}>
                  {model.target.charAt(0).toUpperCase()}
                </Text>
              </View>
              <Text style={styles.modelText}>{model.target}</Text>
            </View>
          );
        })}
      </View>
      
      <TouchableOpacity 
        onPress={handleNext} 
        style={styles.arrow}
        disabled={currentIndex === models.length - 1}
      >
        <Text style={[
          styles.arrowText, 
          currentIndex === models.length - 1 && styles.disabledArrow
        ]}>
          {">"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  arrow: {
    padding: 10,
  },
  arrowText: {
    fontSize: 24,
  },
  disabledArrow: {
    color: 'gray',
  },
  modelsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  modelWrapper: {
    width: 100,
    padding: 5,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#abdefa",
  },
  selectedCircleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "#63c2f6"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  modelText: {
    marginTop: 5,
  },
});