# Übung 5

1. Entfernen des @change-Events von der RadioButtonGroup in der BasemapChangerWidget.vue:

```javascript
<v-radio-group
    v-model="selectedId"
>
    <v-radio
        v-for="basemap in basemaps"
        :key="basemap.id"
        :label="basemap.title"
        :value="basemap.id"
        color="primary"
    ></v-radio>
</v-radio-group>
```

2. Entfernen der changeBasemap-Methode in der BasemapChangerWidget.vue und hinzufügen des Bindable-Mixins:

```javascript
import Bindable from "apprt-vue/mixins/Bindable";
    
export default {
    components: {},
    mixins: [Bindable],
    data: function () {
        return {
            selectedId: undefined,
            basemaps: []
        };
    }
};
```

3. Import der _apprt-binding/Binding_-Klasse in der BasemapChangerWidgetFactory.js zur erzeugen eines Bindings

```javascript
import Binding from "apprt-binding/Binding";
```

4. Entfernen des _change-basemap_-Events und Verwendung eines Bindings:

```javascript
createInstance() {
    const basemapsModel = this._basemapsModel;
    const basemaps = basemapsModel.basemaps.map((basemap) => {
        return {
            id: basemap.id,
            title: basemap.title
        }
    });

    const vm = new Vue(BasemapChangerWidget);
    vm.basemaps = basemaps;

    Binding.for(vm, basemapsModel)
        .syncAll("selectedId")
        .enable()
        .syncToLeftNow();

    return VueDijit(vm, {class: "basemapchanger-widget"});
}
```
5. Hinzufügen der _apprt-binding_ dependency zur manifest.json

```json
"dependencies": {
    "esri": "^4.14.0",
    "apprt-vue": "^4.14.0",
    "apprt-vuetify": "^4.14.0",
    "apprt-binding": "^4.14.0",
    "map-basemaps-api": "^4.14.0"
}
```
