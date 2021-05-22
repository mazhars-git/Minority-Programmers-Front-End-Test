import React from 'react';
import MainMenu from '../../Home/MainMenu/MainMenu';
import CardContent from '../CardContent/CardContent';
import CardHeader from '../CardHeader/CardHeader';
import CardSidebar from '../CardSidebar/CardSidebar';

const CardDashboard = () => {
    return (
        <section className="bg-color">
                <MainMenu></MainMenu>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12 px-0">
                    <CardHeader></CardHeader>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 px-2">
                        <CardSidebar></CardSidebar>
                    </div>
                    <div className="col-md-8 px-2">
                        <CardContent></CardContent>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardDashboard;