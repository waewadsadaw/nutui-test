import type { UserLoginInfo } from "#/store";
import type { RoleEnum } from "@/enums/RoleEnum";
import { getAuthCache, setAuthCache } from "@/utils/auth";
import { defineStore } from "pinia";
import { ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from "@/enums/cacheEnum";

interface UserState {
  // 用户登录信息
  userInfo: Nullable<UserLoginInfo>;
  // token
  token?: string;
  // 用户角色
  roleList: RoleEnum[];
  // 登录是否已过期
  sessionTimeout?: boolean;
  // 上次提取时间
  lastUpdateTime: number;
}

export const userStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    userInfo: null,
    token: undefined,
    roleList: [],
    sessionTimeout: false,
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): UserLoginInfo {
      return this.userInfo || getAuthCache<UserLoginInfo>(USER_INFO_KEY) || {};
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY) || "";
    },
    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0
        ? this.roleList
        : getAuthCache<RoleEnum[]>(ROLES_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    },
  },
  actions: {
    setUserInfo(info: UserLoginInfo | null) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
      setAuthCache(USER_INFO_KEY, info);
    },
    setToken(token: string | undefined) {
      this.token = token ? token : "";
      setAuthCache(TOKEN_KEY, token);
    },
    setRoleList(roleList: RoleEnum[]) {
      this.roleList = roleList;
      setAuthCache(ROLES_KEY, roleList);
    },
    setSessionTimeout(timeout: boolean) {
      this.sessionTimeout = timeout;
    },
    resetState() {
      this.userInfo = null;
      this.token = undefined;
      this.roleList = [];
      this.sessionTimeout = false;
    },
  },
});
