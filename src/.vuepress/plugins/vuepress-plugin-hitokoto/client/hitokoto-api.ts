import axios, { AxiosResponse } from "axios";

export interface Hitokoto {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who: null;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}
export interface VisitorInfo {
  success: boolean;
  time: string;
  week: string;
  ip: string;
  location: string;
  browser: string;
  browser_ver: string;
  system: string;
  low: string;
  high: string;
  tq: string;
  fl: string;
  tip: string;
}

// Converts JSON strings to/from your types
export class HitokotoApi {
  public static toHitokoto(json: string): Hitokoto {
    return JSON.parse(json);
  }

  public static HitokotoToJson(value: Hitokoto): string {
    return JSON.stringify(value);
  }
  public static request(): Promise<AxiosResponse<Hitokoto>> {
    return axios.get<Hitokoto>("https://v1.hitokoto.cn/");
  }
  /**
   * 请求接口：https://api.vvhan.com/api/visitor.info
   * return：{
            "success": true,
            "time": "2024-04-19 15:47:59",
            "week": "星期五",
            "ip": "122.96.141.169",
            "location": "江苏省-南京市",
            "browser": "Chrome",
            "browser_ver": "122.0.0.0",
            "system": "Windows 10",
            "low": "16°C",
            "high": "19°C",
            "tq": "雷阵雨",
            "fl": "东南风5-6级",
            "tip": "现在的温度比较凉爽~"
          }
   */
  public static requestVisitorInfo(): Promise<AxiosResponse<VisitorInfo>> {
    return axios.get<VisitorInfo>("https://api.vvhan.com/api/visitor.info");
  }
}
