import React from 'react';
import Community from '../Community';
import SubNav from '../../components/SubNav';
import { menuItems } from '../../menuItems';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material-next/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Footer from '../../components/Footer';

function Join() {
  return (
    <div className="join">
      <Community bannerPath="함께하기" />
      <div className="content">
        <SubNav
          title={menuItems[4].title}
          subMenus={menuItems[4].submenu}
          current={1}
        />
        <Box
          className="submit"
          sx={{
            maxWidth: '100%',
            margin: '32px',
            marginTop: '64px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          <h1>
            다음교회는 언제나 여러분을 환영합니다.
            <br />
          </h1>
          <h4 style={{ margin: '16px' }}>
            다음교회에 관한 질문이나 연락하고자 하는 내용이 있다면
            <br />
            아래의 형식을 작성하여 보내주세요.
          </h4>
          <Divider variant="fullWidth" />
          <div className="joinForm">
            <div className="name">
              <TextField
                required
                id="outlined-required"
                label="성"
                margin="normal"
                sx={{ m: 1, width: '29ch' }}
              />
              <TextField
                required
                id="outlined-required"
                label="이름"
                margin="normal"
                sx={{ m: 1, width: '29ch' }}
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="이메일"
                margin="normal"
                sx={{ m: 1, width: '60ch' }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="문의사항"
                multiline
                rows={8}
                sx={{ m: 1, width: '60ch' }}
              />
            </div>
            <div className="accept">
              <FormControlLabel
                required
                control={<Checkbox />}
                label="개인정보처리방침에 동의합니다."
                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
              />
              <a href="/">
                <OpenInNewIcon sx={{ margin: 'auto' }} />
              </a>
            </div>
          </div>
          <Button variant="contained" sx={{ m: 1, width: '60ch' }}>
            제출
          </Button>
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Join;
