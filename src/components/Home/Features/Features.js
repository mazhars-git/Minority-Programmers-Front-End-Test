import React from 'react';
import cardLogo from '../../../images/Frame 313.png';
import FeatureContent from '../FeatureContent/FeatureContent';

const Features = () => {
    const featuresInfo =[
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            key: '001'
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            key: '002'
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            key: '003'
        },
        {
            img: cardLogo,
            heading: 'Mangoswap',
            details: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
            fundTitle: 'Fund rise',
            percentage: '50%',
            amount: '200,000/400,000',
            key: '004'
        },
    ]
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h2>Featured Startups</h2>
                        <p>Invest in the next billion dollar company today</p>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {
                                featuresInfo.map(info => 
                                <FeatureContent 
                                info={info} 
                                key={info.key}
                                >
                                </FeatureContent>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;