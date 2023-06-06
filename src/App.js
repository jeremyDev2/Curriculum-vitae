import ThemeToggleButton from './components/ThemeToggleButton';
import Navigation from './components/Navigation';
import Description from './components/Description';
import Section from './components/section';
import { Heading } from '@chakra-ui/react';
import Vitae from './components/sectionText';

function App() {
  const shadowStyle = () => 
  {
    const inputStyles = 
    {
      outline: 'none',
      boxShadow: 'none'
    };
  };

  return (
    <div className="App" style={{shadowStyle}}>
          <ThemeToggleButton />
          <Navigation />
          <Description />
          <Section delay={0.2} shadowStyle><Heading>Bio:</Heading></Section>
          <Vitae />
    </div>
  );
}

export default App;