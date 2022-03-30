import ParsedForm from '@/ParsedForm'
import { Card } from 'antd'
import React, { memo, useCallback } from 'react'
import styled from 'styled-components/macro'

export default function FilterBoard() {
  const onFinishOk = useCallback<(value: string) => void>((values: string) => {
    console.log('[](values):', values)
  }, [])

  return (
    <>
      <ParsedForm onFinishOk={onFinishOk} />
      <Card>过滤搜索</Card>
    </>
  )
}
