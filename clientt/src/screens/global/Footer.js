import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import theme from '../../themes/theme'
import palette from "../../themes/palette";

function Footer() {
  const {palette: { neutral },} = useTheme(theme);
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={palette.secondary[500]}
          >
            آنلاین شاپ
          </Typography>
          <div>
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
           چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیاد  تا با نرم افزارها شناخت بیلی الخصوص طراحان خلاقی و فرهنگد.د
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            درباره ما
          </Typography>
          <Typography mb="30px">مشاغل</Typography>
          <Typography mb="30px">فروشگاه های ما</Typography>
          <Typography mb="30px">شرایط و ضوابط</Typography>
          <Typography mb="30px">حریم خصوصی</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            مراقبت از مشتری
          </Typography>
          <Typography mb="30px">مرکز کنترل</Typography>
          <Typography mb="30px">پیگیری سفارشات</Typography>
          <Typography mb="30px">خرید عمده و شرکتی</Typography>
          <Typography mb="30px">بازگشت و باز پرداخت</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            ارتباط با ما
          </Typography>
          <Typography mb="30px">
            تهران، کارگر شمالی،خوابگاه کوی دانشگاه تهران
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            ایمیل:rezasouri@gmail.com
          </Typography>
          <Typography mb="30px">021-332-38723</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
