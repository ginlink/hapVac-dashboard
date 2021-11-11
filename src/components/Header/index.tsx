import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components/macro'

const { Header: AntdHeader } = Layout

const WrappedHeader = styled(AntdHeader)`
  color: ${({ theme }) => theme.white};
`

export default function Header() {
  return <WrappedHeader>Header</WrappedHeader>
}
