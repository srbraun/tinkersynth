// @flow
import React, { useContext } from 'react';
import styled from 'styled-components';

import { UNIT } from '../../../constants';

import { InstrumentCluster } from '../../ControlPanel';
import SliderControl from '../../SliderControl';
import ToggleControl from '../../ToggleControl';
import Spacer from '../../Spacer';
import { SlopesContext } from '../SlopesState';
import PerspectiveVisualization from './PerspectiveVisualization';
import OcclusionVisualization from './OcclusionVisualization';

const PerspectiveCluster = ({ width }) => {
  const slopesParams = useContext(SlopesContext);

  const videoSliderHeight = 130;

  const buttonSize = (videoSliderHeight - UNIT) / 2;
  const videoSliderWidth = width - buttonSize - UNIT * 2;

  return (
    <InstrumentCluster>
      <SliderControl
        value={slopesParams.perspective}
        updateValue={slopesParams.setPerspective}
        min={0}
        max={100}
        width={videoSliderWidth}
        height={videoSliderHeight}
        renderVisualization={props => <PerspectiveVisualization {...props} />}
      />
      <Spacer size={UNIT} />
      <Column>
        <ToggleControl
          width={buttonSize}
          height={buttonSize}
          value={slopesParams.enableOcclusion}
          updateValue={slopesParams.setEnableOcclusion}
          renderVisualization={props => <OcclusionVisualization {...props} />}
        />
        <button style={{ width: buttonSize, height: buttonSize }}>?</button>
      </Column>
    </InstrumentCluster>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default PerspectiveCluster;