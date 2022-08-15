<template>
  <div>
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
      :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete"
      @change-detail="onChangeDetail" />
    <van-button type="primary">{{ t('common.button.primary') }}</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger" v-on:click="changeLang">危险按钮</van-button>
  </div>
</template>
<script lang="ts" setup>
import { LocaleType } from '#/config';
import { useLocale } from '@/locales/useLocale';
import { Locale } from 'vant';
import { useI18n } from "@/hooks/web/useI18n";
import { Toast } from 'vant';
import { ref } from 'vue';
import { areaList } from '@vant/area-data';

const { t } = useI18n();

const { changeLocale, getLocale, getVantdLocale } = useLocale();
async function changeLang() {
  if (getLocale.value == "en_US") {
    await changeLocale("zh_CN").then((res: LocaleType) => {
      Locale.use(res, getVantdLocale.value);
    });
  } else {
    await changeLocale("en_US").then((res: LocaleType) => {
      Locale.use(res, getVantdLocale.value);
    });
  }
};
interface ISearchResult {
  name: string;
  address: string;
}
const searchResult = ref<ISearchResult[]>([]);

const onSave = () => Toast('save');
const onDelete = () => Toast('delete');
const onChangeDetail = (val) => {
  if (val) {
    searchResult.value = [
      {
        name: '黄龙万科中心',
        address: '杭州市西湖区',
      },
    ];
  } else {
    searchResult.value = [];
  }
};
</script>