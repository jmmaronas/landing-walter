import cursos from "./db.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCursos();
});

const cursosContainer = document.querySelector("#cursosContainer");

function renderCursos() {
  for (const curso of cursos) {
    curso.innerHTML = "";
    cursosContainer.innerHTML += `
            <div class="card mb-3 py-2" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${curso.img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${curso.title}</h5>
                      <p class="card-text">${curso.description}</p>
                      <p class="card-text">Duracion: ${curso.duration} semanas</p>
                      <p class="card-text">Modalidad: ${curso.modality}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            
                    <!-- Button trigger modal -->
                    <div class="d-flex">
                        <button type="button" class="btn btn-success d-flex px-lg-4 mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal${curso.id}">
                        + Info
                        </button>
                        <button type="button" class="btn btn-primary px-lg-4 mx-2">comprar</button>
                        <button type="button" class="btn btn-secondary px-lg-4 mx-2">Agregar al carrito</button>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal${curso.id}" tabindex="-1" aria-labelledby="exampleModalLabel${curso.id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel${curso.id}">${curso.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="col-md-12">
                        <div class="card-body">
                        
                        <p class="card-text">${curso.description}</p>
                        <h6 class="card-title">Al finalizar el curso podras:</h6>
                        <ul id="skills${curso.id}"></ul>
                        <h6 class="card-title">Unidades:</h6>
                        <ul id="units${curso.id}"></ul>
                        <p class="card-text">Duracion: ${curso.duration} semanas</p>
                        <p class="card-text">Modalidad: ${curso.modality}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Agregar al Carrito</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                            </div>`;
    for (const skill of curso.skills) {
      document.getElementById(
        `skills${curso.id}`
      ).innerHTML += `<li>${skill.desciption}</li>`;
    }
    for (const unit of curso.units) {
      document.getElementById(
        `units${curso.id}`
      ).innerHTML += `<li>${unit.title}</li>`;
    }
  }
}
