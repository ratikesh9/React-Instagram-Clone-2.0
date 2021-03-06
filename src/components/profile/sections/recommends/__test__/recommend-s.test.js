import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../../../../../store/mockStore/mockStore'
import { BrowserRouter as Router } from 'react-router-dom'
import Recommendations from '../recommends-s'
import MockDataElement from '../../../../../utils/__test__/mock-dataElement'

describe('Recommendations Component', () => {
  MockDataElement()

  it('should match snapshot', () => {
    const tree = create(
      <Provider store={mockStore}>
        <Router>
          <Recommendations param='takkar' />
        </Router>
      </Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
