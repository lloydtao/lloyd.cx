import { mount } from '@vue/test-utils'
import CardGrid from '~/components/CardGrid.vue'

describe('CardGrid', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CardGrid)
    expect(wrapper.vm).toBeTruthy()
  })
})
