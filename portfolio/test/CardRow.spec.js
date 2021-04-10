import { mount } from '@vue/test-utils'
import CardRow from '~/components/CardRow.vue'

describe('CardRow', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CardRow)
    expect(wrapper.vm).toBeTruthy()
  })
})
