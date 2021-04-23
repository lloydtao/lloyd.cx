import { mount } from '@vue/test-utils'
import Post from '~/components/Post.vue'

describe('Post', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Post)
    expect(wrapper.vm).toBeTruthy()
  })
})
