<template>
  <div class="admin-page">
    <h1 class="title is-3 mt-5">Página de Administração</h1>

    <!-- Form for creating a new record -->
    <form @submit.prevent="createRecord" class="mb-4">
      <h2 class="title is-4 mt-5">Criar Novo Registro</h2>
      <div class="field">
        <label class="label" for="name">Nome:</label>
        <div class="control">
          <input type="text" id="name" class="input is-small" v-model="newRecord.name" required>
        </div>
      </div>
      <div class="field">
        <label class="label" for="description">Descrição:</label>
        <div class="control">
          <textarea id="description" class="textarea is-small" v-model="newRecord.description" required></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary">Criar</button>
        </div>
      </div>
    </form>

    <!-- Form for updating an existing record -->
    <form v-if="selectedRecord" @submit.prevent="updateRecord" class="mb-4">
      <h2 class="title is-4 mt-5">Editar Registro</h2>
      <div class="field">
        <label class="label" for="edit-name">Nome:</label>
        <div class="control">
          <input type="text" id="edit-name" class="input is-small" v-model="selectedRecord.name" required>
        </div>
      </div>
      <div class="field">
        <label class="label" for="edit-description">Descrição:</label>
        <div class="control">
          <textarea id="edit-description" class="textarea is-small" v-model="selectedRecord.description" required></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-primary">Atualizar</button>
        </div>
        <div class="control">
          <button @click="cancelUpdate" class="button is-danger">Cancelar</button>
        </div>
      </div>
    </form>

    <!-- Table to display existing records -->
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in records" :key="record.id">
          <td>{{ record.name }}</td>
          <td>{{ record.description }}</td>
          <td>
            <button @click="editRecord(record)" class="button is-primary is-small">Editar</button>
            <button @click="deleteRecord(record)" class="button is-danger is-small">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Administração-page',
  data() {
    return {
      newRecord: {
        name: '',
        description: '',
      },
      selectedRecord: null,
      records: [
        // Add your existing records here or fetch them from the database,
        // they should have properties: id, name, and description
      ],
    };
  },
  methods: {
    createRecord() {
      const newId = this.records.length + 1;
      const newRecord = {
        id: newId,
        name: this.newRecord.name,
        description: this.newRecord.description,
      };
      this.records.push(newRecord); // Add to array
      this.clearForm(); // Clear the form fields
    },
    updateRecord() {
      // Implement the logic to update the selected record
    },
    cancelUpdate() {
      this.selectedRecord = null;
    },
    editRecord(record) {
      this.selectedRecord = { ...record };
    },
    deleteRecord(record) {
      // Implement the logic to delete the record
    },
    clearForm() {
      this.newRecord.name = '';
      this.newRecord.description = '';
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 3rem;
}

.title.is-3 {
  margin-top: 0;
}

.mt-5 {
  margin-top: 2.5rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.table {
  margin-top: 2rem;
}

.input.is-small,
.textarea.is-small,
.button.is-small {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.button.is-small {
  margin-top: 0.5rem;
}

/* Custom Styles */
.admin-page {
  background-color: #e8f5e9; /* Green background color */
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.admin-page h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.admin-page h2 {
  font-size: 18px;
  margin-top: 20px;
}

.admin-page label {
  margin-left: 10px;
}

.admin-page input[type="text"],
.admin-page textarea {
  margin-bottom: 10px;
}

.admin-page button {
  margin-top: 10px;
  font-size: 16px;
}

.admin-page table {
  margin-top: 20px;
}

.admin-page th {
  font-weight: bold;
}

.admin-page td {
  vertical-align: middle;
}

.admin-page .button.is-small {
  margin-right: 5px;
}
</style>
