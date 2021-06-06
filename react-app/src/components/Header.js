import React from 'react'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const Header = () => {
    const display_title = () => {
        return <Toolbar>{title_header}</Toolbar>;
    };
    const title_header = (
        <Typography variant="h6" component="h1">
            <div>Phone Catalog</div>
        </Typography>
    );
    return (
        <header>
            <AppBar>{display_title()}</AppBar>

        </header>
    )
};

export default Header