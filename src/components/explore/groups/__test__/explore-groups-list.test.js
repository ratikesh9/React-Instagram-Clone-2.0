import React from 'react'
import { Provider } from 'react-redux'
import mockStore from '../../../../store/mockStore/mockStore'
import ExploreGroupsList, { PureExploreGroupsList } from '../explore-groups-list'
import Explore from '../../../../store/mockStore/mock-reducers/Explore'
import { create } from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { shallow } from 'enzyme'
import User from '../../../../store/mockStore/mock-reducers/User'

describe('ExploreGroupsList Component', () => {

  const comp = (index=0) => (
    <Provider store={mockStore}>
      <Router>
        <ExploreGroupsList
          {...Explore.groups[index]}
        />
      </Router>
    </Provider>
  )

  it('should match snapshot', () => {
    const tree = create(comp()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot when mutualMembersCount = 0', () => {
    const tree = create(comp(1)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should toggle <MonSticky/> when hovered over the top-parent div', () => {
    const wrapper = shallow(
      <PureExploreGroupsList
        session={User.session}
        {...Explore.groups[0]}
      />
    )

    // should show
    wrapper.find('.m_on').simulate('mouseOver')
    expect(wrapper.find('MonSticky').prop('show')).toEqual(true)

    // should hide
    wrapper.find('.m_on').simulate('mouseOut')
    expect(wrapper.find('MonSticky').prop('show')).toEqual(false)
  })

})
