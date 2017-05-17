import React from 'react';
import PropTypes from 'prop-types';
import merge from 'merge';
import drawCanvas from './react-dipper.js';

const defaultParticle = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#56e2ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#56e2ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
};

const defaultStyle = {
  "display": 'flex',
  "width": "100%",
  "height": "100%",
  "backgroundColor": "#102e43",
};


class ReactDipper extends React.Component {
  constructor(props){
    super(props);
    let me = this;
  }

  componentWillMount(){
    let me = this;
    me.style = merge(true, defaultStyle, me.props.styleParams);
  }

  componentWillReceiveProps(nextProps){
    let me = this;
    // wondering whether it's necessary to use state here.
  }

  componentDidMount(){
    let me = this;
    let { canvas } = me.refs;
    drawCanvas(canvas, me.props.particleParams);
  }

  render() {
    let me = this;
    return <canvas style={me.style} ref="canvas"/>
  }
}

ReactDipper.propTypes = {
  particleParams: PropTypes.object,
  styleParams: PropTypes.object,
};
ReactDipper.defaultProps = {
  particleParams: defaultParticle,
  styleParams: defaultStyle,
};

export default ReactDipper;
