import React, { Component, useState } from "react";
import { Mobile } from "./mobile";
import { Web } from "./web";
import "./styles.scss"

export default class TopNavBar extends Component {

  render(): React.ReactNode {
    const [isOpen, setIsOpen] = useState(false);

      return (
        <div className="container"> 
          <div className="logo"></div>
          <div className="menu"></div>
          <div className="web-menu">
            <Web />  
          </div>
          <div className="mobile-menu">
            <div onClick={() => setIsOpen(!isOpen)}>
              <i className="fi fi-rr-apps"></i>
            </div>
            {isOpen && <Mobile />}
          </div>
        </div>
      )
  }
}