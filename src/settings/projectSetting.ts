import type { ProjectConfig } from "#/config";
import { CacheTypeEnum } from "@/enums/cacheEnum";
import {
  ContentEnum,
  PermissionModeEnum,
  SessionTimeoutProcessingEnum,
} from "@/enums/appEnum";

const setting: ProjectConfig = {
  // 与权限相关的缓存存储在会话存储或本地存储中
  permissionCacheType: CacheTypeEnum.LOCAL,
  // 权限模式
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,
  // 会话超时处理
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,
  // 网站灰色模式，用于可能悼念的日期开启
  grayMode: false,
  // 是否打开弱色模式
  colorWeak: false,
  // 主题颜色
  //   themeColor: string,
  // 主题内容宽度
  contentMode: ContentEnum.FULL,
  // 否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
  openKeepAlive: true,
  // 是否使用全局错误捕获
  useErrorHandle: true,
  // 是否开启回到顶部
  useOpenBackTop: true,
  // 是否可以嵌入iframe页面
  canEmbedIFramePage: true,
  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: true,
  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: false,
};

export default setting;
