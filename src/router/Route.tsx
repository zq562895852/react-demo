import React, { ComponentType, ReactElement } from "react";
// location的接口类型
import { Location, History } from "../history";
import { ContextValue, RouteComponentProps } from "./types";
import RouterContext from "./context";
// 解析路径参数的
import { pathToRegexp, Key } from "path-to-regexp";

// type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;react内部定义的 泛型p是组件的props类型
interface Props {
  path: string;
  component: any; //组件类型，可以是函数组件也可以是类组件
  exact?: boolean;
}

interface State {
  location: Location;
  history?: History;
}

interface ConponentProps {}

export default class extends React.Component<Props, State> {
  // 这个是把RouterContext中的pathname挂载到this.context上，这个是内部实现的，而且必须是contextType静态属性
  static contextType = RouterContext;
  render() {
    const { location } = this.context;
    let { path = "/", component: RouteComponent, exact = false } = this.props;

    let pathname = this.context.location.pathname;
    // 如果路由路径和当前location中的pathname相同则渲染当前的组件
    let paramsArray: Array<Key> = [];
    // 和path相关的正则，end是true全匹配，false非全匹配
    let reg = pathToRegexp(path, paramsArray, { end: exact });
    // 如果匹配了则result返回数组
    let result = pathname.match(reg);
    console.log(result);
    let routerProps = {
      location
    };
    if (result) {
      return <RouteComponent {...routerProps}></RouteComponent>;
    }
    return null;
  }
}
