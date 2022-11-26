import type { modalType } from '@/types/pageConfigType'

export const usersHeaderConfig = [
  {
    span: 8,
    lable: '用户名',
    prop: 'name',
    placeholder: '请输入用户名',
    type: 'input',
    initvalue: ''
  },
  {
    span: 8,
    lable: '真实姓名',
    prop: 'realname',
    placeholder: '请输入真实姓名',
    type: 'input',
    initvalue: ''
  },
  {
    span: 8,
    lable: '电话号码',
    prop: 'cellphone',
    placeholder: '请输入电话号码',
    type: 'input',
    initvalue: ''
  },
  {
    span: 8,
    lable: '状态',
    prop: 'enable',
    placeholder: '选择状态',
    type: 'select',
    options: [
      { value: 0, label: '禁止' },
      { value: 1, label: '启用' }
    ]
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
export const usersContentConfig = {
  contentName: 'users',
  header: {
    title: '用户列表',
    newBtnName: '新建用户'
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
      label: '用户名',
      width: '150px',
      prop: 'name'
    },
    {
      type: 'normal',
      label: '真实姓名',
      width: '150px',
      prop: 'realname'
    },
    {
      type: 'normal',
      label: '手机号码',
      width: '150px',
      prop: 'cellphone'
    },
    {
      type: 'button',
      label: '状态',
      width: '200px',
      prop: 'enable'
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

export const usersModalConfig: modalType = {
  pageName: 'users',
  header: {
    newTitle: '新建用户',
    editTitle: '编辑用户'
  },
  formItems: [
    {
      type: 'input',
      label: '用户名',
      prop: 'name',
      placeholder: '请输入用户名称'
    },
    {
      type: 'input',
      label: '真实姓名',
      prop: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'password',
      label: '密码',
      prop: 'password',
      placeholder: '请输入密码'
    },
    {
      type: 'input',
      label: '电话号码',
      prop: 'cellphone',
      placeholder: '请输入电话号码'
    },
    {
      type: 'select',
      label: '选择角色',
      prop: 'roleId',
      placeholder: '请选择',
      options: []
    },
    {
      type: 'select',
      label: '选择部门',
      prop: 'departmentId',
      placeholder: '请选择',
      options: []
    }
  ]
}
