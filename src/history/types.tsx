type LocationState = any;

// history中的location对象接口
export interface Location<S = LocationState> {
  pathname: string;
  state?: S;
}
