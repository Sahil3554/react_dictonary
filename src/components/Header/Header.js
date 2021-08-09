import { TextField ,createTheme, ThemeProvider, MenuItem} from '@material-ui/core';
import React from 'react'
import './Header.css';
import categories from '../data/categories';
const Header = ({category,setCategory,word,setWord}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: 'dark',
        },
    });
    const setSelect = (value) =>{
        setCategory(value);
        setWord("");
    }
    return (
        <div className="header">
            <span className="title">{word?word:"Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                     className="search"
                     id="standard-basic"
                     label="Enter a Word"
                     value={word}
                     onChange={(e)=>setWord(e.target.value)} 
                        />
                    <TextField 
                        className="select"
                        id="standard-basic"
                        select
                        label="Language"
                        value={category}
                        onChange={(e)=>setSelect(e.target.value)} 
                        helperText="Select Your Language"
                        >
                            {categories.map((option)=>(
                                    <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                                )     
                            )}
                        
                    </TextField>
                </ThemeProvider>
                
            </div>
        </div>
    )
}

export default Header
