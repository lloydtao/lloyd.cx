import { mount } from '@vue/test-utils'
import ProfileHero from '@/components/ProfileHero.vue'

describe('ProfileHero', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProfileHero)
    expect(wrapper.vm).toBeTruthy()
  })
})
