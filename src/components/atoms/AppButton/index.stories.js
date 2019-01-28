
import { storiesOf } from '@storybook/vue';
import base from 'paths.macro';

import AppButton from './index.vue';

storiesOf(base, module).add('story as a component', () => ({
  components: { AppButton },
  template: '<app-button>rounded</app-button>',
}));
