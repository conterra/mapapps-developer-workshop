<template>
    <v-container grid-list-md>
        <v-layout
            row
            wrap
        >
            <v-radio-group
                v-model="selectedId"
                @change="changeBasemap"
            >
                <v-radio
                    v-for="basemap in basemaps"
                    :key="basemap.id"
                    :label="basemap.title"
                    :value="basemap.id"
                    color="primary"
                ></v-radio>
            </v-radio-group>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        components: {},
        data: function () {
            return {
                selectedId: undefined,
                basemaps: []
            };
        },
        methods: {
            changeBasemap: function () {
                this.$emit("change-basemap", this.selectedId);
            }
        }
    };
</script>
