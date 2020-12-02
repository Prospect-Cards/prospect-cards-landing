import { MockedProvider } from '@apollo/react-testing'
import { RenderResult, render, waitFor } from '@testing-library/react'
import { acceptOfferMutationMock, offerFragment } from 'mocks/offers'
import { userListingsMock } from 'mocks/listings'
import AcceptOfferButton from './'
import React from 'react'
import userEvent from '@testing-library/user-event'

const acceptOfferCb = jest.fn()

describe('AcceptOfferButton', (): void => {
  const setup = (): RenderResult => {
    return render(
      <MockedProvider
        mocks={ [acceptOfferMutationMock(acceptOfferCb), userListingsMock()] }
      >
        <AcceptOfferButton offerId={ offerFragment.id } price='$12.00' />
      </MockedProvider>,
    )
  }

  it('loads and displays header', async(): Promise<void> => {
    const { getByText, findByText } = setup()
    userEvent.click(getByText('Accept'))
    userEvent.click(await findByText('Agree'))
    await waitFor(() => {
      expect(acceptOfferCb).toHaveBeenCalled()
    })
  })
})
