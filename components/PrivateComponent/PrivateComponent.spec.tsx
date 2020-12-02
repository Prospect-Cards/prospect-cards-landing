import { MockedProvider } from '@apollo/react-testing'
import { RenderResult, render, waitFor } from '@testing-library/react'
import { maybeViewerQueryMock } from 'mocks/account'
import PrivateComponent from './'
import React from 'react'

describe('PrivateComponent', (): void => {
  const setup = (loggedIn = false): RenderResult => {
    const overrides = loggedIn ? {} : { maybeViewer: null }

    return render(
      <MockedProvider mocks={ [maybeViewerQueryMock(overrides)()] }>
        <PrivateComponent>
          <div>Test me</div>
        </PrivateComponent>
      </MockedProvider>,
    )
  }

  describe('when user is logged in', () => {
    it('renders children', async(): Promise<void> => {
      const { findByText } = setup(true)

      expect(await findByText('Test me')).toBeVisible()
    })
  })

  describe('when user is NOT admin', () => {
    it('does not render children', async(): Promise<void> => {
      const { queryByText } = setup()

      await waitFor(() => {
        expect(queryByText('Test me')).toBeNull()
      })
    })
  })
})
