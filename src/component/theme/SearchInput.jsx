import styled from 'styled-components';
import searchIcon from '../../resources/icons/search.png';
import { useState, useEffect } from 'react';


const FormWrapp = styled.form`
    position: relative;
    width: 100%;
    text-align: center;
    @media ${props => props.theme.media.notebook} {
        /* width: 400px; */
    }
`

const SearchBtn = styled.button`
    position: absolute;
    width: 55px;
    height: 55px;        
    border-radius: 50%;
    background: ${props => props.color || props.theme.colors.btnColor} ;
    border: none;
    cursor: pointer;
    top: 4px;
    right: 6px;
    &:after
    {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;        
        background: no-repeat url(${searchIcon});
        top: 14px;
        right: 15px;
        cursor: pointer;
    };
`

const SearchInput = styled.input`
    padding: 20px 40px;
    width: 100%;
    height: 62px;
    background: #FFFFFF;
    box-shadow: 0px 20px 30px rgba(222, 222, 222, 0.25);
    border-radius: 62px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    &:focus {
    outline: none;
}
`
const ErrorMessageText = styled.div`
    margin-top: 10px;
    height: 18px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: red;`

function Search({ props }) {

    const [search, setSearch] = useState('');
    const [searchDirty, setSearchDirty] = useState('');
    const [searchError, setSearchError] = useState('');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (searchError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [searchError]);

    function onSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        if (!searchError && formValid && search) {
            alert(search)
        }
    }

    const searchHandler = (e) => {
        setSearch(e.target.value)
        const valid = /^(?=.*[!@#$%^&*()])/;
        if (valid.test(String(e.target.value).toLowerCase())) {
            setSearchError('Нельзя использовать символы "!@#$%^&*()"')
        } else if ((e.target.value.length < 4) && (e.target.value.length !== 0)) {
            setSearchError('Символов должнобыть не меньше 4')
        } else if (e.target.value.length > 12) {
            setSearchError('Символов должнобыть не больше 12')
        } else {
            setSearchError('')
        }
    }

    const blurHandler = (e) => {
        if (e.target.value.length > 0) {
            setSearchDirty(true)
        }
    }


    return (
        <FormWrapp onSubmit={e => onSubmit(e)}>
            <SearchBtn disabled={!formValid} type='submit' htmlFor="email" />
            <SearchInput onChange={e => searchHandler(e)} onBlur={e => blurHandler(e)} value={search} id="email" name='search' placeholder='Where do you want to call?' type="search" minLength="4" maxLength="12" {...props} />
            {(searchDirty && searchError) ? <ErrorMessageText>{searchError}</ErrorMessageText> : <ErrorMessageText></ErrorMessageText>}
        </FormWrapp>
    )
}

export default Search;


