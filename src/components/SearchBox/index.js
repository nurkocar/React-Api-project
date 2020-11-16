import {useState} from 'react';
import {StyledSearchBox, StyledSearchInput, StyledButton} from './SearchBox.style';

export const SearchBox = ({setSearchKeyword}) => {

    const [inputValue, setInputValue] = useState('');

    return(
        <StyledSearchBox>
            <StyledSearchInput onChange = {(event) => setInputValue(event.target.value)} isColored = {false}/>
            <StyledButton onClick = {() => setSearchKeyword(inputValue)}>SEARCH</StyledButton>
        </StyledSearchBox>
    )
}


