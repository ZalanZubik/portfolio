import React from 'react';
import styled from 'styled-components';

class Highlighted extends React.Component {
  render() {
    return (
      <HighlightedContainer>
        <h1>Highlighted Projects</h1>
        <div className="highlighted-projects">
          
        </div>
      </HighlightedContainer>
    )
  }
}

export default Highlighted;

const HighlightedContainer = styled.section`
  text-align: center;
  padding: 2rem;

  .highlighted-projects {
    width: 75vw;
    display: grid;
  }
`;