import {
  DataSearch,
  DynamicRangeSlider,
  ReactiveBase,
  ReactiveList,
  SelectedFilters,
  ToggleButton,
} from '@appbaseio/reactivesearch'
import React from 'react'
// import { Experiment, Variant } from '@marvelapp/react-ab-test'
// import emitter from 'lib/abEmitter'
import { Grid, Paper, Typography } from '@material-ui/core'
import { ListingFragment, TagTypesEnum } from 'types/graphql'
import { Pagination } from '@material-ui/lab'
import CheckboxSearch from 'components/search/CheckboxSearch'
import CollapsibleSearch from 'components/search/CollapsibleSearch'
import ListingSkeletons from 'components/common/ListingSkeleton'
import SearchResults from 'components/listings/SearchResults'
import YearSearch from 'components/search/YearSearch'
import useStyles from './styles'

const Home = (): JSX.Element => {
  const classes = useStyles()
  const token =
    typeof window === 'undefined' ?
      '' :
      localStorage.getItem('prospect-cards-token')

  return (
    <Grid container spacing={ 3 }>
      <Grid item xs={ 12 }>
        <ReactiveBase
          app='listings'
          url={ process.env.NEXT_PUBLIC_API_URI }
          headers={ {
            authorization: token || '',
          } }
        >
          <Grid container spacing={ 3 }>
            <Grid item md={ 2 } sm={ 3 } xs={ 12 }>
              <CollapsibleSearch title='Sport'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Category }
                  dataField='category'
                  componentId='Category'
                  placeholder='Search Categories'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Year'>
                <YearSearch
                  dataField='year'
                  componentId='Year'
                  placeholder='Search Years'
                />
              </CollapsibleSearch>
              <Paper className={ classes.filterPaper }>
                <Typography>Price Range</Typography>
                <DynamicRangeSlider
                  componentId='Price'
                  dataField='price'
                  stepValue={ 10 }
                  rangeLabels={ (min, max) => ({
                    start: '$' + min / 100,
                    end: '$' + max / 100,
                  }) }
                  className='custom-slider'
                  showHistogram={ false }
                  showFilter={ false }
                />
              </Paper>
              <CollapsibleSearch title='Type'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.ProductType }
                  componentId='Product Type'
                  dataField='productType'
                  placeholder='Search Types'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Player'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Player }
                  componentId='Player Name'
                  dataField='player'
                  placeholder='Player Name'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Manufacturer'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Manufacturer }
                  dataField='manufacturer'
                  componentId='Manufacturer'
                  placeholder='Search Manufacturers'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Set'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.SetType }
                  dataField='setType'
                  componentId='Set'
                  placeholder='Search Sets'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Parallel'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Parallel }
                  dataField='parallel'
                  componentId='Parallel'
                  placeholder='Search Parallels'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Grader'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Grader }
                  dataField='grader'
                  componentId='Grader'
                  placeholder='Search Graders'
                />
              </CollapsibleSearch>
              <ToggleButton
                componentId='Rookie'
                dataField='rookie'
                data={ [{ label: 'Rookie / 1st Year Only', value: true }] }
                URLParams
              />
            </Grid>
            <Grid item md={ 10 } sm={ 9 } xs={ 12 }>
              <DataSearch
                componentId='Search'
                dataField={ [
                  'title',
                  'description',
                  'playerText',
                  'category',
                  'yearText',
                  'productType',
                  'setType',
                  'parallel',
                  'manufacturer',
                  'grader',
                ] }
                fieldWeights={ [1, 1, 5, 5, 5, 5, 5, 5, 5, 5] }
                fuzziness='AUTO'
                autosuggest
                showClear
                URLParams
                showIcon={ false }
                innerClass={ {
                  input: classes.searchBox,
                } }
              />
              <SelectedFilters showClearAll='default' />
              <ReactiveList
                infiniteScroll={ false }
                pagination
                URLParams
                showResultStats={ false }
                renderNoResults={ () => '' }
                size={ 20 }
                dataField='player'
                showLoader={ false }
                componentId='page'
                renderPagination={ ({ totalPages, currentPage, setPage }) => {
                  const selectPage = Number.isFinite(totalPages) && (
                    <Pagination
                      count={ totalPages }
                      page={ currentPage + 1 }
                      variant='outlined'
                      color='primary'
                      onChange={ (_e, page) => {
                        setPage(page - 1)
                      } }
                    />
                  )
                  return selectPage
                } }
                react={ {
                  and: [
                    'Search',
                    'Price',
                    'Description',
                    'Player Name',
                    'Category',
                    'Year',
                    'Product Type',
                    'Manufacturer',
                    'Set',
                    'Grader',
                    'Parallel',
                    'Rookie',
                  ],
                } }
                sortOptions={ [
                  { label: 'Relevance', dataField: '_score', sortBy: 'desc' },
                  { label: 'Newest', dataField: 'createdAt', sortBy: 'desc' },
                  {
                    label: 'Price - Highest to Lowest',
                    dataField: 'price',
                    sortBy: 'desc',
                  },
                  {
                    label: 'Price - Lowest to Highest',
                    dataField: 'price',
                    sortBy: 'asc',
                  },
                ] }
                defaultSortOption='Relevance'
              >
                {({ data, loading }): JSX.Element => {
                  if (!data.length && loading) return <ListingSkeletons />

                  const listingIds = data.map((l: ListingFragment) => l.id)

                  return (
                    <div className={ classes.resultsWrapper }>
                      {data.length ? (
                        <SearchResults listingIds={ listingIds } />
                      ) : (
                        'No results...'
                      )}
                    </div>
                  )
                }}
              </ReactiveList>
            </Grid>
          </Grid>
        </ReactiveBase>
      </Grid>
      {/*<Experiment name='My Example'>*/}
      {/*  <Variant name='A'>*/}
      {/*    <div>Section A</div>*/}
      {/*  </Variant>*/}
      {/*  <Variant name='B'>*/}
      {/*    <div>Section B</div>*/}
      {/*  </Variant>*/}
      {/*</Experiment>*/}
      {/*<Button*/}
      {/*  onClick={ () => {*/}
      {/*    emitter.emitWin('My Example')*/}
      {/*  } }*/}
      {/*>*/}
      {/*  Succeed*/}
      {/*</Button>*/}
    </Grid>
  )
}

export default Home
