<template>
    <div class="admin-page" style="margin-top: 2rem;">
      <h1 class="title is-3 mt-5">Administration Page</h1>
  
      <!-- Form for creating a new record -->
        <form @submit.prevent="createRecord" class="mb-4">
            <h2 class="title is-4 mt-5">Create New Record</h2>
            <div class="field">
                <label class="label">Name:</label>
                <div class="control">
                    <input type="text" class="input is-small" v-model="newRecord.name" required>
                </div>
            </div>
            <div class="field">
                <label class="label">Description:</label>
                <div class="control">
                    <textarea class="textarea is-small" v-model="newRecord.description" required></textarea>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button type="submit" class="button is-success">Create</button>
                </div>
            </div>
        </form>
    
      <!-- Table to display existing records -->
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="record in records" :key="record.id">
                    <td>{{ record.name }}</td>
                    <td>{{ record.description }}</td>
                    <td>
                        <button @click="editRecord(record)" class="button is-success is-small">Edit</button>
                        <button @click="deleteRecord(record)" class="button is-danger is-small">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
  export default {
    name: 'AdminView',
    data() {
      return {
        newRecord: {
          name: '',
          description: '',
        },
        records: [
          {
            id: 1,
            name: 'Milu',
            description: 'Polui menos mas come carne',
          },
          {
            id: 2,
            name: 'Mimi',
            description: 'Polui menos mas come carne',
          },
          {
            id: 3,
            name: 'Mili',
            description: 'Polui menos mas come carne',
          },
        ],
      };
    },
    methods: {
      createRecord() {
        this.records.push({
          id: this.records.length + 1,
          name: this.newRecord.name,
          description: this.newRecord.description,
        });
        this.clearForm();
      },
      editRecord(record) {
        this.newRecord = Object.assign({}, record);
      },
      deleteRecord(record) {
        const index = this.records.findIndex(rec => rec.id === record.id);
        if (index !== -1) {
          this.records.splice(index, 1);
        }
      },
      clearForm() {
        this.newRecord.name = '';
        this.newRecord.description = '';
      },
    },
  };
</script>
  
<style scoped>
.admin-page {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
  
.title.is-3 {
    margin-top: 0;
    color: #333;
}
  
.title.is-4 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
}
  
.field {
    margin-bottom: 1.5rem;
}
  
.label {
    font-weight: bold;
    display: block;
}
  
.control {
    margin-top: 0.5rem;
}
  
.button.is-primary {
    background-color: #4a90e2;
    color: #fff;
}
  
.button.is-danger {
    background-color: #ff3860;
    color: #fff;
}
  
.table {
    margin-top: 2rem;
    width: 100%;
    border-collapse: collapse;
}
  
.table th {
    font-weight: bold;
    text-align: left;
    padding: 0.75rem;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ddd;
}
  
.table td {
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
}
  
.button.is-small {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
}
  
.input.is-small,
.textarea.is-small {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
}
</style>