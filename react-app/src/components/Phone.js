import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
const Phone = ({phone}) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={phone.imageLink} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    <strong>{phone.name}</strong>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {phone.manufacturer}
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to={`/phone/${phone.id}`}>
                    <Button variant="contained" color="primary" disableElevation style={{ cursor: 'pointer' }}>
                      More
                    </Button>
                  </Link>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{phone.price}€</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br />
      </div>
  )

};

export default Phone