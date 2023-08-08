<template>
  <div>
    <Header />
    <div class="container">
      <div class="section">
        <div class="columns is-multiline">
          <div class="column is-6" v-for="(category, categoryName) in equipmentData" :key="categoryName">
            <h3 class="title is-4 has-text-primary">{{ categoryName }}</h3>
            <div class="box">
              <div class="columns is-multiline">
                <div v-for="(equipment, equipmentName) in category" :key="equipmentName" class="column is-6">
                  <div class="equipment-info">
                    <label class="subtitle is-6 has-text-weight-bold">{{ equipmentName }}</label>
                    <div class="count-container">
                      <button type="button" class="button is-small is-danger"
                        @click="decrementEquipment(categoryName, equipmentName)">-</button>
                      <input type="number" class="input is-small" v-model="equipment.count">
                      <button type="button" class="button is-small is-success"
                        @click="incrementEquipment(categoryName, equipmentName)">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="button is-primary is-large get-results-button" @click="getResults">Get Results</button>
    </div>
    <div class="section" v-if="showResults">
      <h3 class="title is-4 has-text-primary">Added Equipment:</h3>
      <ul>
        <li v-for="(count, name) in formattedAddedEquipment" :key="name">{{ name }}: {{ count }}</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>




<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      equipmentData: {
        smallEquipment: {
          kitchenAppliance: { count: 0 },
          heatingVentilation: { count: 0 },
          microwave: { count: 0 },
          vacuumCleaner: { count: 0 },
          personalCare: { count: 0 },
          other: { count: 0 },
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
          other: { count: 0 },
        },
      },
      showResults: false,
      addedEquipment: {},
    };
  },
  computed: {
    equipmentNames() {
      return {
        kitchenAppliance: 'Kitchen Appliance',
        heatingVentilation: 'Heating Ventilation',
        microwave: 'Microwave',
        vacuumCleaner: 'Vacuum Cleaner',
        personalCare: 'Personal Care',
        other: 'Other',
        crtTvMonitor: 'CRT TV/Monitor',
        lcdTvMonitor: 'LCD TV/Monitor',
        dishwasher: 'Dishwasher',
        washingMachine: 'Washing Machine',
        clothesDryer: 'Clothes Dryer',
        fridge: 'Fridge',
        freezer: 'Freezer',
        airConditioning: 'Air Conditioning',
        fluorescenceTube: 'Fluorescence Tube',
        lithiumIon: 'Lithium-ion Battery',
        nickelBased: 'Nickel-based Battery',
        alkaline: 'Alkaline Battery',
        mobilePhone: 'Mobile Phone',
        laptop: 'Laptop',
        printer: 'Printer',
        router: 'Router',
        other: 'Other',
      };
    },
    formattedAddedEquipment() {
      const formattedEquipment = {};
      for (const equipment in this.addedEquipment) {
        const friendlyName = this.equipmentNames[equipment];
        formattedEquipment[friendlyName] = this.addedEquipment[equipment];
      }
      return formattedEquipment;
    },

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
      let totalCount = 0;
      for (const category in this.equipmentData) {
        for (const equipment in this.equipmentData[category]) {
          const count = this.equipmentData[category][equipment].count;
          if (count > 0) {
            this.addedEquipment[equipment] = count;
            totalCount += count;
          }
        }
      }
      if (totalCount <= 10) {
        this.showResults = `Your carbon footprint is small. Keep up the good work!`;
      } else if (totalCount <= 15) {
        this.showResults = `Your carbon footprint is medium. But you still need to reduce it. Try using less electronics.`;
      } else {
        this.showResults = `Your carbon footprint is high. Consider reducing the number of electronics to lower your impact.`;
      }
    }
  },
};
</script>

<style>

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Roboto", sans-serif;
}

.box {
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 20px;
}

.count-container {
  display: flex;
  align-items: center;
}

.count-container button {
  margin: 0 5px;
}

.results-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.get-results-button {
  padding: 12px 24px;
  font-size: 20px;
}

.added-equipment {
  margin-top: 30px;
}

.added-equipment h3 {
  font-weight: bold;
  color: #3498db;
}

.added-equipment ul {
  list-style: none;
  padding: 0;
}

.added-equipment li {
  margin-bottom: 5px;
}

</style>