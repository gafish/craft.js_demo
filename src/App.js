import React from 'react'
import { Editor, Frame, Element, useEditor, useNode } from '@craftjs/core'
import './App.css'

import Chart from './Chart'

function App() {
  return (
    <Editor resolver={{ Chart }}>
      <Main />
    </Editor>
  )
}

function Main() {
  const {
    connectors: { create },
    selected,
  } = useEditor(state => ({
    selected: state.nodes[state.events.selected],
  }))
  return (
    <div className="app">
      <div className="head">
        <div className="item" ref={ref => create(ref, <Chart />)}>折线图</div>
        <div className="item">饼图</div>
      </div>
      <div className="container">

        <Frame>
            <Element is="div" className="main" canvas>
            </Element>
        </Frame>
        
        <div className="sider">
          <div className="title">配置栏</div>
          {
            selected && 
            selected.related && 
            selected.related.settings && 
            React.createElement(selected.related.settings)
          }
        </div>
      </div>
    </div>
  )
}

export default App
