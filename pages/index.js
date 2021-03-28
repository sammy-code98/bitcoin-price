import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'
import History from '../components/History'


function Home(props) {
  return (

    <Layout>
      <h1>Home</h1>
      <p>Check current bitcoin rate</p>

      <Prices bpi={props.bpi} />


    </Layout>

  )
}
// now the main drill
// consuming api
Home.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')

  // when u use fetch it returns a promise which u must map to json
  const data = await res.json()
  // console.log(data);
  return {
    bpi: data.bpi
  }

}







export default Home;