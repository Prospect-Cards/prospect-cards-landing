import { LinearProgress } from '@material-ui/core'
import { ListingsQuery } from 'types/graphql'
import React from 'react'
import SearchResult from 'components/listings/SearchResult'

interface Props {
  data: ListingsQuery;
  loading: boolean;
}

const SearchResults = ({ data: { listings }, loading }: Props): JSX.Element => {
  return (
    <>
      <div style={ { width: '100%', height: 4 } }>
        {loading && <LinearProgress />}
      </div>
      {listings.map((listing) => (
        <SearchResult key={ listing.id } listing={ listing } />
      ))}
    </>
  )
}

export default SearchResults
