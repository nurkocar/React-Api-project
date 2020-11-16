import { StyledCardWrapper, StyledText, StyledMovieImage } from "./Card.style"

export const Card = ({ title, imgSrc, release_date }) => {

    return (
        <StyledCardWrapper>
            <StyledMovieImage src = {imgSrc} alt = {'Movie Poster'}/>
            <StyledText>{title}</StyledText>
            <StyledText>{release_date}</StyledText>
        </StyledCardWrapper>
    )
}