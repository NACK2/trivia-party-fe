import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  CardActionArea as MuiCardActionArea,
  Typography,
} from "@mui/material";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

function Card(props: CardProps) {
  const { title, subtitle, imgSrc, onClick } = props;
  return (
    <MuiCard
      sx={{
        bgcolor: "secondary.main",
        width: "300px",
        "&:hover": {
          animation: `${pulse} 1s infinite`,
        },
      }}
    >
      <MuiCardActionArea onClick={onClick}>
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
      </MuiCardActionArea>
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
  /** onClick callback handler when clicking on card */
  onClick: () => void;
};
