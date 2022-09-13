import DefaultBanner from '../../../public/Assets/Images/fewcents_bridge.jpg'
import { FC } from 'react'
import { Alert, Typography, Paper, Box } from '@mui/material'
import Image from 'next/image'
interface Props {
  theme: any
}
export const AwaitingApproval: FC<Props> = ({ theme }) => {
  return (
    <Paper className="root-paper" sx={theme.paperRoot}>
      <Box className="banner-root" sx={theme.bannerRoot}>
        <Box className="banner-container">
          <Image alt="Crater's Banner" src={DefaultBanner}/>
        </Box>
      </Box>
      <Paper variant="outlined" sx={{ ...theme.paper, margin: '16px' }}>
        <Alert severity="info">
          <Typography variant="subtitle2" component="label">
            Awaiting approval from Fewcents Admin
          </Typography>
        </Alert>
      </Paper>
    </Paper>
  )
}
