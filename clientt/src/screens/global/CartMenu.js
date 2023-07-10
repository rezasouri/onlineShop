import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import palette from "../../themes/palette";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
// styled component is a way to reuse css code like its a component: we can use the FlexBox in our jsx code like a tag it keeps the code clean because we dont have to write these css codes for every individual tag and ofcours we can add a bunch of css in the actual tag aswell
const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart); // the first cart is from the name of the cartSlice and the second cart is from the cart array in the initialState
  const isCartOpen = useSelector((state) => state.cart.isCartOpen); //cart represents the name of the cartSlice and isCartOpen is from initialState both in the state/index.js

  const totalPrice = cart.reduce((total, item) => {
    // this calculates the total price of every items that are in the cart: reduce will iterate through each element
    return total + item.count * item.attributes.price; // the item.attributes are propertys that are given to us from strapi, once we identify the name strapi creates the object for us when it returns the api.
  }, 0); // totalPrice starts at zero

  return (
    <Box // overlay : this box is the entire screen that gets a little darker and opaque when the cart is open
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto" // this will help with the scrolling
    >
      {/* MODAL (the actual cart) */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)" // this means that the width would be maximum of 400 pixles and if the screen is bigger it would be 30% of the screen
        height="100%"
        backgroundColor="white"
      >
        <Box // this box contains whats inside the modal
          padding="30px"
          overflow="auto" // this allows us to be able to scroll if it gets passed a certain height
          height="100%"
        >
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST (item.attributes are given to us from strapi (server)) */}
          <Box>
            {cart.map(
              (
                item // everything that is in the cart which is an array would be mapped
              ) => (
                <Box key={`${item.attributes.name}-${item.id}`}>
                  <FlexBox p="15px 0">
                    <Box flex="1 1 40%">
                      <img // flex="1 1 40%" is a flex shorthand and 1 represents flexGrow so it growa as much as possible and it also shrinks if it needs to and the 40% is like setting the width to 40% so whenever you want to set width and flexbox you need to use this method
                        alt={item?.name} // the ? means that if the name exists set it otherwise it will be undefined
                        width="123px"
                        height="164px"
                        src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} // first part is the backend url where our strapi is located and in the curly brackets its the way strapi formats the object and returns the image we want
                      />
                    </Box>
                    <Box flex="1 1 60%">
                      {/* ITEM NAME */}
                      <FlexBox mb="5px">
                        <Typography fontWeight="bold">
                          {item.attributes.name}
                        </Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(removeFromCart({ id: item.id }))
                          }
                        >
                          {" "}
                          {/* here we pass the id of the item that we want to be deleted */}
                          <CloseIcon />
                        </IconButton>
                      </FlexBox>
                      <Typography>
                        {item.attributes.shortDescription}
                      </Typography>

                      {/* AMOUNT */}
                      <FlexBox m="15px 0">
                        <Box
                          display="flex"
                          alignItems="center"
                          border={`1.5px solid ${palette.neutral[500]}`}
                        >
                          <IconButton
                            onClick={() =>
                              dispatch(decreaseCount({ id: item.id }))
                            }
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{item.count}</Typography>{" "}
                          {/* this will show the amount of the item that we have in the cart */}
                          <IconButton
                            onClick={() =>
                              dispatch(increaseCount({ id: item.id }))
                            }
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>

                        {/* PRICE */}
                        <Typography fontWeight="bold">
                          ${item.attributes.price}
                        </Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
                </Box>
              )
            )}
            ;
          </Box>

          {/* ACTIONS: this will be the subtotal total price and checkout */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">${totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: palette.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
