export interface modalType {
  pageName: string
  header: Header
  formItems: FormItem[]
}

export interface Header {
  newTitle: string
  editTitle: string
}

export interface FormItem {
  type?: string
  label?: string
  prop: string
  placeholder?: string
  options?: any[]
  slotName?: string
}
