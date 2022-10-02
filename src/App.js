import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './pages/components/Navbar'
import Admin from './pages/Admin'
export default function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#1572A1",
            },

            secondary: {
                main: '#EEEEEE',
            },
        },
        fontFamily: 'Overpass'
    })
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Switch>
                    <Route exact path='/' >
                        <Admin />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    )
}
