/**
 * 获取配置文件变量名称
 * @param env
 * @returns {string}
 * @memberof getConfigFileName
 * @description 获取配置文件变量名称
 * @example getConfigFileName('dev')
 */
export const getConfigFileName = (env: Record<string, any>): string => {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || "__APP"}__CONF__`
    .toUpperCase()
    .replace(/\s/g, "");
};
