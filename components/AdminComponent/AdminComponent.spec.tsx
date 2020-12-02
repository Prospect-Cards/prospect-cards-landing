import { MockedProvider } from '@apollo/react-testing'
import { RenderResult, render, waitFor } from '@testing-library/react'
import { maybeViewerQueryMock } from 'mocks/account'
import AdminComponent from './'
import React from 'react'

describe('AdminComponent', (): void => {
  const setup = (admin = false): RenderResult => {
    const overrides = {
      maybeViewer: {
        id: 1,
        admin,
      },
    }

    return render(
      <MockedProvider mocks={ [maybeViewerQueryMock(overrides)()] }>
        <AdminComponent>
          <div>Test me</div>
        </AdminComponent>
      </MockedProvider>,
    )
  }

  describe('when user is admin', () => {
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
