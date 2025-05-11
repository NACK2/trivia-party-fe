import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Typography,
} from "@mui/material";

function Card(props: CardProps) {
  const { title, subtitle, imgSrc } = props;
  return (
    <MuiCard sx={{ bgcolor: "secondary.main", width: "300px" }}>
      <MuiCardMedia
        // alt=''
        component="img"
        image={imgSrc}
      />
      <MuiCardContent>
        <Typography variant="h6" align="center">
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {subtitle}
        </Typography>
      </MuiCardContent>
    </MuiCard>
  );
}

export default Card;

type CardProps = {
  /** title of card */
  title: string;
  /** subtitle of card  */
  subtitle?: string;
  /** path of image */
  imgSrc: string;
};
