import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from './JSONOutput.module.css';
import { Paper, CardHeader, Divider, IconButton } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

function JSONOutput(props) {
  return (
    <Paper className={styles['json-output']} variant={'outlined'}>
      <CardHeader titleTypographyProps={{variant:'h6' }} title={'Generated JSON'} />
      <CopyToClipboard text={JSON.stringify(props.json)}>
        <IconButton
          className={styles['copy-button']}
          variant="contained"
          color="default"
          size={'small'}
        >
          <FileCopyIcon fontSize={"small"}/>
        </IconButton>
      </CopyToClipboard>
      <Divider />
      <div className={styles['json-display']} value={JSON.stringify(props.json)}>
        {JSON.stringify(props.json)}
      </div>
    </Paper>
  )
}

export default JSONOutput;