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

2. Entfernen der changeBasemap-Methode in der BasemapChangerWidget.vue:

```javascript
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

3. Import der _apprt-binding/Binding_-Klasse zur erzeugen eines Bindings

```javascript
import Binding from "apprt-binding/Binding";
```

3. Entfernen des _change-basemap_-Events und Verwendung eines Bindings:

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
