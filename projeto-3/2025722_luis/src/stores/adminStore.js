// import { defineStore } from 'pinia';

// export const useAdminStore = defineStore({
//   id: 'admin',
//   state: () => ({
//     newRecord: {
//       name: '',
//       description: '',
//     },
//     selectedRecord: null,
//     records: [
//       {
//         id: 1,
//         name: 'Kaila',
//         description: 'Desaajsh sj s cjs shj js snsknsnk',
//       },
//       {
//         id: 2,
//         name: 'joao',
//         description: 'maratatvbxiankalmlxmmcj knknk skxlkmsmlkmkkmk sl ',
//       },
//       {
//         id: 3,
//         name: 'Mimi',
//         description: 'NANNANNknkNKNnKNKN>NnjknKNkjn',
//       },
//     ],
//   }),
//   actions: {
//     createRecord() {
//       const newId = this.records.length + 1;
//       const newRecord = {
//         id: newId,
//         name: this.newRecord.name,
//         description: this.newRecord.description,
//       };
//       this.records.push(newRecord);
//       this.clearForm();
//     },
//     updateRecord() {
//       const index = this.records.findIndex((record) => record.id === this.selectedRecord.id);
//       if (index !== -1) {
//         this.records[index].name = this.selectedRecord.name;
//         this.records[index].description = this.selectedRecord.description;
//       }
//       this.cancelUpdate();
//     },
//     cancelUpdate() {
//       this.selectedRecord = null;
//     },
//     editRecord(record) {
//       this.selectedRecord = { ...record };
//     },
//     deleteRecord(record) {
//       const index = this.records.findIndex((rec) => rec.id === record.id);
//       if (index !== -1) {
//         this.records.splice(index, 1);
//       }
//     },
//     clearForm() {
//       this.newRecord.name = '';
//       this.newRecord.description = '';
//     },
//   },
// });