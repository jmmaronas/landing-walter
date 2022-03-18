import  cursos  from "./db.js";

console.log(cursos)
const cursosContainer= document.querySelector("#cursosContainer");

for(const curso of cursos){
    cursosContainer.innerHTML+=`
            <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${curso.img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${curso.title}</h5>
                      <p class="card-text">${curso.description}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
            </div>
              `    
}

