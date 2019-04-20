// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import styled from 'styled-components'

const Outer = styled(Box)`
  height: ${props => props.height};
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9999;
`

export function Masthead({
  height,
  children
}: {
  height: any,
  children: React.Node
}) {
  return (
    <Outer height={ height}>
      { children }
    </Outer>
  )
}

Masthead.propTypes = {
  height: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
