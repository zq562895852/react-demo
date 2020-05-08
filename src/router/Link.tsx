// 实现Link组件
import React, { Component } from "react";

import RouterContext from "./context";
import { LinkProps } from "./types";
export default class Link extends Component<LinkProps> {
  static contextType = RouterContext;
  handlePush = (event: React.MouseEvent) => {
    event.preventDefault();
    const history = this.context;
    history.push(this.props.to);
  };
  render() {
    return (
      <a onClick={this.handlePush} {...this.props}>
        {this.props.children}
      </a>
    );
  }
}
