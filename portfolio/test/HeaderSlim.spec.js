import { mount } from '@vue/test-utils'
import HeaderSlim from '@/components/HeaderSlim.vue'

describe('HeaderSlim', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HeaderSlim)
    expect(wrapper.vm).toBeTruthy()
  })
})
