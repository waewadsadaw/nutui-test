import { genMessage } from "../helper";
import vantLocale from "vant/es/locale/lang/zh-CN";
import momentLocale from "moment/dist/locale/zh-cn";

const modules = import.meta.glob("./zh-CN/**/*.ts", { eager: true }) as Record<
  string,
  Record<string, any>
>;
export default {
  message: {
    ...genMessage(modules, "zh-CN"),
    vantLocale,
  },
  momentLocale,
  momentLocaleName: "zh-cn",
};
