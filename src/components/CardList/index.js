import React, {useContext} from 'react';
import { MovieContext } from '../../Movie';
import { Card } from "../Card";
import { StyledCardList } from './CardList.style';

export const CardList = () => {

    const {movieList, baseImageUrl} = useContext(MovieContext);

    return (
        <StyledCardList>
            { movieList?.map(

                (movie, index) => (

                    <Card
                        key= {index}
                        title= {movie.title}
                        id= {movie.id}
                        imgSrc= {baseImageUrl +  movie.poster_path}
                        release_date= {movie.release_date}

                    />)
            )}
        </StyledCardList>
    )
}