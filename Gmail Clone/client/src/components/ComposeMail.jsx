

import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material';
import { Close, DeleteOutline} from '@mui/icons-material';

const dialogStyle = {
        height: '90%',
        width: '80%',
        maxHeight: '100%',
        maxWidth: '100%',
        boxShadow: 'none',
        borderRadius: '10px 10px 0 0'
}

const Header = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 500
    }
});

const RecipientsWrapper = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& < div': {
        fontSize: 14,
        borderBottom: '1px solid #f5f5f5',
        marginTop:10
    }
});

const Footer = styled(Box) ({
     display: 'flex',
     justifyContent: 'space-between',
     padding: '10px 15px'
})



const ComposeMail = () => {
    return (
            <Dialog  open={true} PaperProps={{ sx: dialogStyle }}>
                <Header>
                      <Typography>New Message</Typography>
                      <Close fontSize="small" />
                </Header>
                <RecipientsWrapper>
                    <InputBase placeholder="Recipient" />
                    <InputBase placeholder="Subject"/>
                </RecipientsWrapper>
                <TextField multiline 
                           rows={20}
                           sx={{ '& .MuiOutlinedInput-notchedOutline  ': { border: 'none' }}} />
                <Footer>
                    <Button>Send</Button>
                    <DeleteOutline />
                </Footer>
            </Dialog>
    )
}

export default ComposeMail;

<Box></Box>
<Hi></Hi>
