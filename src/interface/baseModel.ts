export interface RoleInfo {
  // 角色名称
  roleName: string;
  // 角色Id
  roleId: number | string;
}

export interface Result<T = any> {
  // 结果码
  code: number;
  // 结果状态
  type: "success" | "error" | "warning";
  // 结果消息
  message: string;
  // 结果数据
  result: T;
}
