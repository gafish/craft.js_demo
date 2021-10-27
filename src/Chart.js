import { Editor, Frame, Element, useEditor, useNode } from '@craftjs/core'
import './Chart.css'

const defaultProps = {
  bgColor: '#000'
}

function Chart(props = defaultProps) {
  const {
    connectors: { connect, drag },
  } = useNode()
  return (
    <div
      className="chart"
      style={{ backgroundColor: props.bgColor }}
      ref={ref => {
        connect(ref)
        drag(ref)
      }}
    >
      这是一个图表示例
    </div>
  )
}

function ChartSettings() {
  const {
    actions: { setProp },
    props
  } = useNode(node => ({ props: node.data.props, }))
  return (
    <div>
      背景颜色：
      <input
        value={props.bgColor}
        onChange={e => setProp(props => props.bgColor = e.target.value)}
      />
    </div>
  )
}

Chart.craft = {
  props: defaultProps,
  related: {
    settings: ChartSettings
  }
}

export default Chart
