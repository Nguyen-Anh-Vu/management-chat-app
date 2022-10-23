/*
-  copy source code from Mui - persistent drawer: https://mui.com/material-ui/react-drawer/
      yarn add @mui/material @emotion/react @emotion/styled             : install MUI
      yarn add @mui/icons-material                                      : install MUI icon
-  đổi tên export default function thành ChannelsPage
-  
*/
import clsx from 'clsx';
import * as React from 'react';
import Typography from '@mui/material/Typography';

import AppLayout from '../components/containers/AppLayout';
import Head from 'next/head'


export default function ChannelsPage() {

   return (
      <React.Fragment>
         <Head>
            <title>Channel Page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <AppLayout>

            <Typography paragraph>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut la
            </Typography>
         </AppLayout>
      </React.Fragment>

   );
}
