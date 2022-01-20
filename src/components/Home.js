import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

import { getMoviesList } from '../services/MovieList';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        let mounted = true;
        let movieObjects

        getMoviesList()
        
            .then(movies => {
                if (mounted) {
                    movieObjects = movies.map((movie) => {
                        return {id: movie.id, ...movie}
                    })
                   
                    dispatch(setMovies(movieObjects))
                }
            })
            return () => mounted = false;  
    }, [])

    

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies title="Recommended for You" />
            <Movies title="Only Available on Disney +" />
            <Movies title="Because you watched the Kobra kai" />
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`