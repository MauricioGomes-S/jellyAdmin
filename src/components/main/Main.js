import profile from "../../assets/profile.png";
import "./Main.css";

function Main(prop){
return(

    <main>
        <div className="main__container">
            <div className="main__title">
                <img src={profile} alt="foto do usuario"></img>
                <div className="main__greeting">
                    <h1 className="main__nameTitle"> Ola Mauricio</h1>
                    <p>Bem Vindo ao seu painel</p>
                </div>
            </div>
            <div className="main__cards"> 

                <div className="card">
                    <i className="fa fa-file-text fa-2x text-lightblue"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Número de pedidos</p>
                        <p className="font-bold text-title">1</p>
                    </div>
                </div>
                <div className="card">
                    <i className="fa fa-dollar fa-2x text-green"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Pagamentos</p>
                        <p className="font-bold text-title">0</p>
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-archive fa-2x text-yellow"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Numero de Produtos</p>
                        <p className="font-bold text-title">135</p>
                    </div>
                </div>


                <div className="card">
                    <i className="fa fa-bars fa-2x text-brown"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Categorias</p>
                        <p className="font-bold text-title">26</p>
                    </div>
                </div>

            </div>
            <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Daily reports</h1>
                            <p>Cabo frio, Rio de Janeiro, Brasil</p>
                           
                        </div>
                        <i className="fa fa-usd"></i>
                        {/* lugar deke */}
                       
                    </div>
                    {/* <Chart></Chart> */}
                </div>
                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Daily reports</h1>
                            <p>Cabo frio, Rio de Janeiro, Brasil</p>
                        </div>
                        <i className="fa fa-area-chart"></i>
                    </div>
                    <div className="card1">
                        <h1>Pagamentos</h1>
                        <p>R$ 15,00</p>

                    </div>
                    <div className="card2">
                        <h1>Lucro</h1>
                        <p>R$ 1,40</p>

                    </div>
                    <div className="card3">
                        <h1>Custos</h1>
                        <p>R$ 8,70</p>

                    </div>

                    <div className="card4">
                        <h1>Outras despesas</h1>
                        <p>R$ 0,96</p>

                    </div>
                </div>
            </div>
        </div>
    </main>
);

};


export default Main