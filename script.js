let personas = [];

function crearPersona() {
    const nombre = document.getElementById('nombre').value.trim();
    const puesto = document.getElementById('puesto').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const imagen = document.getElementById('imagen').value.trim();
    
    if (!nombre || !puesto || !descripcion || !imagen) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const persona = { nombre, puesto, descripcion, imagen };
    personas.push(persona);

    // Limpiar los inputs después de agregar la persona
    document.getElementById('nombre').value = '';
    document.getElementById('puesto').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('imagen').value = '';

    alert("Persona creada con éxito.");
}

function mostrarPersonas() {
    const tarjetasContainer = document.getElementById('tarjetas');
    tarjetasContainer.innerHTML = ''; // Limpiar el contenido previo
    
    personas.forEach(persona => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <img src="${persona.imagen}" alt="Imagen de ${persona.nombre}">
            <div class="tarjeta-info">
                <h2>${persona.nombre}</h2>
                <p><strong>Puesto:</strong> ${persona.puesto}</p>
                <p><strong>Descripción:</strong> ${persona.descripcion}</p>
            </div>
        `;

        tarjetasContainer.appendChild(tarjeta);
    });
}