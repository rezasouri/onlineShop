import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      {/* Billing Form */}
      <Box>
        <Typography fontSize="18px" sx={{ mb: "15px" }}>
          اطلاعات صورت حساب
        </Typography>
        <AddressForm
          type="billingAddress"
          value={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="مشابه برای آدرس حمل و نقل"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
        />
      </Box>
      {/* Shippiing Address */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
            <Typography fontSize="18px" sx={{ mb: "15px" }}>
          اطلاعات صورت حساب
        </Typography>
        <AddressForm
          type="shippingAddress"
          value={values.shippingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

        </Box>
      )}
    </Box>
  );
};
export default Shipping;
