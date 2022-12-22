import './Produto.css'
import {Link} from 'react-router-dom'
import pc1 from '../img/pc1.jpg'
import pc2 from '../img/pc2.jpg'
import pc3 from '../img/pc3.png'
import monitor1 from '../img/monitor1.jpg'
import mouse1 from '../img/mouse1.jpg'
import fone1 from '../img/fone1.webp'

function Produto(){

return(
    <div>
        <div className='container-fluid w-75 text-center'>
            <h2 className="my-4">Os principais computadores vendidos na nossa loja</h2>
            <div className='row mb-3'>
                <div className='col'>
                    <div className="card fundo-card">
                        <a href='#'><img src={pc1} className="card-img-top" alt="Foto do Computador Megazord"/></a>
                        <div className="card-body">
                            <h5 className="card-title">Megazord</h5>
                            <p className="card-text">Com as mais recomendadas peças do mercado juntas para o melhor desempenho, experimente o Megazord dos computadores.</p>
                            <button className="btn botao-produto">Ver detalhes</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card fundo-card">
                       <a href='#'><img src={pc2} className="card-img-top" alt="Foto do Computador T-Rex"/></a>
                        <div className="card-body">
                            <h5 className="card-title">Tech-Rex</h5>
                            <p className="card-text">Com os tradicionais e mais conhecidos componentes, conheça o Tiranossauro Rex da tecnologia, o Tech-Rex.</p><br/>
                            <button className="btn botao-produto">Ver detalhes</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card fundo-card">
                    <a href='#'><img src={pc3} className="card-img-top" alt="Foto do Computador Blood Moon"/></a>
                        <div className="card-body">
                            <h5 className="card-title">Blood Moon</h5>
                            <p className="card-text">Peças alinhadas para o melhor desempenho, com uma alta perfomance fenomenológica, conhecida como a Lua de Sangue</p>
                            <button className="btn botao-produto">Ver detalhes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*linha 2*/}
            <h2 className='my-4'>Outros produtos da loja</h2>
            <div className='row mb-3'>
                <div className='col'>
                    <div className="card fundo-card">
                    <a href='#'><img src={monitor1} className="card-img-top" alt="Monitor Asus 31 polegadas e meia 144Hz "/></a>
                        <div className="card-body">
                            <h5 className="card-title">Monitor Asus 31' 144Hz</h5>
                            <p className="card-text">Monitor Gamer Asus TUF 31.5' LED, Curvo, 144 Hz, 2K QHD, 1ms, FreeSync, HDR 10, 92% sRGB, HDMI/DisplayPort, Ajuste de Alt, Vesa, Som - VG32VQ</p>
                            <button className="btn botao-produto">Ver detalhes</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card fundo-card">
                    <a href='#'><img src={mouse1} className="card-img-top" alt="Mouse Gamer Sem Fio Logitech G PRO Wireless"/></a>
                        <div className="card-body">
                            <h5 className="card-title">Mouse Gamer Sem Fio Logitech G PRO Wireless</h5>
                            <p className="card-text">Tecnologia LIGHTSPEED, Design Ambidestro, Sensor HERO 25K e Bateria Recarregável</p>
                            <button className="btn botao-produto">Ver detalhes</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card fundo-card">
                    <a href='#'><img src={fone1} className="card-img-top" alt="Headset Gamer P2 G332 Logitech G"/></a>
                        <div className="card-body">
                            <h5 className="card-title">Headset Gamer P2 G332 Logitech G</h5>
                            <p className="card-text">Aproveite toda a emoção de uma incrível experiência sonora, completa em todas as plataformas.</p>
                            <button className="btn botao-produto">Ver detalhes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-5'>
                <div className='col'>
                    <Link to='montarpc' className='subscribe-btn d-flex justify-content-center p-2 text-white'>Montar o meu computador</Link>
                </div>
                <div className='col'>
                    <Link to='produto' className='subscribe-btn d-flex justify-content-center p-2 text-white'>Ver mais produtos</Link>
                </div>
                <div className='col'>
                    <Link to='lancamento' className='subscribe-btn d-flex justify-content-center p-2 text-white'>Lançamento de produtos</Link>
                </div>
            </div>


        </div>
    </div>
)
}
export default Produto