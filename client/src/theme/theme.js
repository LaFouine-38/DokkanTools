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
            styleOverrides: {
                root: {
                    backgroundColor: 'red'
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: 'white'
                },
                select: {
                    color: 'white',
                },
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'rgb(29, 38, 47)',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "white",
                    "&.Mui-selected": {
                        "&.Mui-focusVisible": { backgroundColor: "rgba(0, 0, 0, 0.08)" }
                    }
                },
            }
        },
    }
});