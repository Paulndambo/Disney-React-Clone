import React from 'react';
import styled from "styled-components";

const Movie = ({cover}) => {
  return (
      <Container>
          Hello World
      </Container>
  );
};

export default Movie;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${props => `url("${props.cover}")`};
`