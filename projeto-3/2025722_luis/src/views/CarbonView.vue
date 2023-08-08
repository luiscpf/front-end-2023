<template>
  <div>
    <div class="container">
      <div class="category" v-for="(category, categoryName) in equipmentData" :key="categoryName">
        <h3 class="category-title">{{ categoryName }}</h3>
        <div class="equipment-row">
          <div v-for="(equipment, equipmentName) in category" :key="equipmentName" class="equipment">
            <div class="equipment-info">
              <label class="equipment-label">{{ equipmentName }}</label>
              <div class="count-container">
                <button type="button" class="decrement-button" @click="decrementEquipment(categoryName, equipmentName)">-</button>
                <input type="number" class="equipment-count" v-model="equipment.count">
                <button type="button" class="increment-button" @click="incrementEquipment(categoryName, equipmentName)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="input-section">
      <div class="input-container">
        <label class="input-label">Uso de Energia (kW):</label>
        <input type="number" class="input-field" v-model="energyUsage">
      </div>
      <div class="input-container">
        <label class="input-label">Hábitos de Transporte:</label>
        <input type="text" class="input-field" v-model="transportationHabits" maxlength="20">
      </div>
    </div>

    <div class="added-equipment" v-if="showResults">
      <h3>Added Equipment:</h3>
      <ul>
        <li v-for="(count, name) in addedEquipment" :key="name">
          {{ name }}: {{ count }}
        </li>
      </ul>
      <p>Total Carbon Footprint: {{ totalCarbonFootprint }} kg CO2e</p>
    </div>

    <button class="get-results-button" @click="getResults">Get Results</button>
    <button class="get-results-button" @click="storeEquipment">Store Information</button>


    
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';


