import React from "react";
// location的接口类型
import { Location } from "../history";
import { ContextValue } from "./types";
import RouterContext from "./context";

interface Props {}

interface State {
  location: Location;
}
export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) //这个要设置，否则刷新组件会丢失
      }
    };
  }
  componentDidMount() {
    window.addEventListener("hashchange", (event: HashChangeEvent) => {
      console.log(event);
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || "/" //截取路径中  #/path 去除#号 默认值给根路径
        }
      });
    });
    // 如果没有就给一个根路径,如果不给hash不会触发hashchange事件pathname就是空的，无法和路由中的path字段的 /根组件匹配
    window.location.hash = window.location.hash || "/";
  }
  render() {
    let contextValue: ContextValue = {
      location: this.state.location
    };
    return (
      <RouterContext.Provider value={contextValue}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
