import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import BasemapChangerWidget from "./BasemapChangerWidget.vue";

export default class BasemapChangerWidgetFactory {

    createInstance() {

        const vm = new Vue(BasemapChangerWidget, {class: "basemapchanger-widget"});
        return VueDijit(vm);

    }

}
