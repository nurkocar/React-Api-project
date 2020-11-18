import {useRef, useContext} from 'react';
import {StyledSearchBox, StyledSearchInput, StyledButton} from './SearchBox.style';
import {MovieContext} from '../../Movie';

export const SearchBox = () => {

    //const [inputValue, setInputValue] = useState('');
    //onChange = {(event) => setInputValue(event.target.value)}
    
    const inputRef = useRef();
    const {setSearchKeyword} = useContext(MovieContext);

    return(
        <StyledSearchBox>
            <StyledSearchInput ref={inputRef}  isColored = {false}/>
            <StyledButton onClick = {() => setSearchKeyword(inputRef?.current?.value)}>SEARCH</StyledButton>
        </StyledSearchBox>
    )
}


