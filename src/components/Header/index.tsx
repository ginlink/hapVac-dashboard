import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components/macro'

const { Header: HeaderS } = Layout
const HeaderWrapper = styled(HeaderS)`
  background: #fff;
`

export default function Header() {
  return <HeaderWrapper>Header</HeaderWrapper>
}
