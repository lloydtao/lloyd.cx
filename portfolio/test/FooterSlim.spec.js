import { mount } from '@vue/test-utils'
import FooterSlim from '@/components/FooterSlim.vue'

describe('FooterSlim', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FooterSlim)
    expect(wrapper.vm).toBeTruthy()
  })
})
