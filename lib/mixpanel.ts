import mixpanel from 'mixpanel-browser'
if (typeof window !== 'undefined') {
  mixpanel.init('5c522a43f8bef8ad588b3ad75324006d')
}

const env_check = process.env.NODE_ENV === 'production'

const actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id)
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id)
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props)
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props)
    },
  },
}

export const Mixpanel = actions
