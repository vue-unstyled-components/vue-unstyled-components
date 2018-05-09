import get from './get'
import test from 'ava'

test('Access deep object properties by path', (context) => {
  const response = {
    data: {
      users: [
        { name: 'Yuri' }
      ]
    }
  }

  context.is(get(response, 'data.users[0].name'), 'Yuri')
})

test('Returns placeholder when can\'t get object property', (context) => {
  const response = null

  context.is(get(response, 'data.users[0].name', 'Unknown'), 'Unknown')
})

test('Returns placeholder when object property is null/undefined', (context) => {
  const response = {
    data: {
      status: null,
      data: undefined
    }
  }

  context.is(get(response, 'data.status', 'failure'), 'failure')
  context.is(get(response, 'data.data'), null) // default placeholder is "null"
})
