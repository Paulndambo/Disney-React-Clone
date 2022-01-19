import React from 'react';
import styled from "styled-components";

const Movies = () => {
    return (
        <Container>
            <h4>Reecommended for You</h4>
            <Content>
                <Wrap>
                    <img src='https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg' />
                </Wrap>
                <Wrap>
                    <img src='https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg' />
                </Wrap>
                <Wrap>
                    <img src='https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg' />
                </Wrap>
                <Wrap>
                    <img src='https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg' />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`
    
`

const Content = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: 3px solid rgba(249, 249, 249, 0.8);
        box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;

    }

`