document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});

const cardsContiner = document.getElementById("cardsContainer");

function renderCards() {  
  cardsContiner.innerHTML = "";
  for (const curso of cursos) {
    cardsContiner.innerHTML += `
      <div class="col mb-5">
        <div class="card h-100">
          <!-- Product image-->
          <img class="card-img-top" src="${curso.img}" alt="curso.jpg" height="100rem"/>
          <!-- Product details-->
          <div class="card-body p-2">
              <div class="text-center">
                  <!-- Product name-->
                  <h6 class="fw-bold">${curso.title}</h6>                  
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a id="detalles${curso.id}" class="btnCurso btn btn-outline-dark mt-auto" href="#${curso.id}">Ver detalles del curso</a></div>
          </div>
        </div>
      </div>
      `;
      console.log("detalles"+curso.id)
      document.getElementById("detalles"+curso.id).addEventListener("click",(e)=>{
        console.log(e.target)
        e.preventDefault();
        const pharam= location.hash.slice(1);
        console.log(pharam);
        const curso= cursos.find((e)=>e.id===pharam)
        mostrarItem(curso);
      });
    
      //document.getElementById()
  }
}
