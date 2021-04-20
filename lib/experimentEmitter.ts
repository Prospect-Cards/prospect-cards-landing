import { Mixpanel } from 'lib/mixpanel'
import { emitter } from '@marvelapp/react-ab-test'

emitter.defineVariants('Logo Size - Test', ['Small-174', 'Large-220'], [75, 25])

// Called when the experiment is displayed to the user.
emitter.addPlayListener(function(experimentName, variantName) {
  Mixpanel.track('$experiment_started', {
    'Experiment name': experimentName,
    'Variant name': variantName,
  })
})

// Called when a 'win' is emitted, in this case by this.refs.experiment.win()
emitter.addWinListener(function(experimentName, variantName) {
  Mixpanel.track('$experiment_win', {
    'Experiment name': experimentName,
    'Variant name': variantName,
  })
})

export default emitter
