import { ref } from 'vue'
import type pageContentVue from '@/components/page/page-content.vue'
import type pageModalVue from '@/components/page/page-modal.vue'
import type { listDataType } from '@/types'
export function usePageContent() {
  const contentRef = ref<InstanceType<typeof pageContentVue>>()
  function handleResetClick() {
    contentRef.value?.fetchQueryData()
  }
  function hanleQureyClick(formData: any) {
    contentRef.value?.fetchQueryData(formData)
  }
  return {
    contentRef,
    handleResetClick,
    hanleQureyClick
  }
}
export function usePageModal() {
  const modalRef = ref<InstanceType<typeof pageModalVue>>()
  function handleNewClick() {
    modalRef.value?.changeDialogVisable(true)
  }
  function hanleEditClick(row: listDataType) {
    modalRef.value?.changeDialogVisable(true, row)
  }
  return {
    modalRef,
    handleNewClick,
    hanleEditClick
  }
}
