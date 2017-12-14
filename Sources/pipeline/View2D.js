import macro        from 'vtk.js/Sources/macro';
import AbstractView from './AbstractView';

// ----------------------------------------------------------------------------
// vtk2DView methods
// ----------------------------------------------------------------------------

function vtk2DView(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtk2DView');

  // Representation mapping
  publicAPI.getRepresentationType = (sourceType) => {
    if (sourceType === 'Volume') {
      return `Slice${'XYZ'[model.axis]}`;
    }
    if (sourceType === 'Geometry') {
      return sourceType;
    }
    return null;
  };

  publicAPI.updateOrientation = (axisIndex, orientation, viewUp) => {
    model.axis = axisIndex;
    model.orientation = orientation;
    model.viewUp = viewUp;
    const position = model.camera.getFocalPoint();
    position[model.axis] += model.orientation;
    model.camera.setPosition(...position);
    model.camera.setViewUp(...viewUp);
  };

  publicAPI.updateOrientation(model.axis, model.orientation, model.viewUp);
}

// ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

const DEFAULT_VALUES = {
  axis: 2,
  orientation: -1,
  viewUp: [0, 1, 0],
  useParallelRendering: true,
};

// ----------------------------------------------------------------------------

export function extend(publicAPI, model, initialValues = {}) {
  Object.assign(model, DEFAULT_VALUES, initialValues);

  AbstractView.extend(publicAPI, model, initialValues);
  macro.set(publicAPI, model, ['orientation']);

  // Object specific methods
  vtk2DView(publicAPI, model);
}
// ----------------------------------------------------------------------------

export const newInstance = macro.newInstance(extend, 'vtk2DView');

// ----------------------------------------------------------------------------

export default { newInstance, extend };
