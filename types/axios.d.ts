export type ErrorMessageMode = "none" | "modal" | "message" | undefined;
export interface RequestOptions {
  // post请求的时候添加参数到url
  joinParamsToUrl?: boolean;
  // 格式化提交参数时间
  formatDate?: boolean;
  // 是否处理请求结果
  isTransformResponse?: boolean;
  // 是否返回本机响应标头
  // 例如：当您需要获取响应标头时，请使用此属性
  isReturnNativeResponse?: boolean;
  // 是否加入网址
  joinPrefix?: string;
  // 接口地址
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // 错误消息提示类型
  errorMessageMode?: ErrorMessageMode;
  // 是否添加时间戳
  isJoinTimeStamp?: boolean;
  // 忽略重复请求
  ignoreCancelToken?: boolean;
  // 是否在标头中发送令牌
  withToken?: boolean;
}

export interface Result<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  message: string;
  result: T;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  data?: Recordable;
  name?: string;
  file: File | Blob;
  fileName?: string;
  [key: string]: any;
}
