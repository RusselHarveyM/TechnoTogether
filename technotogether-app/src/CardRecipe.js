import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
const points =6670;
const payment = 40;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div class = "cards"><div/>
    <Card sx={{ maxWidth: 545 }}>
  
    <CardHeader

      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={  
        <Rating name="read-only" value={3} readOnly />
      }
      titleTypographyProps={{variant:'h5', align :'left'}}
      title="John Doe"
      subheaderTypographyProps={{variant:'h6', align :'left'}}
      subheader=  {`Accumulated points: ${points}        Payment per hour:${payment}`} 
  
    />
    <CardContent>

  
     

      <Typography variant="body2" color="text.secondary" >
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
    <Button size="small">Contact</Button>
        <Button size="small">Hire Tutor</Button>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <CardActions>
      </CardActions>
        <Typography paragraph>About Student</Typography>
        <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus malesuada turpis a nulla scelerisque consequat. 
        Sed sollicitudin sed nibh a tempus. Proin ultrices tincidunt sapien,
         et fermentum ex laoreet a. Suspendisse rutrum, augue a volutpat dapibus,
          libero ligula tincidunt ligula, id faucibus lorem turpis sit amet felis.volutpat.

        </Typography>
      </CardContent>
    </Collapse>
  </Card>
  );
}