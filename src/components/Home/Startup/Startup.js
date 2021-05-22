import React from 'react';
import startupBg from '../../../images/Rectangle 840.png';
import startupBg_2 from '../../../images/Rectangle 849.png';
import startupBg_3 from '../../../images/Rectangle 842.png';
import StartupContent from '../StartupContent/StartupContent';

const Startup = () => {
    const startupInfos = [
        {
            img: startupBg,
            button: 'Advice a Startup',
            id: 201
        },
        {
            img: startupBg_2,
            button: 'Join Minority Ventures Cohort',
            id: 202
        },
        {
            img: startupBg_3,
            button: 'Help <Code/>',
            id: 203
        }
    ]
    return (
        <section>
            <div className="container">
                <div className="row py-5">
                    {
                        startupInfos.map(info => 
                        <StartupContent info={info} key={info.id}>
                        </StartupContent>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Startup;