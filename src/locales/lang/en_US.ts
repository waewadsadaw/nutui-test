import { genMessage } from "../helper";
import vantLocale from "vant/es/locale/lang/en-US";

const modules = import.meta.glob("./en-US/**/*.ts", { eager: true }) as Record<
  string,
  Record<string, any>
>;

export default {
  message: {
    ...genMessage(modules, "en-US"),
    vantLocale,
  },
  momentLocale: null,
  momentLocaleName: "en",
};
