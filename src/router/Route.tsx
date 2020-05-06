import React from "react";
// location的接口类型
import { Location } from "../history";
import { ContextValue } from "./types";
import RouterContext from "./context";

interface Props {
  path: string;
  component: any;
}

interface State {
  location: Location;
}
export default class extends React.Component<Props, State> {
  // 这个是把RouterContext中的pathname挂载到this.context上，这个是内部实现的，而且必须是contextType静态属性
  static contextType = RouterContext;
  render() {
    let { path, component: RouteComponent } = this.props;

    let pathname = this.context.location.pathname;
    // 如果路由路径和当前location中的pathname相同则渲染当前的组件
    console.log("pathname", pathname);
    console.log("path", path);
    if (pathname === path) {
      console.log("wei");
      return <RouteComponent></RouteComponent>;
    }
    return null;
  }
}
