import { storeWrapper } from '../../Store'
import dynamic from 'next/dynamic'
import { getLinkoutAsset } from '../../Components/Pages/Linkout/service'
// import Linkout from '../../Components/Pages/Linkout';

const Linkout = dynamic(() => import("../../Components/Pages/Linkout"), {
  ssr: false,
  });

const LinkoutHome = () => {
  return <Linkout />
}

export default LinkoutHome

export const getServerSideProps = storeWrapper.getServerSideProps(store => async ({ query }) => {
  let publisherSlug: any = query?.publisherSlug!
  let assetCode: any = query?.assetCode?.at(0) ?? ''
  await store.dispatch(getLinkoutAsset({publisherSlug, assetCode}))
  return {
    props: {
    }
  }
})