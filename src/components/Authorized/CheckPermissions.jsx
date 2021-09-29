/* ---------------------------------- HACOUPIAN 360  ---------------------------------- *
- Author(s): AraNote
- Date Created: 1399/08/26-14:16
- ------------------------------------------------------------------------------------ *
- This file is bloc of job offer module.
- All of the Application manage by this .
- original
- ----------------------------------------------------------------------------------- */

import React from 'react';
import { CURRENT } from './renderAuthorize'; // eslint-disable-next-line import/no-cycle

import PromiseRender from './PromiseRender';

const checkPermissions = (authority, currentAuthority, target, Exception) => {
  // Retirement authority, return target;
  if (!authority) {
    return target;
  }

  if (Array.isArray(authority)) {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some((item) => authority.includes(item))) {
        return target;
      }
    } else if (authority.includes(currentAuthority)) {
      return target;
    }

    return Exception;
  }

  if (typeof authority === 'string') {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some((item) => authority === item)) {
        return target;
      }
    } else if (authority === currentAuthority) {
      return target;
    }

    return Exception;
  }

  if (authority instanceof Promise) {
    return <PromiseRender ok={target} error={Exception} promise={authority} />;
  }

  if (typeof authority === 'function') {
    const bool = authority(currentAuthority);

    if (bool instanceof Promise) {
      return <PromiseRender ok={target} error={Exception} promise={bool} />;
    }

    if (bool) {
      return target;
    }

    return Exception;
  }

  throw new Error('unsupported parameters');
};

export { checkPermissions };

function check(authority, target, Exception) {
  return checkPermissions(authority, CURRENT, target, Exception);
}

export default check;
