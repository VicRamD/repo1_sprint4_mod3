window.addEventListener('load', ()=>{
    //Capturar botones
        const btnAgregarPoder = document.querySelector("#btnAgregarPoder");
        console.log(btnAgregarPoder);
        const btnAgregarAliado = document.querySelector("#btnAgregarAliado");
        console.log(btnAgregarAliado);
        const btnAgregarEnemigo = document.querySelector("#btnAgregarEnemigo");
        console.log(btnAgregarEnemigo);

        const agregarInputVector = (queryIdInputAgregar, queryIdDivContenedor, inputName) => {
            console.log("en agregarInputVector");
            //captura de elementos
            const inputParaAgregar = document.querySelector(queryIdInputAgregar);
            console.log(inputParaAgregar);
            const contenedor = document.querySelector(queryIdDivContenedor);
            console.log(contenedor);

            //crear div contenedor del input y el boton para quitar
            const div = document.createElement('div');
            div.className += "w-full";
            contenedor.appendChild(div);
            // -------------------

            //crear input del elemento agregado
            const input = document.createElement('input');
            input.type = 'text';
            input.name = inputName;
            input.value = inputParaAgregar.value;
            //required minlength="3" maxlength="60"
            input.required = true;
            input.minLength=3;
            input.maxLength=60;
            input.className += "bg-rose-300 w-4/5";
            //input.readOnly = true;
            //console.log(input);
            div.appendChild(input);
            //console.log("div padre:", div);
            //---------------------
            inputParaAgregar.value = '';

            //crear botón quitar
            const btnQuitar = document.createElement('button');
            //console.log("BTN quitar: ", btnQuitar);
            btnQuitar.innerText = 'Quitar';
            btnQuitar.type = 'button';
            btnQuitar.className += "outline-2 outline-red-600 bg-rose-200 w-1/5";
            
            div.appendChild(btnQuitar);

            //función para quitar poder
            btnQuitar.addEventListener('click', ()=>{
                //console.log("BTN quitar: ", btnQuitar);
                const padre = btnQuitar.parentElement;
                //console.log(padre);
                padre.remove();
            });
            //-------------------

            //revisar lista de inputs
            /*const vectorInputs = document.querySelectorAll('input[name="inputName"]');
            vectorInputs.forEach(input => {
                console.log(input.value);
            }); */
        }

        btnAgregarPoder.addEventListener('click', ()=>{
            agregarInputVector('#idPoder','#poderesContainer','poderes[]');
        });
        btnAgregarAliado.addEventListener('click', ()=>{
            agregarInputVector('#idAliado','#aliadosContainer','aliados[]')
        });
        btnAgregarEnemigo.addEventListener('click', ()=>{
            agregarInputVector('#idEnemigo','#enemigosContainer','enemigos[]');
        });
})