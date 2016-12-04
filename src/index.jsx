import React, { PropTypes } from 'react';
import drawCanvas from './react-dipper.js';

class ReactDipper extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    let me = this;
    me.props.param.css.width = me.props.param.css.width ? me.props.param.css.width : "100%";
    me.props.param.css.height = me.props.param.css.height ? me.props.param.css.height : "100%";
  }

  componentDidMount(){
    let me = this;
    let obj = me.props.param;
    let { canvas } = me.refs;
    drawCanvas(canvas, obj);
  }

  render() {
    let me = this;
    return <canvas style={me.props.param.css} ref="canvas"/>
}
};

export default ReactDipper;
