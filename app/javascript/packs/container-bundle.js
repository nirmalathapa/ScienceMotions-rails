import ReactOnRails from 'react-on-rails';

import Container from '../bundles/Container/components/Container';
import Lesson from '../bundles/Container/components/Lesson';
import Team from '../bundles/Container/components/team/Team';
import Dna from '../bundles/Container/components/Dna';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Container,
  Lesson,
  Team,
  Dna
});
