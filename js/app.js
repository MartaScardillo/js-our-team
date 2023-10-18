const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
];

const rowDOMElement = document.querySelector('.row');
console.log(rowDOMElement);

for (let i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i]);
    const teamMember = teamMembers[i];

    const html = `
        <div class="col-4">                  
            <div class="card mb-4">
                <img src="./img/${teamMember.foto}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">${teamMember.nome}</h5>
                    <p class="card-text">${teamMember.ruolo}</p>
                </div>
            </div>
        </div>`;

    rowDOMElement.innerHTML += html
}
