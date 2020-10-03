const translations = {
  en: {
    units: {
      us: "Gallons / Pounds / °F",
      metric: "Liters / Kilograms / °C"
    },

    metric: {
      volume: "liters",
      volume_1: "liter",
      weight: "kilograms",
      weight_1: "kilogram"
    },

    imperial: {
      volume: "gallons",
      volume_1: "gallon",
      weight: "pounds",
      weight_1: "pond",
    },


    gravity: "Gravity",
    original_gravity: "Original gravity",
    final_gravity: "Final gravity",
    measured_gravity: "Measured gravity",
    target_gravity: "Target gravity",
    temperature_during_measurement: "Temperature during measurement",
    calibrated_temperature: "Calibrated temperature",
    corrected_gravity: "Corrected gravity",
    alcohol_percentage: "Alcohol percentage",
    attenuation: "Attenuation",
    color: "Color",

    correct: {
      suggested_advise: "Suggested advice",
      add_water: "Add %{amount} %{volume} water to decrease the gravity.",
      add_sugar: "Add %{amount} %{weight} sugar to increase the gravity.",
      do_nothing: "The gravity matches the target gravity.",
    },

    volume: "Volume in %{volume}",

    help: {
      gravity: "The gravity must have a value between %{min} and %{max}.",
      temperature: "The temperature must have a value between %{min} and %{max}",
      volume: "The volume must have a value between %{min} and %{max}.",
    },
  },
  nl: {
    units: {
      us: "Gallons / Pond / °F",
      metric: "Liters / Kilogram / °C"
    },
    metric: {
      volume: "liters",
      volume_1: "liter",
      weight: "kilogram",
      weight_1: "kilogram"
    },

    imperial: {
      volume: "gallons",
      volume_1: "gallon",
      weight: "pond",
      weight_1: "pond"
    },

    gravity: "Soortelijk gewicht",
    original_gravity: "Begin SG",
    final_gravity: "Eind SG",
    measured_gravity: "Gemeten SG",
    target_gravity: "Doel SG",
    temperature_during_measurement: "Temperatuur tijdens meting",
    calibrated_temperature: "Gekalibreerde temperatuur",
    corrected_gravity: "Gecorrigeerd SG",
    alcohol_percentage: "Alcoholpercentage",
    attenuation: "Vergistingsgraad",
    color: "Kleur",

    correct: {
      suggested_advise: "Aanbevolen advies",
      add_water: "Voeg %{amount} %{volume} water toe om het SG te verlagen.",
      add_sugar: "Voeg %{amount} %{weight} suiker toe om het SG te verhogen.",
      do_nothing: "Het SG komt overeen met het doel SG.",
    },

    volume: "Volume in %{volume}",

    help: {
      gravity: 'De waarde SG moet tussen de %{min} en %{max} liggen.',
      temperature: "De waarde celsius moet tussen %{min} en %{max} liggen.",
      volume: "Het volume moet tussen de %{min} en %{max} liggen."
    },
  },
};

export default translations;
