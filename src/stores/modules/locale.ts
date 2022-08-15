import type { LocaleSetting, LocaleType } from "#/config";

import { defineStore } from "pinia";
import { store } from "@/stores";
import { LOCALE } from "@/settings/localeSetting";

import { LOCALE_KEY } from "@/enums/cacheEnum";
import { createLocalStorage } from "@/utils/cache";
import { localeSetting } from "@/settings/localeSetting";

const ls = createLocalStorage();

const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting;

interface LocaleState {
  localInfo: LocaleSetting;
}

export const useLocaleStore = defineStore({
  id: "app-locale",
  state: (): LocaleState => ({
    localInfo: lsLocaleSetting,
  }),
  getters: {
    getShowPicker(): boolean {
      return this.localInfo.showPicker;
    },
    getLocale(): LocaleType {
      return this.localInfo.locale ?? LOCALE.ZH_CN;
    },
  },
  actions: {
    // 设置多语言信息和缓存
    setLocaleInfo(info: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...info };
      ls.set(LOCALE_KEY, this.localInfo);
    },
    // 初始化多语言信息并从本地缓存加载现有配置
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo,
      });
    },
  },
});

export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
