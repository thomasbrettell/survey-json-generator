import {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from './JSONOutput.module.css';
import { Paper, CardHeader, Divider, IconButton, Snackbar } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

function JSONOutput(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Paper className={styles['json-output']} variant={'outlined'}>
      <CardHeader titleTypographyProps={{variant:'h6' }} title={'Generated JSON'} />
      <CopyToClipboard text={JSON.stringify(props.json)}>
        <IconButton
          className={styles['copy-button']}
          variant="contained"
          color="default"
          size={'small'}
          onClick={handleClick}
        >
          <FileCopyIcon fontSize={"small"}/>
        </IconButton>
      </CopyToClipboard>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Copied to clipboard"
      />
      <Divider />
      <div className={styles['json-display']}>
        {JSON.stringify(props.json)}
      </div>
    </Paper>
  )
}

export default JSONOutput;