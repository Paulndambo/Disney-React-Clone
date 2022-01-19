import React from 'react';
import styled from "styled-components";

const MovieDetail = () => {
    return (
        <Container>
            <Background>
                <img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F6%252F2018%252F03%252Fbao-rgb-s110_19e-pub16-215-2000.jpg&q=85' />
            </Background>
            <ImageTitle>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbMMhULLUlK5W0uPkZDJAeY3HaVAl-9vO0tXsah7fHGmtbUC6dGpVKnoxUjm5Sw3kCkY&usqp=CAU' />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>

            <SubTitle>
                2018 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>

            <Description>
            A Chinese-Canadian woman suffering from empty nest syndrome gets a second 
            shot at motherhood when one of her handmade dumplings comes alive. A Chinese-Canadian 
            woman suffering from empty nest syndrome gets a second shot at motherhood when one of 
            her handmade dumplings comes alive.
            </Description>

        </Container>
    )
}

export default MovieDetail


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: o calc(3.5vw + 5px);
    position: relative;
    margin: 30px;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.6;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width 35vw;
    min-width:200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }

`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`