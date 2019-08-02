import { indigo, pink} from '@material-ui/core/colors/';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[500],
            // main: indigo[500],
        },
        secondary: {
            main: pink[400],
            // main: blue[500],
        },
        background: {
            default: '#fff',
        },
    },
});


export default theme;



