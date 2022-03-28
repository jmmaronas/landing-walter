document.getElementById("botonPrueba").addEventListener("click", (e)=>{
    e.preventDefault()
    const pharam= location.hash.slice(1);
    console.log(pharam);
    const curso= cursos.find((e)=>e.id===pharam)
    mostrarItem(curso);
})

const principal = document.getElementById("principal");

function mostrarItem(curso){
    principal.innerHTML="";
    principal.innerHTML=`
        <div class="container d-flex justify-content-center">
            <div class="card mb-3">
                <img src="${curso.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${curso.title}</h5>
                    <p class="card-text">${curso.description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    `    
}