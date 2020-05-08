import { LinkProps } from "../router/types";

type LocationState = any;

// history中的location对象接口
export interface Location<S = LocationState> {
  pathname: string;
  match?: any;
  state?: S;
}
// link组件在跳转的时候有可能是路径string，也有可能是Location对象
export type LocationDescriptor = string | Location;

// export type History
export interface History {
  push: (to: LinkProps) => void;
}
