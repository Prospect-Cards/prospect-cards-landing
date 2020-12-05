import mixpanel from 'mixpanel-browser'
mixpanel.init('012ef52d632ba81ced1f9db7dcd2f414')

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
