function mostrarCuriosidade() {
    const curiosidades = [
        "O Rei Luís XIV da França ficou conhecido como 'Rei Sol' e é símbolo do absolutismo.",
        "A criação dos Estados modernos foi essencial para o nascimento do capitalismo.",
        "Com o Estado Moderno, surgiram as diplomacias e os passaportes.",
        "O Tratado de Vestfália (1648) ajudou a consolidar o conceito de Estado soberano."
    ];

    const aleatorio = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("curiosidade").textContent = curiosidades[aleatorio];
}
