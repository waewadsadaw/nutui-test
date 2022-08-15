export interface GlobEnvConfig {
  // 网站标题
  VITE_GLOB_APP_TITLE: string;
  // 服务接口网址
  VITE_GLOB_API_URL: string;
  // 服务接口 URL 前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  // 项目缩写
  VITE_GLOB_APP_SHORT_NAME: string;
  // 上传网址
  VITE_GLOB_UPLOAD_URL?: string;
}

export interface GlobConfig {
  // 网站标题
  title: string;
  // 服务接口网址
  apiUrl: string;
  // 服务接口 URL 前缀
  urlPrefix?: string;
  // 项目缩写
  shortName: string;
  // 上传网址
  uploadUrl?: string;
}

export interface ProjectConfig {
  // 权限相关信息的存储位置
  permissionCacheType: CacheTypeEnum;
  // 权限模式
  permissionMode: PermissionModeEnum;
  // 会话超时处理
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum;
  // 网站灰色模式，用于可能悼念的日期开启
  grayMode: boolean;
  // 是否打开弱色模式
  colorWeak: boolean;
  // 主题颜色
  // themeColor: string;
  // 主题内容宽度
  contentMode: ContentEnum;
  // 否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
  openKeepAlive: boolean;
  // 是否使用全局错误捕获
  useErrorHandle: boolean;
  // 是否开启回到顶部
  useOpenBackTop: boolean;
  // 是否可以嵌入iframe页面
  canEmbedIFramePage: boolean;
  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: boolean;
  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: boolean;
}

export type LocaleType = "zh_CN" | "en_US" | "ru" | "ja" | "ko";

export interface LocaleSetting {
  showPicker: boolean;
  // 当前语言
  locale: LocaleType;
  // 默认语言
  fallback: LocaleType;
  // 可用的区域设置
  availableLocales: LocaleType[];
}
