import pc1 from '../img/pc1.jpg'
import pc2 from '../img/pc2.jpg'
import pc3 from '../img/pc3.png'

function Carrousel(){
    return(
<div className='container'>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="6000">
      <img src={pc1} class="d-block w-100" alt="Computador gamer nomeado de Megazord"/>
    </div>
    <div class="carousel-item" data-bs-interval="6000">
      <img src={pc2} class="d-block w-100" alt="Computador gamer nomeado de Tech-Rex"/>
    </div>
    <div class="carousel-item">
      <img src={pc3} class="d-block w-100" alt="Computador gamer nomeado de Red Moon"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
)
}

export default Carrousel