export default {

  data() {
    return {
      equipmentData: {
        smallEquipment: {
          kitchenAppliance: { count: 0 },
          heatingVentilation: { count: 0 },
          microwave: { count: 0 },
          vacuumCleaner: { count: 0 },
          personalCare: { count: 0 },
        },
        screensAndMonitors: {
          crtTvMonitor: { count: 0 },
          lcdTvMonitor: { count: 0 },
        },
        largeEquipment: {
          dishwasher: { count: 0 },
          washingMachine: { count: 0 },
          clothesDryer: { count: 0 },
        },
        temperatureExchangeEquipment: {
          fridge: { count: 0 },
          freezer: { count: 0 },
          airConditioning: { count: 0 },
        },
        lamps: {
          fluorescenceTube: { count: 0 },
        },
        batteries: {
          lithiumIon: { count: 0 },
          nickelBased: { count: 0 },
          alkaline: { count: 0 },
        },
        smallITTelecommunication: {
          mobilePhone: { count: 0 },
          laptop: { count: 0 },
          printer: { count: 0 },
          router: { count: 0 },
        },
      },
      showResults: false,
      addedEquipment: {},
      energyUsage: 0,
      transportationHabits: '',
      totalCarbonFootprint: 0,
    };
  },
  methods: {
    incrementEquipment(category, equipment) {
      this.equipmentData[category][equipment].count++;
    },
    decrementEquipment(category, equipment) {
      if (this.equipmentData[category][equipment].count > 0) {
        this.equipmentData[category][equipment].count--;
      }
    },
    getResults() {
      this.addedEquipment = {};
      let equipmentCarbonFootprint = 0;

      // Calculate carbon footprint for equipment
      for (const category in this.equipmentData) {
        for (const equipment in this.equipmentData[category]) {
          const count = this.equipmentData[category][equipment].count;
          if (count > 0) {
            const carbonEmission = this.calculateCarbonEmission(category, equipment);
            const equipmentCarbon = carbonEmission * count;
            equipmentCarbonFootprint += equipmentCarbon;
            this.addedEquipment[equipment] = count;
          }
        }
      }

      // Calculate carbon footprint for energy usage
      const energyCarbonFootprint = this.calculateEnergyCarbonFootprint(this.energyUsage);

      // Calculate carbon footprint for transportation habits
      const transportationCarbonFootprint = this.calculateTransportationCarbonFootprint(this.transportationHabits);

      // Calculate total carbon footprint
      this.totalCarbonFootprint = equipmentCarbonFootprint + energyCarbonFootprint + transportationCarbonFootprint;

      this.showResults = true;
    },
    calculateCarbonEmission(category, equipment) {
      // Placeholder values, replace with actual carbon emission values
      const emissionFactors = {
        smallEquipment: {
          kitchenAppliance: 0.5,
          heatingVentilation: 1.0,
          microwave: 0.3,
          vacuumCleaner: 0.8,
          personalCare: 0.4,
        },
        screensAndMonitors: {
          crtTvMonitor: 1.5,
          lcdTvMonitor: 1.2,
        },
        largeEquipment: {
          dishwasher: 1.8,
          washingMachine: 2.0,
          clothesDryer: 2.2,
        },
        temperatureExchangeEquipment: {
          fridge: 1.0,
          freezer: 1.2,
          airConditioning: 2.5,
        },
        lamps: {
          fluorescenceTube: 0.2,
        },
        batteries: {
          lithiumIon: 0.1,
          nickelBased: 0.15,
          alkaline: 0.08,
        },
        smallITTelecommunication: {
          mobilePhone: 0.2,
          laptop: 0.8,
          printer: 0.6,
          router: 0.4,
        },
      };

      return emissionFactors[category][equipment];
    },
    calculateEnergyCarbonFootprint(energyUsage) {
      // Formula to calculate energy carbon footprint
      return energyUsage * 0.4;
    },
    calculateTransportationCarbonFootprint(transportationHabits) {
      // Formula to calculate transportation carbon footprint
      return transportationHabits.length * 0.75;
    },
    storeEquipment() {
      const user = firebase.auth().currentUser;
      if (user) {
        const userId = user.uid;
        const email = user.email;

        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hour = ("0" + date.getHours()).slice(-2);
        const minute = ("0" + date.getMinutes()).slice(-2);
        const second = ("0" + date.getSeconds()).slice(-2);

        const timestamp = `${year}-${month}-${day}T${hour}:${minute}:${second}`;

        // Ensure totalCarbonFootprint is a valid number
        let totalCarbonFootprint = this.totalCarbonFootprint;
        if (isNaN(totalCarbonFootprint)) {
          totalCarbonFootprint = 0;
        }

        const equipmentData = {
          addedEquipment: this.addedEquipment,
          energyUsage: this.energyUsage,
          transportationHabits: this.transportationHabits,
          totalCarbonFootprint: totalCarbonFootprint,
          timestamp: timestamp,
        };

        const database = firebase.database();
        database.ref(`users/${userId}/equipmentData/${timestamp}`).set(equipmentData)
          .then(() => {
            console.log('Equipment data stored successfully!');
          })
          .catch((error) => {
            console.error('Error storing equipment data:', error);
          });
      } else {
        console.error('User not logged in!');
      }
    },
  },
};
</script>

<style>
  /* Global styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  /* Container styles */
  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    justify-items: center;
    margin-top: 60px;
  }

  /* Equipment row styles */
  .equipment-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  /* Equipment styles */
  .equipment {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  .equipment-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .equipment-label {
    font-size: 16px;
  }

  .count-container {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  .equipment-count {
    width: 40px;
    margin: 0 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
  }

  /* Input section styles */
  .input-section {
    margin-top: 20px;
  }

  .input-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .input-label {
    font-size: 16px;
  }

  .input-field {
    margin-left: 10px;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  /* Button styles */
  .get-results-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .get-results-button:hover {
    background-color: #45a049;
  }

  /* Added equipment styles */
  .added-equipment {
    margin-top: 20px;
  }

  .added-equipment h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .added-equipment ul {
    margin-bottom: 10px;
  }

  .added-equipment li {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .added-equipment p {
    font-size: 16px;
    font-weight: bold;
  }

  /* Footer styles */
  .footer {
    margin-top: 40px;
    text-align: center;
    font-size: 14px;
    color: #777;
  }
</style>

