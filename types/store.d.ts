import { RoleInfo } from "@/interface/baseModel";

/**
 * 用户登录信息
 * @export
 * @interface UserLoginInfo
 */
export interface UserLoginInfo {
  // 用户Id
  userId: number | string;
  // 用户名
  userName: string;
  // 用户昵称
  userNickname: string;
  // 用户头像
  userAvatar: string;
  // 用户角色
  userRole: RoleInfo[];
  // 用户状态
  userStatus: number | string;
  // 用户描述
  userDesc?: string;
}
