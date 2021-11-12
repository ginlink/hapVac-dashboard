import { DashboardOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { createElement, useMemo } from 'react'

const Icons = {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} as {
  [key: string]: any
}

export default function AntdIcon(iconString: string) {
  // const Icon = Icons['DashboardOutlined'] ? createElement(Icons['DashboardOutlined']) : null
  const Icon = useMemo(() => {
    if (!iconString) return null

    const icon = Icons[iconString] ? createElement(Icons[iconString]) : null

    if (!icon) {
      console.debug('[AntdIcon](未加载到图片):', iconString)
    }

    return icon
  }, [iconString])

  return Icon
}
