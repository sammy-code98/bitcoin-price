
import Head from 'next/head'
import Navbar from './Navbar'

function Layout(props) {
    return (
        <div>

            <Head>
                <title>Bitcoin App</title>

                <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css" />


            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>



        </div>




    )
}

export default Layout
