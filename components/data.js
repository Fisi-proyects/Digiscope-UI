const preguntas = [
    // Lección 1(sin contar la introducción)
    {
      id: 1,
      pregunta: "¿Cuál es la principal función de una placa de Petri en el laboratorio?",
      opciones: ["Medir volúmenes de líquidos", "Cultivar microorganismos", "Calentar muestras", "Guardar productos químicos"],
      respuesta: "Cultivar microorganismos"
    },
    {
      id: 2,
      pregunta: "¿De qué material están hechas la mayoría de las placas de Petri reutilizables?",
      opciones: ["Plástico desechable", "Madera", "Vidrio", "Acero inoxidable"],
      respuesta: "Vidrio"
    },
    {
      id: 3,
      pregunta: "¿Qué sustancia se coloca en la placa de Petri para cultivar microorganismos?",
      opciones: ["Alcohol", "Agar", "Agua destilada", "Azufre"],
      respuesta: "Agar"
    },
    {
      id: 4,
      pregunta: "¿Por qué es importante no abrir la placa de Petri en el laboratorio después de inocularla?",
      opciones: [
        "Para que el agar no se deshidrate",
        "Para evitar la entrada de microorganismos externos y contaminación",
        "Para evitar que se descomponga el plástico",
        "Para evitar que se rompa la placa"
      ],
      respuesta: "Para evitar la entrada de microorganismos externos y contaminación"
    },
    {
      id: 5,
      pregunta: "¿Cuál es el riesgo principal de trabajar con placas de Petri que contienen bacterias patógenas?",
      opciones: [
        "Que el agar se evapore",
        "Que el vidrio se contamine",
        "Que se liberen microorganismos peligrosos al ambiente",
        "Que el cultivo se mezcle con otros microorganismos"
      ],
      respuesta: "Que se liberen microorganismos peligrosos al ambiente"
    },
    // Lección 2
    {
      id: 6,
      pregunta: "¿Para qué se usa un tubo de ensayo en el laboratorio?",
      opciones: ["Para triturar sólidos", "Para medir el pH", "Para contener y mezclar pequeñas cantidades de sustancias", "Para secar muestras"],
      respuesta: "Para contener y mezclar pequeñas cantidades de sustancias"
    },
    {
      id: 7,
      pregunta: "¿Qué tipo de material es más común en los tubos de ensayo de uso general?",
      opciones: ["Plástico", "Vidrio", "Metal", "Porcelana"],
      respuesta: "Vidrio"
    },
    {
      id: 8,
      pregunta: "¿Qué debes usar para sostener un tubo de ensayo al calentarlo?",
      opciones: ["Un soporte de madera", "Una pinza para tubos de ensayo", "Una espátula", "Un tapón de goma"],
      respuesta: "Una pinza para tubos de ensayo"
    },
    {
      id: 9,
      pregunta: "¿Cuál es la razón para no cerrar completamente un tubo de ensayo al calentarlo?",
      opciones: [
        "Para que se mantenga a temperatura ambiente",
        "Para evitar que se rompa por la presión de gases acumulados",
        "Para que el líquido no se derrame",
        "Para que el tubo se enfríe más rápido"
      ],
      respuesta: "Para evitar que se rompa por la presión de gases acumulados"
    },

    {
      id: 10,
      pregunta: "¿Cuál es el principal riesgo de calentar un tubo de ensayo lleno?",
      opciones: [
        "Que el líquido se evapore completamente",
        "Que el tubo se contamine",
        "Que el tubo explote por presión excesiva",
        "Que el tubo se enfríe rápidamente"
      ],
      respuesta: "Que el tubo explote por presión excesiva"
    },
    //leccion3
    {
        id: 11,
        pregunta: "¿Cuál es el propósito principal de un microscopio en el laboratorio?",
        opciones: [
          "Limpiar muestras",
          "Ampliar la imagen de objetos pequeños",
          "Calentar muestras",
          "Guardar muestras"
        ],
        respuesta: "Ampliar la imagen de objetos pequeños"
      },
      {
        id: 12,
        pregunta: "¿Cuál es la parte del microscopio por donde se observa la muestra?",
        opciones: [
          "La platina",
          "El ocular",
          "El diafragma",
          "El condensador"
        ],
        respuesta: "El ocular"
      },
      {
        id: 13,
        pregunta: "¿Qué parte del microscopio permite ajustar la claridad de la imagen?",
        opciones: [
          "El objetivo",
          "La platina",
          "Los tornillos de enfoque",
          "La base"
        ],
        respuesta: "Los tornillos de enfoque"
      },
      {
        id: 14,
        pregunta: "¿Qué tipo de objetivo se usa primero al observar una muestra en un microscopio?",
        opciones: [
          "El de mayor aumento",
          "El de menor aumento",
          "El intermedio",
          "El que tenga el ocular más pequeño"
        ],
        respuesta: "El de menor aumento"
      },
     
      {
        id: 15,
        pregunta: "¿Por qué es importante limpiar las lentes del microscopio con papel especial?",
        opciones: [
          "Para que no se contaminen con bacterias",
          "Para evitar arañazos y mantener la calidad óptica",
          "Para evitar que se empañen",
          "Para que el microscopio dure más tiempo"
        ],
        respuesta: "Para evitar arañazos y mantener la calidad óptica"
      },
    
 //leccion4      
        {
        id: 16,
        pregunta: "¿Cuál es la función principal de una balanza en el laboratorio?",
        opciones: [
          "Calcular el volumen de sustancias",
          "Medir la fuerza de gravedad sobre un objeto y convertirla en masa",
          "Determinar el nivel de pureza de un material",
          "Registrar datos de experimentos"
        ],
        respuesta: "Medir la fuerza de gravedad sobre un objeto y convertirla en masa"
      },
      {
        id: 17,
        pregunta: "¿Qué parte de la balanza muestra el valor obtenido durante el pesaje?",
        opciones: [
          "El platillo",
          "El panel táctil",
          "La pantalla",
          "La base"
        ],
        respuesta: "La pantalla"
      },
      {
        id: 18,
        pregunta: "¿Qué se debe hacer antes de usar una balanza para obtener mediciones fiables?",
        opciones: [
          "Encenderla sin calibrarla",
          "Limpiar la pantalla táctil",
          "Calibrar la balanza según el tipo que se use",
          "Pesar primero líquidos y luego sólidos"
        ],
        respuesta: "Calibrar la balanza según el tipo que se use"
      },
      {
        id: 19,
        pregunta: "¿Qué significa el término 'legibilidad' en una balanza?",
        opciones: [
          "La capacidad de pesar líquidos",
          "El rango de precisión en sus mediciones",
          "Los dígitos mostrados después del punto decimal",
          "La repetibilidad del peso"
        ],
        respuesta: "Los dígitos mostrados después del punto decimal"
      },
      {
        id: 20,
        pregunta: "¿Cuál es una precaución importante al usar una balanza?",
        opciones: [
          "No pesar sólidos en el platillo",
          "Usar la balanza sin calibrarla regularmente",
          "Hacer mantenimiento periódico para garantizar su funcionamiento",
          "Usar cualquier balanza sin importar el experimento"
        ],
        respuesta: "Hacer mantenimiento periódico para garantizar su funcionamiento"
      },
      //leccion5
      {
        id: 21,
        pregunta: "¿Cuál es el propósito principal de un termómetro en el laboratorio?",
        opciones: [
          "Medir la temperatura con precisión",
          "Medir el peso de líquidos",
          "Determinar la pureza de una sustancia",
          "Controlar la velocidad de reacción"
        ],
        respuesta: "Medir la temperatura con precisión"
      },
      {
        id: 22,
        pregunta: "¿Qué líquido se utiliza en los termómetros para facilitar la observación de la temperatura?",
        opciones: [
          "Mercurio puro",
          "Agua destilada",
          "Alcohol teñido",
          "Aceite mineral"
        ],
        respuesta: "Alcohol teñido"
      },
      {
        id: 23,
        pregunta: "¿Qué parte del termómetro debe estar en contacto con la sustancia a medir?",
        opciones: [
          "El tubo de vidrio",
          "El bulbo",
          "La escala externa",
          "Todo el termómetro"
        ],
        respuesta: "El bulbo"
      },
      {
        id: 24,
        pregunta: "¿Qué precaución se debe tomar al usar un termómetro?",
        opciones: [
          "Limpiar el bulbo antes de medir",
          "Sumergir todo el termómetro en el líquido",
          "Usarlo directamente sin calibración previa",
          "Medir temperaturas solo en ambientes fríos"
        ],
        respuesta: "Limpiar el bulbo antes de medir"
      },
      {
        id: 25,
        pregunta: "¿Qué sucede si el bulbo toca las paredes del recipiente durante una medición?",
        opciones: [
          "Mejora la precisión",
          "Aumenta el riesgo de rotura",
          "Puede alterar la medición",
          "No tiene ningún efecto"
        ],
        respuesta: "Puede alterar la medición"
      },
      //leccion6
      {
        id: 26,
        pregunta: "¿Cuál es la principal función de un matraz?",
        opciones: [
          "Transferir líquidos con precisión",
          "Medir la masa de sustancias",
          "Contener y mezclar líquidos o realizar disoluciones",
          "Determinar el pH de una solución"
        ],
        respuesta: "Contener y mezclar líquidos o realizar disoluciones"
      },
      {
        id: 27,
        pregunta: "¿Qué debe hacerse antes de usar un matraz?",
        opciones: [
          "Verter la sustancia rápidamente",
          "Limpiar y secar el matraz",
          "Calentarlo para evitar daños",
          "Verificar que esté lleno"
        ],
        respuesta: "Limpiar y secar el matraz"
      },
      {
        id: 28,
        pregunta: "¿Qué tipo de medición no es recomendable realizar con un matraz?",
        opciones: [
          "Volumen aproximado",
          "Medición precisa de líquidos",
          "Preparación de disoluciones",
          "Almacenamiento de líquidos"
        ],
        respuesta: "Medición precisa de líquidos"
      },
      {
        id: 29,
        pregunta: "¿Qué precaución debe tomarse al calentar líquidos en un matraz?",
        opciones: [
          "No calentar líquidos viscosos",
          "Colocar el matraz sobre una superficie fría",
          "No llenarlo completamente",
          "Agitarlo vigorosamente"
        ],
        respuesta: "No llenarlo completamente"
      },
      {
        id: 30,
        pregunta: "¿Cómo se deben almacenar los matraces?",
        opciones: [
          "En lugares seguros lejos de fuentes de calor",
          "Con líquidos siempre dentro para protegerlos",
          "Juntos en una sola pila sin separación",
          "Expuestos al aire libre"
        ],
        respuesta: "En lugares seguros lejos de fuentes de calor"
      },
      //leccion7
      {
        id: 31,
        pregunta: "¿Cuál es el principal uso del soporte universal?",
        opciones: [
          "Esterilizar instrumentos",
          "Realizar montajes con otros materiales",
          "Calcular volúmenes exactos",
          "Almacenar sustancias químicas"
        ],
        respuesta: "Realizar montajes con otros materiales"
      },
      {
        id: 32,
        pregunta: "¿Qué material se usa comúnmente para fabricar el soporte universal?",
        opciones: [
          "Plástico",
          "Madera",
          "Acero inoxidable",
          "Aluminio"
        ],
        respuesta: "Acero inoxidable"
      },
      {
        id: 33,
        pregunta: "¿Qué accesorio se puede usar con el soporte universal para sujetar un tubo de ensayo?",
        opciones: [
          "Anillo metálico",
          "Pinza",
          "Trípode",
          "Rejilla"
        ],
        respuesta: "Pinza"
      },
      {
        id: 34,
        pregunta: "¿Qué debe hacerse antes de montar el soporte universal?",
        opciones: [
          "Colocar la base sobre una superficie inclinada",
          "Verificar que la varilla esté bien ajustada a la base",
          "Calentar la base",
          "Lubricar los accesorios"
        ],
        respuesta: "Verificar que la varilla esté bien ajustada a la base"
      },
      {
        id: 35,
        pregunta: "¿Qué precaución es necesaria al usar un mechero con el soporte universal?",
        opciones: [
          "Evitar ajustar la altura del accesorio",
          "Usar accesorios que distribuyan el calor uniformemente",
          "Enroscar la varilla al revés",
          "Colocar la base en una superficie húmeda"
        ],
        respuesta: "Usar accesorios que distribuyan el calor uniformemente"
      },
//leccion8
{
    id: 36,
    pregunta: "¿Cuál es la función principal de la probeta graduada?",
    opciones: [
      "Transferir líquidos",
      "Calentar sustancias",
      "Medir volúmenes",
      "Mezclar sustancias"
    ],
    respuesta: "Medir volúmenes"
  },
  {
    id: 37,
    pregunta: "¿Qué material no se usa para fabricar probetas graduadas?",
    opciones: [
      "Vidrio",
      "Plástico",
      "Metal",
      "Material resistente a químicos"
    ],
    respuesta: "Metal"
  },
  {
    id: 38,
    pregunta: "¿Qué debe hacerse si el líquido en la probeta supera la graduación deseada?",
    opciones: [
      "Añadir más líquido",
      "Vaciar hasta alcanzar la medida correcta",
      "Cambiar de recipiente",
      "Agitar el líquido dentro de la probeta"
    ],
    respuesta: "Vaciar hasta alcanzar la medida correcta"
  },
  {
    id: 39,
    pregunta: "¿Por qué debe usarse la probeta en una superficie plana?",
    opciones: [
      "Para evitar que se vuelque",
      "Para medir con precisión",
      "Para que no se contamine",
      "Para facilitar el vertido"
    ],
    respuesta: "Para medir con precisión"
  },
  {
    id: 40,
    pregunta: "¿Qué precaución se debe tener al manejar líquidos calientes con una probeta graduada?",
    opciones: [
      "Usar guantes resistentes al calor",
      "Llenarla rápidamente",
      "Verificar que la probeta soporte el cambio de temperatura",
      "Mezclar el líquido antes de medirlo"
    ],
    respuesta: "Verificar que la probeta soporte el cambio de temperatura"
  },
//leccion 9
{
    id: 41,
    pregunta: "¿Cuál es la llama que genera mayor calor en el mechero de Bunsen?",
    opciones: [
      "Amarilla",
      "Roja",
      "Azul",
      "Verde"
    ],
    respuesta: "Azul"
  },
  {
    id: 42,
    pregunta: "¿Qué parte del mechero regula el paso del aire?",
    opciones: [
      "La válvula de gas",
      "El pie metálico",
      "El anillo metálico móvil",
      "El tubo vertical"
    ],
    respuesta: "El anillo metálico móvil"
  },
  {
    id: 43,
    pregunta: "¿Qué acción debe realizarse antes de encender el mechero?",
    opciones: [
      "Colocar el material directamente sobre la llama",
      "Revisar la manguera y conexiones para detectar fugas de gas",
      "Regular la llama a su nivel máximo",
      "Enfriar el mechero"
    ],
    respuesta: "Revisar la manguera y conexiones para detectar fugas de gas"
  },
  {
    id: 44,
    pregunta: "¿Dónde debe colocarse el mechero de Bunsen durante su uso?",
    opciones: [
      "En una superficie inclinada",
      "Cerca de materiales inflamables",
      "Sobre una superficie estable y despejada",
      "Directamente bajo el agua"
    ],
    respuesta: "Sobre una superficie estable y despejada"
  },
  {
    id: 45,
    pregunta: "¿Qué medida de seguridad es obligatoria al usar el mechero de Bunsen?",
    opciones: [
      "Mantener la llama baja en todo momento",
      "Usar guantes y gafas de protección",
      "Apagarlo cada cinco minutos",
      "Cambiar la manguera durante el experimento"
    ],
    respuesta: "Usar guantes y gafas de protección"
  },
//leccion10
{
    id: 46,
    pregunta: "¿Qué material se utiliza para fabricar las paletas agitadoras de la máquina de prueba de jarras?",
    opciones: [
      "Vidrio",
      "Aluminio",
      "Acero inoxidable o plástico resistente a químicos",
      "Madera"
    ],
    respuesta: "Acero inoxidable o plástico resistente a químicos"
  },
  {
    id: 47,
    pregunta: "¿Cuál es la función principal de la máquina de prueba de jarras?",
    opciones: [
      "Calentar muestras de agua",
      "Determinar la cantidad óptima de coagulante",
      "Separar sólidos del agua mediante filtración",
      "Desinfectar el agua"
    ],
    respuesta: "Determinar la cantidad óptima de coagulante"
  },
  {
    id: 48,
    pregunta: "¿Qué se debe hacer antes de llenar los recipientes de la máquina?",
    opciones: [
      "Ajustar la velocidad de mezcla",
      "Limpiar los recipientes y colocarlos correctamente",
      "Añadir coagulante a todos los recipientes",
      "Encender la máquina"
    ],
    respuesta: "Limpiar los recipientes y colocarlos correctamente"
  },
  {
    id: 49,
    pregunta: "¿Qué precaución debe tomarse al ajustar la velocidad de la máquina?",
    opciones: [
      "Usar guantes resistentes al calor",
      "Asegurarse de que los recipientes estén llenos",
      "Tener cuidado con el panel de control",
      "Apagar la máquina después de cada ajuste"
    ],
    respuesta: "Tener cuidado con el panel de control"
  },
  {
    id: 50,
    pregunta: "¿Qué se recomienda para evitar derrames al usar la máquina?",
    opciones: [
      "Instalarla en una superficie plana y estable",
      "Llenar los recipientes al máximo",
      "Usar recipientes de acero inoxidable",
      "Mantenerla apagada durante el llenado"
    ],
    respuesta: "Instalarla en una superficie plana y estable"
  },
//leccion11

{
    id: 51,
    pregunta: "¿Qué complemento se utiliza con la pipeta para evitar el contacto con la boca?",
    opciones: [
      "Un embudo",
      "Un pipeteador manual",
      "Una bureta",
      "Un agitador"
    ],
    respuesta: "Un pipeteador manual"
  },
  {
    id: 52,
    pregunta: "¿Qué diferencia principal tienen las pipetas graduadas y las volumétricas?",
    opciones: [
      "Material de fabricación",
      "Resistencia a sustancias químicas",
      "Cantidad de volúmenes que pueden medir",
      "Forma del tubo"
    ],
    respuesta: "Cantidad de volúmenes que pueden medir"
  },
  {
    id: 53,
    pregunta: "¿Qué medida de seguridad es esencial al usar la pipeta con sustancias peligrosas?",
    opciones: [
      "Usar guantes desechables",
      "Limpiar la pipeta antes y después de usarla",
      "Usar un pipeteador en lugar de la boca",
      "Mantener la pipeta en posición horizontal"
    ],
    respuesta: "Usar un pipeteador en lugar de la boca"
  },
  {
    id: 54,
    pregunta: "¿Qué se debe hacer si el líquido en la pipeta supera la marca deseada?",
    opciones: [
      "Aspirar más líquido para compensar",
      "Liberar el líquido lentamente con el pipeteador",
      "Desechar todo el líquido y volver a comenzar",
      "Incluir la pipeta para ajustar el nivel"
    ],
    respuesta: "Liberar el líquido lentamente con el pipeteador"
  },
  {
    id: 55,
    pregunta: "¿Qué precaución ayuda a evitar la contaminación al transferir el líquido?",
    opciones: [
      "Agitar la pipeta antes de usarla",
      "Liberar el líquido lentamente",
      "Evitar que la punta toque las paredes del recipiente",
      "Usar siempre líquidos destilados"
    ],
    respuesta: "Evitar que la punta toque las paredes del recipiente"
  }
  ];