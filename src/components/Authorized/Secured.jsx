/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React from 'react';
import CheckPermissions from './CheckPermissions';


const Exception403 = () => 403;

export const isComponentClass = (component) => {
  if (!component) return false;
  const proto = Object.getPrototypeOf(component);
  if (proto === React.Component || proto === Function.prototype) return true;
  return isComponentClass(proto);
};
// Determine whether the incoming component has been instantiated

const checkIsInstantiation = (target) => {
  if (isComponentClass(target)) {
    const Target = target;
    return (props) => <Target {...props} />;
  }

  if (React.isValidElement(target)) {
    return (props) => React.cloneElement(target, props);
  }

  return () => target;
};

const authorize = (authority, error) => {

  let classError = false;

  if (error) {
    classError = () => error;
  }

  if (!authority) {
    throw new Error('authority is required');
  }

  return function decideAuthority(target) {
    const component = CheckPermissions(authority, target, classError || Exception403);
    return checkIsInstantiation(component);
  };
};

export default authorize;
