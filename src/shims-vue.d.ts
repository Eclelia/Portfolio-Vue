//https://stackoverflow.com/a/70803320/13770966
declare module "*.vue" {
    import { defineComponent } from "vue";
    const component: ReturnType<typeof defineComponent>;
    export default component;
}
  