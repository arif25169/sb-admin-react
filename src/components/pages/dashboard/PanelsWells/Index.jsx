import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PrePanelsWells = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./PanelsWells.jsx'),

  preRender: function () {
  	return <div>Loading Panels and Wells...</div>;
  }
});

export default PrePanelsWells;