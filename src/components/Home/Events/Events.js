import React from 'react';
import cardLogo from '../../../images/Frame 313.png';
import EventDetails from '../EventDetails/EventDetails';

const Events = () => {
    const eventsInfo=[
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 301
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 302
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 303
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 304
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 305
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 306
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 307
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 308
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 309
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 310
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            id: 311
        }
    ]
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-white">
                        <h2>Upcoming Startup</h2>
                        <p>These visionary companies and disruptors are on their journey to change the world.</p>
                    </div>
                    
                        {
                            eventsInfo.map(info => <div className="col-md-3 pb-3">
                            <EventDetails info={info} key={info.id}></EventDetails>
                            </div>
                            )
                        }
                    
                </div>
                <div className="py-5 text-center">
                    <button className="btn btn-success">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Events;