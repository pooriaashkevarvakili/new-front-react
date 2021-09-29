/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/11/12-16:34
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './styles.css';


const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MyNode = ({ nodeData }) => {
  const [state,setState]=useState({
    html:[]
                                  })
  const selectNode = () => {

  };
  const handleChange = function(event){
    setState({html: event.target.value});
  }.bind(this);
  return (
    <div>
      <div html={state.html} onChange={handleChange} contenteditable="true" className="position">{nodeData.title}</div>
      <span   className="fullname ">{nodeData.name}</span>
    </div>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;
