import ThemeToggleButton from './components/ThemeToggleButton';
import Navigation from './components/navigation';
import Description from './components/description';
import Section from './components/section';
import { Heading } from '@chakra-ui/react';
import Vitae from './components/sectionText';

function App() {
  return (
    <div className="App">
          <ThemeToggleButton />
          <Navigation />
          <Description />
          <Section delay={0.1}><Heading>Bio:</Heading></Section>
          <Vitae />
    </div>
  );
}

export default App;