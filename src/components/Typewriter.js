import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    font-weight: 700;
    min-height: 3em;
    padding-block: 1em;
    font-size: 2em;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 866px) {
        min-height: 4.75em;
    }

    @media only screen and (max-width: 600px) {
        min-height: 5.5em;
    }

    @media only screen and (max-width: 450px) {
        min-height: 6.25em;
    }

    @media only screen and (max-width: 290px) {
        min-height: 8em;
    }
`;

const EasterEggs = () => {
  const facts = [
    'You stay classy, San Diego',
    'Diamond 1 in Valorant',
    'Platinum 2 in Rainbow Six Siege',
    'Go > Rust',
    'Currently stuck in App Store approval...',
    'Xcode quit unexpectedly. (for the third time today)',
    'Goroutines solved all my life problems',
    'Exploring the Grand Line',
    'Looking for the Dragon Balls',
    'Dropped as a baby',
    'Hi, have you met Ted?',
    'Something exciting is on the horizon...',
  ].sort(() => Math.random() - 0.5);

  return (
    <Wrapper>
      <Typewriter
        options={{
          strings: facts,
          autoStart: true,
          loop: true,
        }}
      />
    </Wrapper>
  );
};

export default EasterEggs;