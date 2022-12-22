import "./sidebar.css"
import logo from '../../assets/logo.png'

const Sidebar = ({ sidebarOpen, closeSidebar })=>{
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title"> 
                <div className="sidebar__img">
                    <img src={logo}alt="logo" />
                    <h1>JellyAdmin</h1>
                </div>
                    <i onClick={()=> closeSidebar()} className="fa fa-times" id="sidebarIcon" aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <i className="fa fa-minus-square"></i>
                        <a href="#">Home</a>
                    </div>
                    <h2>ADMINISTRAÇÃO</h2>
                    <div className="sidebar__link">
                        <i className="fa fa-tachometer"></i>
                        <a href="#">Administrativo</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-building"></i>
                        <a href="#">Lojas</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-archive"></i>
                        <a href="#">Produtos</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-bars"></i>
                        <a href="#">Categorias</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-cutlery"></i>
                        <a href="#">Pedidos</a>
                    </div>
                    <h2>PESSOAS</h2>
                    <div className="sidebar__link">
                        <i className="fa fa-male"></i>
                        <a href="#">Administradores</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-male"></i>
                        <a href="#">Usuarios</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-dollar"></i>
                        <a href="#">Monetario</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-file-text"></i>
                        <a href="#">Plataforma</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-file-text"></i>
                        <a href="#">Politica e Privacidade</a>
                    </div>
                    <div className="sidebar__logout">
                        <i className="fa fa-power-off"></i>
                        <a href="#">LOGOUT</a>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar;
