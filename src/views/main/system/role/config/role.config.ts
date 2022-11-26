import type { modalType } from '@/types/pageConfigType'
export const searchConfig = {
  pageName: 'role',
  formItems: [
    {
      span: 8,
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入查询的角色名称',
      initialValue: 'abc'
    },
    {
      span: 8,
      type: 'input',
      prop: 'leader',
      label: '权限介绍',
      placeholder: '请输入查询的权限介绍'
    },
    {
      span: 8,
      label: '创建时间',
      prop: 'createAt',
      type: 'date-picker',
      initvalue: '',
      dateType: 'daterange',
      rangeSeparator: '-',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      size: 'large'
    }
  ]
}
export const contentConfig = {
  contentName: 'role',
  header: {
    title: '角色列表',
    newBtnName: '新建角色'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'index', label: '序号', width: '80px' },
    { type: 'normal', label: '角色名称', prop: 'name', width: '200px' },
    { type: 'normal', label: '权限介绍', prop: 'intro', width: '200px' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handle', label: '操作', width: '200px' }
  ]
}
export const modalConfig: modalType = {
  pageName: 'role',
  header: {
    newTitle: '新建角色',
    editTitle: '编辑角色'
  },
  formItems: [
    {
      type: 'input',
      label: '角色名称',
      prop: 'name',
      placeholder: '请输入角色名称'
    },
    {
      type: 'input',
      label: '权限介绍',
      prop: 'intro',
      placeholder: '请输入权限介绍'
    },
    {
      type: 'custom',
      slotName: 'menulist'
    }
  ]
}
