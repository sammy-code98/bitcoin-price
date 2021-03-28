import React from 'react'
import axios from 'axios'

function History(props) {
    return (
        <div>
            <p>History</p>
            {history}
        </div>
    )
}
const history = axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function (response) {
        console.log(response);
        bpi: response.data

        // console.log(bpi);
    })

export default History
