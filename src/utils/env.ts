import { getConfigFileName } from "../../build/getConfigFileName";
import type { GlobEnvConfig } from "#/config";
import pkg from "../../package.json";
import { warn } from "@/utils/log";

/**
 * 获取通用存储环境变量
 * @returns {string}
 * @memberof Env
 * @description 获取通用存储环境变量
 * @example getCommonStoragePrefix()
 */
export function getCommonStoragePrefix(): string {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppEnvConfig();
  return `${VITE_GLOB_APP_SHORT_NAME}__${getEnv()}`.toUpperCase();
}

/**
 * 根据版本生成缓存密钥
 * @returns {string}
 * @memberof Env
 * @description 根据版本生成缓存密钥
 * @example getStorageShortName()
 */
export function getStorageShortName(): string {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase();
}

export function getAppEnvConfig() {
  const ENV_NAME = getConfigFileName(import.meta.env);

  const ENV = (import.meta.env.DEV
    ? // 获取全局配置（打包时将独立提取配置）
      (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME as any]) as unknown as GlobEnvConfig;

  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  } = ENV;

  if (!/^[a-zA-Z\_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME 变量只能是字符/下划线，请在环境中修改变量并重新运行.`
    );
  }

  return {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  };
}

/**
 * @description: development mode
 */
export const devMode = "development";

/**
 * @description: production mode
 */
export const prodMode = "production";

/**
 * 获取环境变量
 * @returns {string}
 * @memberof Env
 * @description 获取环境变量
 * @example getEnv()
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

/**
 * 是否开发模式
 * @returns {boolean}
 * @memberof Env
 * @description 是否开发模式
 * @example isDevMode()
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * 是否生产模式
 * @returns {boolean}
 * @memberof Env
 * @description 是否生产模式
 * @example isProdMode()
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}
