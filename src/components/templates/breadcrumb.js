import React from "react";
import { useEffect } from "react";
import Prism from "prismjs";

function BreadCrumb() {
    useEffect(() => {
        Prism.highlightAll()
    }, []);
    
    return <div className="breadcrumbTemplate">
        <h1>Breadcrumb</h1>
        <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>
        <h2>Example</h2>
        <div className="breadcrumbExample">
            <div className="box">General Motors</div>
            <div className="arrow-right"></div>
            <div className="inner"></div>
            <div className="box">Chevrolet</div>
            <div className="arrow-right"></div>
            <div className="inner"></div>
            <div className="box">Camaro</div>
            <div className="arrow-right"></div>
        </div>
        <pre>
            <code className="language-html">
            {`<div class="breadcrumbExample">
    <div class="box">General Motors</div>
    <div class="arrow-right"></div>
    <div class="inner"></div>
    <div class="box">Chevrolet</div>
    <div class="arrow-right"></div>
    <div class="inner"></div>
    <div class="box">Camaro</div>
    <div class="arrow-right"></div>
</div>`}
            </code>
        </pre>
        <pre>
      <code className="language-css">
          {`.breadcrumbExample{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .box{
        width:80px;
        padding: 5px 0;
        background-color:$purple2;
        color:white;
        font-size:.6rem;
        text-align:center;
        cursor: pointer;
        }
        .arrow-right{
        float:left;
        width:0; 
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left:10px solid $purple2;
        }
        .inner{
        float:left;
        width:0; 
        height: 0; 
        border-top: 10px solid $purple2;
        border-bottom: 10px solid $purple2; 
        border-left:10px solid transparent;
        margin-left:-7px;
        }
    }`}
      </code>
  </pre>
    </div>
}

export default BreadCrumb;