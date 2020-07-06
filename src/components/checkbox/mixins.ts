import { css } from 'styled-components'

export const applyHiddenInput = css`
  position: absolute;
  box-sizing: border-box;
  clip-path: polygon(0 0);
  float: left;
  width: 1px;
  height: 1px;
  border: 0;
  margin: -1px;
  padding: 0;
  overflow: hidden;
`
