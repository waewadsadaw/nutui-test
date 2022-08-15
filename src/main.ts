import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Toast
import { Toast } from "vant";
import "vant/es/toast/style";

// Dialog
import { Dialog } from "vant";
import "vant/es/dialog/style";

// Notify
import { Notify } from "vant";
import "vant/es/notify/style";

import { AddressEdit } from "vant";
import "vant/es/address-edit/style";

// ImagePreview
import { ImagePreview } from "vant";
import "vant/es/image-preview/style";

import { setupI18n } from "@/locales/setupI18n";
async function bootstrap() {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);
  app.use(Toast);
  app.use(Dialog);
  app.use(Notify);
  app.use(AddressEdit);
  app.use(ImagePreview);
  await setupI18n(app);
  app.mount("#app");
}

bootstrap();
