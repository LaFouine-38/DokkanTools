import createTheme from '@mui/material/styles/createTheme';

export default createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:has(input:not(:focus)):hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white"
                    },
                    "& input": {
                        color: 'white'
                    }
                },
                notchedOutline: {
                    borderColor: "white",
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#747474",
                    backgroundColor: 'rgb(29, 38, 47)'
                }
            }
        },
        MainBox: {
            styleOverrides:{
                root:{
                    backgroundColor: 'red'
                }
            }
        }
    }
});