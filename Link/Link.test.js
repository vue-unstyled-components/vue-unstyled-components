import Link from './'
import test from 'ava'
import { shallow } from '@vue/test-utils'

const getComponent = ({ to = '', children = '' } = {}) => {
  const options = {
    propsData: { to },
    slots: {
      default: children
    }
  }

  const component = shallow(Link, options)
  return component
}

test('Link is an anchor element', (context) => {
  const component = getComponent()

  context.is(component.element.nodeName, 'A')
})

test('Link is an anchor element', (context) => {
  const link = 'https://example.com/'
  const text = 'Clique aqui!'

  const component = getComponent({
    to: link,
    children: text,
  })

  console.log({ ...component.attributes() })

  context.is(component.attributes().href, link)
  context.is(component.text(), text)
})
