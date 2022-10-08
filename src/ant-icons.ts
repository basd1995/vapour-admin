import * as antdIcons from '@ant-design/icons-vue'

export default {
  install(app: any) {
    // 统一注册antdv图标
    // for (const icon in antdIcons as any)
    //   app.component(icon, antdIcons[icon])
    for (const [key, component] of Object.entries(antdIcons))
      app.component(key, component)
  },
}

