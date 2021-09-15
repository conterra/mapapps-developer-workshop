import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import BasemapChangerWidget from "./BasemapChangerWidget.vue";

export default class BasemapChangerWidgetFactory {

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
        vm.selectedId = basemapsModel.selectedId;
        return VueDijit(vm);
    }

}
