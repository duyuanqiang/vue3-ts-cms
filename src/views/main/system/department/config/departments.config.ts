import type { modalType } from '@/types/pageConfigType'

export const departsHeaderConfig = [
  {
    span: 8,
    lable: '部门名称',
    prop: 'name',
    placeholder: '请输入查询的部门名称',
    type: 'input',
    initvalue: ''
  },
  {
    span: 8,
    lable: '部门领导',
    prop: 'leader',
    placeholder: '请输入查询的部门领导',
    type: 'input',
    initvalue: ''
  },
  {
    span: 8,
    lable: '创建时间',
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
export const departsContentConfig = {
  contentName: 'department',
  header: {
    title: '部门列表',
    newBtnName: '新建部门'
  },
  propsList: [
    {
      type: 'selection',
      label: '选择',
      width: '80px'
    },
    {
      type: 'index',
      label: '序号',
      width: '80px'
    },
    {
      type: 'normal',
      label: '部门名称',
      width: '150px',
      prop: 'name'
    },
    {
      type: 'normal',
      label: '部门领导',
      width: '150px',
      prop: 'leader'
    },
    {
      type: 'normal',
      label: '上级部门',
      width: '150px',
      prop: 'parentId'
    },
    {
      type: 'timer',
      label: '创建时间',
      prop: 'createAt'
    },
    {
      type: 'timer',
      label: '更新时间',
      prop: 'updateAt'
    },
    {
      type: 'handle',
      label: '操作',
      width: '200px',
      prop: 'name'
    }
  ]
}

export const departModalConfig: modalType = {
  pageName: 'department',
  header: {
    newTitle: '新建部门',
    editTitle: '编辑部门'
  },
  formItems: [
    {
      type: 'input',
      label: '部门名称',
      prop: 'name',
      placeholder: '请输入部门名称'
    },
    {
      type: 'input',
      label: '部门领导',
      prop: 'leader',
      placeholder: '请输入部门领导'
    },
    {
      type: 'select',
      label: '上级部门',
      prop: 'parentId',
      placeholder: '请选择上级部门',
      options: []
    }
  ]
}
