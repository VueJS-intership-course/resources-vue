import CoolPaginator from '@/components/CoolPaginator.vue'

export default {
  install(app, options = {}) {
    const prefix = options?.prefix || 'custom'

    app.component(`${prefix}-${CoolPaginator.name}`, CoolPaginator)
  }
}