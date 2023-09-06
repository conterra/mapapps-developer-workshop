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
    <v-container
        grid-list-md
        :class="{selected: isSelected}"
        @click="$emit('change-basemap')">
        <v-layout
            row
            wrap
        >
            <basemap
                v-for="basemap in basemaps"
                :id="basemap.id"
                :key="basemap.id"
                :title="basemap.title"
                :is-selected="basemap.id === selectedId"
                class="basemapEntry"
                @change-basemap="selectedId = basemap.id"
            />
            <v-flex md12>
                {{ title }}
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import Bindable from "apprt-vue/mixins/Bindable";
    import Basemap from "./Basemap.vue";

    export default {
        components: {
            basemap: Basemap
        },
        mixins: [Bindable],
        props: {
            id: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },
            isSelected: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                selectedId: undefined,
                basemaps: []
            };
        }
    };
</script>

