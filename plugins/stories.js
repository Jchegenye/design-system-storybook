import Vue from "vue";
import MyButton from "~/components/Button/Button.vue";

const components = { MyButton };

Object.entries(components).forEach(([name, component]) => {
	Vue.component(name, component);
});
//Vue.use(MyButton);
