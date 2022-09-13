import { useEffect } from 'react'
import Head from 'next/head'
import { toast } from 'react-hot-toast'
import _ from 'lodash'
import DomParser from 'dom-parser';
import { Typography, Box, Paper, Avatar, IconButton, Link, Button } from '@mui/material'
import { Twitter, Facebook, Instagram, Language, YouTube } from '@mui/icons-material'
import ShortcutIcon from '@mui/icons-material/Shortcut'
// local import
import { Tiktok } from '../../Icons/Tiktok'
import { useSelector } from 'react-redux';
import { loadPaywall, openWindow } from './actions'
import {} from './slice'
import { useLinkoutTheme } from './hooks'
import { ExternalButton } from './types'
import Header from '../../Header'
import Loading from '../../Loading'
import { AwaitingApproval } from './AwaitingApproval'

const Linkout = () => {
  let parser = new DomParser();
  let description: any = ''
  const { linkout: {linkout} , inProcess, errors } = useSelector((state: any) => state.linkout)
  const theme = useLinkoutTheme(linkout)
  const html = { __html: linkout.assetDescription }
  const dynamicHtml = { __html: linkout.assetDynamicContent }
  const htmlDescription: any = parser?.parseFromString(html.__html) || ''
  if (htmlDescription.rawHTML) {
    description = htmlDescription?.getElementsByTagName('p')[0]?.innerHTML || ''
  }
  const cleanDescription = description?.replace('&nbsp;', ' ')?.replace(/[^a-zA-Z0-9.', ]/g, "")

  useEffect(() => {
    if (!linkout.linkOutOwner) return

    if (linkout.approved) {
      loadPaywall(linkout)
    }
    if (linkout.pageFontFamily) {
      document.body.style.fontFamily = linkout.pageFontFamily
    }
    document.body.style.backgroundColor = linkout.pageBorderColor
  }, [linkout, description])

  const externalButtons = linkout.externalButtons?.list
    ? linkout.externalButtons?.list.filter((x: ExternalButton) => x.enabled && x.title)
    : []

  const handleSubmit = () => {
    var link = 'mailto:support@fewcents.co'
    window.location.href = link
  }

  
  if (errors || linkout?.errors) {
    toast.error('Linkout not found.', { id: 'creatorTosterId' })
  }

  return linkout.linkOutOwner ? (
    <div className="linkout-root" style={theme.root}>
       <Head>
        <title>{`${linkout.assetSummary} on Linkout`}</title>
        <meta name="description" content={cleanDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fewcents.me/" />
        <meta property="og:title" content={`${linkout.assetSummary} on Linkout`} />
        <meta property="og:description" content={cleanDescription} />
        <meta property="og:image" content="/linkoutMeta.jpg" />

        <meta property="og:type" content="website"/>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fewcents.me/" />
        <meta property="twitter:title" content={`${linkout.assetSummary} on Linkout`} />
        <meta property="twitter:description" content={cleanDescription} />
        <meta property="twitter:image" content="/linkoutMeta.jpg" />
       </Head>
      <Header linkout={linkout} theme={theme} />
      <Box className="root-container" sx={theme.rootContainer}>
        {linkout.approved ? (
          <Paper className="root-paper" sx={theme.paperRoot}>
            <Box className="banner-root" sx={theme.bannerRoot}>
              <Box className="banner-container">
                <img alt="Crater's Banner" src={linkout?.assetGraphicUrl || '/Assets/Images/fewcents_bridge.jpg'}/>
              </Box>
              <Box className="avtar-container">
                {linkout?.creatorProfilePictureUrl ? (
                  <Avatar
                    sx={theme.paper}
                    alt="Creator"
                    src={linkout?.creatorProfilePictureUrl}
                    className="avtar"
                  />
                ) : null}
                <Box className="summary-container">
                  <Box>
                    <Typography
                      color={linkout.pageTextColor}
                      fontFamily={linkout.pageFontFamily}
                      variant="h5"
                      sx={{ fontWeight: '600 !important' }}
                      lineHeight="1.3"
                    >
                      {linkout.assetName}{' '}
                    </Typography>
                    <Typography
                      fontFamily={linkout.pageFontFamily}
                      variant="h6"
                      color={linkout.pageTextColor}
                      sx={{ opacity: '0.8' }}
                      fontWeight="400"
                      lineHeight="1.5"
                    >
                      {linkout.assetSummary}{' '}
                    </Typography>
                    <Link
                      underline="hover"
                      href={`mailto:${linkout.creatorContactInfoEmail}`}
                      fontFamily={linkout.pageFontFamily}
                      color={linkout.pageTextColor}
                      sx={{ opacity: '0.8' }}
                    >
                      {linkout.creatorContactInfoEmail}
                    </Link>
                  </Box>
                  <Box>
                    <Box className="media-icons">
                      {linkout?.websiteUrl ? (
                        <IconButton
                          sx={theme.root}
                          className="media-icon"
                          title={linkout?.websiteUrl}
                          onClick={() => openWindow(linkout?.websiteUrl)}
                        >
                          <Language></Language>
                        </IconButton>
                      ) : null}
                      {linkout?.creatorInstagramLink ? (
                        <IconButton
                          sx={theme.root}
                          className="media-icon"
                          title={linkout?.creatorInstagramLink}
                          onClick={() => openWindow(linkout?.creatorInstagramLink)}
                        >
                          <Instagram></Instagram>
                        </IconButton>
                      ) : null}
                      {linkout?.creatorTwitterLink ? (
                        <IconButton
                          sx={theme.root}
                          className="media-icon"
                          title={linkout?.creatorTwitterLink}
                          onClick={() => openWindow(linkout?.creatorTwitterLink)}
                        >
                          <Twitter></Twitter>
                        </IconButton>
                      ) : null}
                      {linkout?.creatorFacebookLink ? (
                        <IconButton
                          sx={theme.root}
                          className="media-icon"
                          title={linkout?.creatorFacebookLink}
                          onClick={() => openWindow(linkout?.creatorFacebookLink)}
                        >
                          <Facebook></Facebook>
                        </IconButton>
                      ) : null}
                      {linkout?.creatorYoutubeLink ? (
                        <IconButton
                          sx={theme.root}
                          className="media-icon"
                          title={linkout?.creatorYoutubeLink}
                          onClick={() => openWindow(linkout?.creatorYoutubeLink)}
                        >
                          <YouTube></YouTube>
                        </IconButton>
                      ) : null}
                      {linkout?.creatorTiktokLink ? (
                        <IconButton
                          sx={theme.root}
                          className="media-icon"
                          title={linkout?.creatorTiktokLink}
                          onClick={() => openWindow(linkout?.creatorTiktokLink)}
                        >
                          <Tiktok fill={theme.root.color}></Tiktok>
                        </IconButton>
                      ) : null}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="container-root">
              <Box className="container-panel">
                {html.__html ? (
                  <Paper variant="outlined" className="paper-container" sx={theme.paper}>
                    <div dangerouslySetInnerHTML={html}></div>
                  </Paper>
                ) : null}
                {dynamicHtml.__html ? (
                  <Paper variant="outlined" className="paper-container" sx={theme.paper}>
                    <div dangerouslySetInnerHTML={dynamicHtml}></div>
                  </Paper>
                ) : null}

                {externalButtons.length ? (
                  <Paper variant="outlined" className="button-container" sx={theme.paper}>
                    {externalButtons.map((x: ExternalButton, index: number) => (
                      <a key={index} href={x.url} style={theme.externalButton}>
                        {x.title}
                      </a>
                    ))}
                  </Paper>
                ) : null}
              </Box>
              <Box className="container-panel">
                <Paper
                  variant="outlined"
                  className="paper-container"
                  sx={{ paddingTop: '0px !important', ...theme.paper }}
                >
                  <div id="paywallHost"></div>
                </Paper>
              </Box>
            </Box>
            <Box className="reportContent-container" onClick={handleSubmit}>
              <Paper variant="outlined" className="paper-container" sx={theme.paper}>
                <ShortcutIcon />
                <Button fullWidth type="submit">
                  Report Content
                </Button>
              </Paper>
            </Box>
          </Paper>
        ) : (
          <AwaitingApproval theme={theme} />
        )}
      </Box>
    </div>
  ) : inProcess ? (
    <Loading />
  ) :  <Loading />
}

export default Linkout
