import { Badge, Box, IconButton, Typography } from "@mui/material";
import palette from "../../themes/palette";
import { useDispatch, useSelector } from 'react-redux';
import {
    PersonOutline,
    ShoppingBagOutlined, // these are different icons we are using in the navbar
    MenuOutlined,
    SearchOutlined
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom"; // we can go to different urls with this. 

const Navbar =()=>{
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    return(
    <Box 
        display="flex"
        width="100%" // this Box is the outer flex component of the navbar
        height="60px"
        backgroundColor="rgba(255, 255, 255, 0.95)"
        color="black"
        position="fixed"
        top="0"
        left="0"
        zIndex="1"
        alignItems="center"
    >
        <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            
            <Box
                display="flex"
                justifyContent="space-between"
                columnGap="20px"
                zIndex="2"
            >
                <IconButton sx={{ color: "black" }}>
                    <MenuOutlined />
                </IconButton>

                <Badge // a badge is the little number in the icon which shows the amounts of items that are in our cart
                        // badgeContent={cart.length}
                        // color="secondary"
                        // invisible={cart.length === 0}
                        // sx={{
                        //     "& .MuiBadge-badge": {
                        //         right: 5,
                        //         top: 5,
                        //         padding: "0 4px",
                        //         height: "14px",
                        //         minWidth: "13px",
                        //     },
                        // }}
                    >
                        <IconButton
                            // onClick={() => dispatch(setIsCartOpen({}))} // remember setIsCartOpen is a function in our redux toolkit and we call it with dispatch wich activates useDispatch() and then activates setIsCartOpen which that himself reverses the state of cart (open => close) and (close => open) 
                            sx={{ color: "black" }}
                        >
                            <ShoppingBagOutlined />
                        </IconButton>
                </Badge>
                <IconButton sx={{ color: "black" }}>
                    <PersonOutline />
                </IconButton>
                <IconButton sx={{ color: "black" }}>
                    <SearchOutlined />
                </IconButton>

                

            </Box>
            <Box
                // onClick={() => navigate("/")} // as you can see with navigate which is lined to useNavigate we can access the paths that defined in the routes
                sx={{ '&:hover': { cursor: "pointer" } }} // because we usede a phsudo element or phudo selectors (hover) we have to use the sx or we could use the style prop 
                color={palette.secondary[500]}
            >
                آنلاین شاپ
            </Box>

        </Box>
    </Box>
    )
}
export default Navbar