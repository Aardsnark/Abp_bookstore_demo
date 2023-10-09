<template>
    <div>
        <!-- Button to add a new record -->
        <v-btn color="primary" @click="openDialog">Add New Record</v-btn>

        <!-- Table to display the data -->
        <v-data-table :headers="headers"
                      :items="books"
                      :search="search">
            <template v-slot:item.actions="{ item }">
                <!-- Button to edit a record -->
                <v-icon @click="editRecord(item)">mdi-pencil</v-icon>

                <!-- Button to delete a record -->
                <v-icon @click="deleteRecord(item)">mdi-delete</v-icon>
            </template>
        </v-data-table>

        <!-- Dialog for adding/editing records -->
        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title>
                    {{ editMode ? 'Edit Record' : 'Add New Record' }}
                </v-card-title>
                <v-card-text>
                    <!-- Form for adding/editing a record -->
                    <v-form @submit.prevent="saveRecord">
                        <v-text-field v-model="editedRecord.name" label="Name"></v-text-field>
                        <v-text-field v-model="editedRecord.type" label="Type"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click="dialog = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" @click="saveRecord">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    /*import Abp from '@/wwwroot/libs/abp/core/abp.js'*/


    export default {
        name: 'Books',
        data: function () {
            return {
                loading: false,
                books: {
                    name: "placeholder name",
                    type: "placeholder type",
                    publishDate: "",
                    price: 0
                },
                dialog: false, // Dialog for adding/editing records
                editedRecord: {}, // Edited record data
                editMode: false // Flag to determine if we're editing an existing record
            };
        },

        methods: {
            // Function to open the dialog for adding a new record
            openDialog() {
                this.editMode = false;
                this.editedRecord = {
                    name: '', // Initialize with empty values
                    type: ''
                };
                this.dialog = true;
            },

            // Function to open the dialog for editing a record
            editRecord(item) {
                this.editMode = true;
                // Populate the editedRecord with the data of the selected item
                this.editedRecord = { ...item };
                this.dialog = true;
            },

            // Function to save a new or edited record
            saveRecord() {
                if (this.editMode) {
                    // Perform PUT request to update the record using API
                    // Update this.books array with the updated data if needed
                } else {
                    // Perform POST request to add a new record using API
                    // Add the new record to this.books array if needed
                }
                // Close the dialog
                this.dialog = false;
            },

            // Function to delete a record
            deleteRecord(item) {
                // Perform DELETE request to remove the record using API
                // Remove the record from this.books array if needed
            }
        },
        created: function () {
            console.log("created book page");
        },
        props: {
            authors: []
        }
    }

</script>
