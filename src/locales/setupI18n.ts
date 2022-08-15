import type { App } from "vue";
import type { I18n, I18nOptions } from "vue-i18n";

import { createI18n } from "vue-i18n";
import { setHtmlPageLang, setLoadLocalePool } from "./helper";
import { localeSetting } from "@/settings/localeSetting";
import { useLocaleStoreWithOut } from "@/stores/modules/locale";

const { fallback, availableLocales } = localeSetting;

export let i18n: ReturnType<typeof createI18n>;

async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStoreWithOut();
  const locale = localeStore.getLocale;
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};

  setHtmlPageLang(locale);
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale);
  });

  return {
    legacy: false,
    locale,
    fallbackLocale: fallback,
    messages: {
      [locale]: message,
    },
    availableLocales: availableLocales,
    sync: true, // 如果不想从全局范围继承区域设置，则需要将 i18n 组件选项的同步设置为 false。
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  };
}

// 设置 i18n 实例与 glob
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  i18n = createI18n(options) as I18n;
  app.use(i18n);
}
