import styles from './JSONOutput.module.css';
import { Paper, CardContent, CardHeader, Divider } from '@material-ui/core';

function JSONOutput(props) {
  return (
    <Paper className={styles['json-output']} variant={'outlined'}>
      <CardHeader titleTypographyProps={{variant:'h6' }} title={'Generated JSON'} />
      <Divider />
      <CardContent className={styles['json-display']}>
        {JSON.stringify(props.json)}
      </CardContent>
    </Paper>
  )
}

export default JSONOutput;