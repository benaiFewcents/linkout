import { Typography, Box, Button, AppBar, Toolbar } from '@mui/material'

// local import
import { LinkoutAsset } from '../Pages/Linkout/types'
import LightLogo from '../Icons/LogoLight'

type Props = {
  linkout?: LinkoutAsset
  theme?: any
  addButton?: boolean
}

const Header = ({ linkout, theme, addButton = false }: Props) => {
  return (
    <AppBar className="linkout-header" style={theme?.navbar || { backgroundColor: '#191a36' }}>
      <Toolbar className="linkout-toolbar">
        <Box className="logo-container">
          <Typography color={linkout?.pageTextColor} component="span" className="typography">
            <strong>Linkout&nbsp;</strong>
          </Typography>
          <Typography
            color={linkout?.pageTextColor}
            sx={{ opacity: '0.8' }}
            fontFamily={linkout?.pageFontFamily}
            component="span"
            className="typography"
          >
            by
          </Typography>
          <Box sx={{ marginLeft: '8px', marginTop: '-1px' }}>
            <LightLogo
              isDark={linkout?.pageBackgroundColor ? theme.isDark : true}
              height="30px"
            ></LightLogo>
          </Box>
        </Box>
        <Box className='get-started-btn-wrapper'>
          {addButton && (
            <a href="#publisher-slug">
              <Button className='get-started-btn' variant="contained" color="primary" type="submit">
                Get Started
              </Button>
            </a>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
