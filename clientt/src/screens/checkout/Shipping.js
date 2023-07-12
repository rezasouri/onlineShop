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
        <Typography variant="h6"  sx={{ mb: "15px" }}>
          اطلاعات صورت حساب
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
      <Box mb="20px">
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
          values={values.shippingAddress}
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
