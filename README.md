# Übung 4

1. Auslösen des @change-Events an der RadioButtonGroup in der BasemapChangerWidget.vue:

```javascript
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
```

2. changeBasemap-Methode zur BasemapChangerWidget.vue hinzufügen:

```javascript
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
```

3. In der BasemapChangerWidgetFactory.js an das changeBasemap-Event binden:

```javascript
vm.$on("change-basemap", (selectedId) => {
    basemapsModel.selectedId = selectedId;
});
```
