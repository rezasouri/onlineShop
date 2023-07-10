import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";

import { setItems } from "../../state";
import Item from "../../components/Item";


const ShoppingList = () => {
    const dispatch = useDispatch(); // we write these so we can triger the actions
    const [value, setValue] = useState("all"); // this represent the value for our filter function 
    const items = useSelector((state) => state.cart.items);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    console.log("items", items);

    const handleChange = (event, newValue) => { // this will handle the function for our tabs
        setValue(newValue);
    };

    async function getItems() { // this function is going to call our backend to grab the information(item list) from our strapi this will grab all the items and data that we have stored in our database backend
        const items = await fetch( // we use an async function so we wait for it to finish
            "http://localhost:1337/api/items?populate=image", // this is how we grab items with /api/items, these items have images atached to them so we add ?populate+image and it provides images for the items(helps you grab images with item)
            { method: "GET" }
        );
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data)); // with setItems we are seting the data and image that we grabed in the store
    };

    useEffect(() => {
        getItems(); // this is where we actually pass the items that we got from get Items in the application
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const topRatedItems = items.filter( // this filters through item list and select the top rated category
        (item) => item.attributes.category === "topRated"
    );
    const newArrivalsItems = items.filter(
        (item) => item.attributes.category === "newArrivals"
    );
    const bestSellersItems = items.filter(
        (item) => item.attributes.category === "bestSellers"
    );

    return (
        <Box width="80%" margin="80px auto">
            <Typography variant="h3" textAlign="center">
                محصولات <b>ویژه ما</b>
            </Typography>
            <Tabs // tabs is a component from material ui and it allows us to shift through different tabs and this will be used for our filter function 
                textColor="primary"
                indicatorColor="primary"
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
                sx={{
                    m: "25px",
                    "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap",
                    },
                }}
            >
                <Tab label="همه" value="all"></Tab>
                <Tab label="تازه رسیده ها" value="newArrivals"></Tab>
                <Tab label="بهترین فروش ها" value="bestSellers"></Tab>
                <Tab label="بهترین ها" value="topRated"></Tab>
            </Tabs>
            <Box // this box contains all the items
                margin="0 auto"
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 300px)" // each column is gonna have 300px and its gonna fill it naturally with as many pictures as the space allows
                justifyContent="space-around"
                rowGap="20px"
                columnGap="1.33%"
            >
                {value === "all" && items.map((item) =>(
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
                {value === "newArrivals" && newArrivalsItems.map((item) =>(
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
                {value === "bestSellers" && bestSellersItems.map((item) =>(
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
                {value === "topRated" && topRatedItems.map((item) =>(
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
            </Box>
        </Box>
    );
};

export default ShoppingList;