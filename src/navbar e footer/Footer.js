import './Footer.css'
import logo from '../img/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BiNews } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaQuestion } from 'react-icons/fa'
import iconePagamento from '../img/icone-pagamento.webp'

function Footer(){
    return(
    <div>
        <footer>
            <div className="container-fluid">
              <div className="row">{/*div da parte de cima do footer*/}
                <div className='col'>
                    <h4 className='pt-3 pe-3 ms-3'>Atendimento</h4> 
                        <ul>
                         {/*alinhar a lista com justify*/}<li className='d-flex justify-content-sm-start'><a href='https://api.whatsapp.com/send?phone=5521999999999' target='_blank' className='icon-custom'><BsWhatsapp size={30}/> Whatsapp: (21)99999-9999</a></li>
                            <li className='d-flex justify-content-sm-start'><a href='mailto:gabrielpekim@hotmail.com' target='_blank' className='icon-custom'><AiOutlineMail size={30}/> E-mail: gabrielpekim@hotmail.com</a></li>
                            <li className='d-flex justify-content-sm-start'><a href='#' className='icon-custom'><FaQuestion/> Perguntas frequentes</a></li>

                        </ul>
                    </div> 
                    <div className='col'>
                    <h4 className='pt-3 pe-3 ms-5'>Institucional</h4> 
                        <ul>
                            <li><button className='botao-rodape'><Link to='quem-somos'>Quem somos</Link></button></li>
                            <li><button className='botao-rodape'><Link to='quem-somos'>Localização</Link></button></li>
                            <li><button className='botao-rodape'><Link to='quem-somos'>Lojas</Link></button></li>

                        </ul>
                    </div> 
                    <div className='col'>
                    <h4 className='pt-3 pe-3 ms-3'>Formas de pagamento</h4> 
                        <div className='row'>
                            <div className='col'><img src={iconePagamento} className='icone-pagamento'/></div>
                            
                        </div>
                    </div> 
                </div>   
                    <div className="row">                       
                        <div className="col-lg-4 col-sm-4 col-xs-12">
                            <div className="single_footer">
                                <h4 className='ms-4'>Produtos</h4>
                                <ul>
                                    <li><button className='botao-rodape'><Link to='lancamento'>Lançamentos</Link></button></li>
                                    <li><button className='botao-rodape'><Link to='montarpc'>Monte seu computador</Link></button></li>
                                    <li><button className='botao-rodape'><Link to='produto'>Ver produtos</Link></button></li>
                                    <li><button className='botao-rodape'><a href="#">Peças de afiliados</a></button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="single_footer single_footer_address">
                                <h4 className='ms-4'>Outros</h4>
                                <ul>
                                    <li><button className='botao-rodape'><Link to='faq'>Trocas e fretes</Link></button></li>
                                    <li><button className='botao-rodape'><Link to ='privacidade'>Privacidade</Link></button></li>
                                    <li><button className='botao-rodape'><Link to='/' end>Home</Link></button></li>
                                    <li><button className='botao-rodape'><Link to='login'>Login</Link></button></li>
                                    <li><button className='botao-rodape'><Link to='cadastro'>Cadastro</Link></button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="single_footer single_footer_address">
                                <h4>Assine a nossa Newsletter</h4>
                                <p>Receba ofertas exclusivas no seu e-mail.</p>
                                <div className="signup_form">                           
                                    <form action="#" className="subscribe">
                                        <BiNews size={25}/><input type="text" className="subscribe-input" placeholder="Digite seu e-mail"/>
                                        <button type="button" className="subscribe-btn ms-2 mt-2"><i className="fas fa-paper-plane"></i>Receber ofertas</button>
                                    </form>
                                </div>
                            </div>
                            <div className="social_profile">
                                <ul className='d-flex flex-row justify-content-start'>
                                    <li className='ms-2 mt-4'><a href="#" className='icon-custom'><BsFacebook size={30}/></a></li>
                                    <li className='ms-2 mt-4'><a href="#" className='icon-custom'><BsTwitter size={30}/></a></li>
                                    <li className='ms-2 mt-4'><a href="#" className='icon-custom'><BsWhatsapp size={30}/></a></li>
                                    <li className='ms-2 mt-4'><a href="#" className='icon-custom'><BsInstagram size={30}/></a></li>
                                </ul>
                            </div>                          
                        </div>        
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <p className="copyright">Todos os direitos reservados © 2022. TechBits <img src={logo} className='logo-custom'/> <br/><a href="https://github.com/pekim2" target="_blank">Gabriel Pekim</a>.</p>
                        </div>                
                    </div>                
                </div>
                </footer>
            </div>    
   
    )
}

export default Footer