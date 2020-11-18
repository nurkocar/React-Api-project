import {useHistory} from 'react-router-dom';
import { StyledCardWrapper, StyledText, StyledMovieImage } from "./Card.style"

export const Card = ({ title, imgSrc, id, release_date }) => {

    const history = useHistory();

    return (
        <StyledCardWrapper onClick = {() => history.push(`/detail/${id}`)}>
            <StyledMovieImage src = {imgSrc} alt = {'Movie Poster'}/>
            <StyledText>{title}</StyledText>
            <StyledText>{release_date}</StyledText>
        </StyledCardWrapper>
    )
}