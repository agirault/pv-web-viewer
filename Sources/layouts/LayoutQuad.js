import React from 'react';
import PropTypes from 'prop-types';

import Layout2D from './Layout2D';
import Layout3D from './Layout3D';
import style from './vtk-layout.mcss';

export default function LayoutQuad(props) {
  return (
    <div className={`${style.quadRoot} ${props.className}`}>
      <div className={style.splitRow}>
        <div className={style.view}>
          <Layout2D
            title="-Z+X"
            orientations={[]}
            axis={1}
            orientation={1}
            viewUp={[1, 0, 0]}
            proxyManager={props.proxyManager}
          />
        </div>
        <div className={style.view}>
          <Layout3D proxyManager={props.proxyManager} />
        </div>
      </div>
      <div className={style.splitRow}>
        <Layout2D
          title="-Z+Y"
          orientations={[]}
          axis={0}
          orientation={1}
          viewUp={[0, 1, 0]}
          proxyManager={props.proxyManager}
        />
        <Layout2D
          title="+X+Y"
          orientations={[]}
          axis={2}
          orientation={1}
          viewUp={[0, 1, 0]}
          proxyManager={props.proxyManager}
        />
      </div>
    </div>
  );
}

LayoutQuad.propTypes = {
  proxyManager: PropTypes.object,
  className: PropTypes.string,
};

LayoutQuad.defaultProps = {
  proxyManager: null,
  className: '',
};
