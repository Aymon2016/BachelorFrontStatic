import './millpage.scss'

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MillPage = () => {
    const product = [
        {
            Date: 'Date',
            Aymon: 'Aymon',
            Dalim: 'Dalim',
            Forkhan: 'Forkhan',
            Zahed: 'Zahed'
        },
        {
            Date: 1,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },
        {
            Date: 2,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },
        {
            Date: 3,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },
        {
            Date: 4,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },
        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },
        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },
        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },

        {
            Date: 5,
            Aymon: 2,
            Dalim: 2,
            Forkhan: 1,
            Zahed: 2
        },


    ]

    const [startDate, setStartDate] = useState(new Date());


    return (

        <div className="millContainer">
            <div className='table'>
                <ul>
                    <div className="Title">
                        <span>Monthly Mill List</span>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <table>
                        <tbody>
                            {product.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.Date}</td>
                                    <td>{item.Aymon}</td>
                                    <td>{item.Dalim}</td>
                                    <td>{item.Forkhan}</td>
                                    <td>{item.Zahed}</td>
                                </tr>
                            ))}
                            <tfoot>
                                <tr>
                                    <td className='total'>Total</td>
                                    <td>25</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                </tr>

                            </tfoot>
                        </tbody>
                    </table>
                </ul>
            </div>
        </div>
    )
}

export default MillPage