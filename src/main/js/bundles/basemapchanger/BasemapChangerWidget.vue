<!--

    Copyright (C) 2023 con terra GmbH (info@conterra.de)

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

            http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

-->
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
                />
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
