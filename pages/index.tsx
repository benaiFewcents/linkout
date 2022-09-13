import type { NextPage } from 'next'
import { useEffect } from "react";
import config from '../config'

const Home: NextPage = () => {
  useEffect(() => {
   window.location.href = config.publisherUrl + '/linkout'
  }, []);
  return null
}

export default Home
