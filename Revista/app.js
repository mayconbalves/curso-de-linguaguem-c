let preview = document.querySelector(".prev-btn");
let next = document.querySelector(".next-btn");
let supriseButton = document.querySelector(".surprise-btn");
let author = document.querySelector(".author");
let author_text = document.querySelector("#author");
let job = document.querySelector("#job");
let description = document.querySelector("#description");
let body = document.body;

// VARIABLE THAT STORES NUMBER TO ACCESS THE OBJECT
let currentItem = 0;
// EVENT LISTENER
preview.addEventListener("click", prevImage);
next.addEventListener("click", nextImage);
body.onload = () =>{
    author.src = Devs[0].image_url;
    author_text.innerHTML = Devs[0].author;
    job.innerHTML = Devs[0].job;
    description.innerHTML = Devs[0].description
}
supriseButton.addEventListener("click",surpriseMe);

//FUNCTIONS
function nextImage(){
   
    verifyNextIndex();    
    author.src = Devs[currentItem].image_url;
    author_text.innerHTML = Devs[currentItem].author;
    job.innerHTML = Devs[currentItem].job;
    description.innerHTML = Devs[currentItem].description;    
}

function prevImage(){
    verifyPrevIndex();
    author.src = Devs[currentItem].image_url;
    author_text.innerHTML = Devs[currentItem].author;
    job.innerHTML = Devs[currentItem].job;
    description.innerHTML = Devs[currentItem].description; 
}

function verifyNextIndex(){
    if(currentItem > 8){
        currentItem = 0;
    }else{
        ++currentItem;
    }  
}

function verifyPrevIndex(){
    
    if(currentItem > 0){
        currentItem--;
    }else{
        currentItem = 9;
    }
}
function surpriseMe(){
    currentItem = Math.floor(Math.random() * 10);
    author.src = Devs[currentItem].image_url;
    author_text.innerHTML = Devs[currentItem].author;
    job.innerHTML = Devs[currentItem].job;
    description.innerHTML = Devs[currentItem].description; 
}

// OBJECT
const Devs = [
    {
        author: "Noah	James",
        job: "Computer Scientist",
        description: "A computer scientist applies their technological skills and resources to solve IT problems for businesses. They write new software to complete tasks in a quick and efficient period as well as develop new functions that can be of use for employees or clients.",
        image_url: "https://image.freepik.com/fotos-gratis/programador-trabalhando-em-laptop-tecnologia-de-computador_266732-910.jpghttps://image.freepik.com/fotos-gratis/programador-trabalhando-em-laptop-tecnologia-de-computador_266732-910.jpg",
    },
    {
        author: "Jack	Connor",
        job: "IT Security Specialist",
        description: " IT security specialists work in various industries to build and maintain digital protective measures on intellectual property and data that belong to an organization. They help companies create contingency plans in case information gets hacked from their networks and servers. These professionals also create strategies to troubleshoot problems as they arise.",
        image_url: "https://image.freepik.com/fotos-gratis/homem-analisando-codigo-binario-na-tela-virtual_53876-98559.jpg",
    },
    {
        author: "Oliver	Jake",
        job: "Data Scientist",
        description: "A data scientist analyzes and organizes data to determine trends that can influence business decisions. Their methods and IT tools use statistics and machine learning to help collect and process a company's data such as financial records, sales, prospects and lead generation. Some duties vary for specific industries. For example, data scientists in the healthcare industry keep electronic health records (EHRs) intact for hospitals to have access to confidential medical information. They may also use data to help healthcare organizations make sound business decisions.",
        image_url: "https://image.freepik.com/fotos-gratis/retrato-de-estudio-emocional-feliz-engracado-sorridente-namorado-homem-com-uma-espessa-barba-em-pe-com-os-bracos-cruzados-vestido-de-camiseta-vermelha_295783-458.jpg",
    },
    {
        author: "Lara Jean",
        job: "Support Specialist",
        description: "Support specialists are responsible for reviewing and solving computer network and hardware problems for a business. They can work in a variety of industries to provide general support to a company's employees, or they can work at a technology or software as a service (SaaS) company and provide technical support on user experience issues that require technical assistance.",
        image_url: "https://image.freepik.com/fotos-gratis/mulher-jovem-com-corte-de-cabelo-afro-usando-um-macacao-laranja_273609-21587.jpg",
    },
    {
        author: "Lara Parker",
        job: "Computer Programmer",
        description: "A computer programmer is someone who writes new computer software using coding languages like JavaScript, C, python and Java. Video game software can be updated to improve online gameplay, which is an opportunity for programmers to troubleshoot problems experienced by gamers after the game is released to the general public.",
        image_url: "https://image.freepik.com/fotos-gratis/mulher-asiatica-seria-de-olhos-castanhos-trabalhando-no-escritorio-com-um-laptop-e-segurando-uma-caneta_197531-19565.jpg",
    },
    {
        author: "William Damian",
        job: "IT Technician",
        description: "An IT technician collaborates with support specialists to analyze and diagnose computer issues. They also monitor processing functions, install relevant software and perform tests on computer equipment and applications when necessary. They may also train a company's employees, clients and other users on a new program or function as well.",
        image_url: "https://image.freepik.com/fotos-gratis/jovem-negro-sentado-no-chao-com-um-laptop-sorrindo-e-apontando-para-o-lado_1187-25207.jpg",
    },
    {
        author: "Chris Kyle",
        job: "Systems Analyst",
        description: "A systems analyst reviews design components and uses their knowledge of information technology to solve business problems. They identify ways that infrastructure needs to change to streamline business and IT operations. They can also assist technicians in training staff to implement the changes they propose.",
        image_url: "https://image.freepik.com/fotos-gratis/imagem-de-jovem-bonito-em-fones-de-ouvido-ouvindo-musica-na-parede-branca_114579-42834.jpg",
    },
    {
        author: "Thomas Joe",
        job: "Network Engineer",
        description: "Network engineers work on the day-to-day maintenance and development of a company's computer network, utilizing their skills to make the network available and efficient for all employees within an organization.",
        image_url: "https://image.freepik.com/fotos-gratis/homem-analisando-codigo-binario-na-tela-virtual_53876-98559.jpg",
    },
    {
        author: "Charlie Kyle",
        job: "User Experience Designer",
        description: "A user experience (UX) designer is involved with all facets of product development regarding its purchasing, branding, usability and functionality. They collect and review user feedback to determine what a product needs to be efficient, functional and successful. They apply this feedback to the design, organization and usability. These professionals then monitor the process of testing and revising products until they meet their consumers' high-quality standards.",
        image_url: "https://image.freepik.com/fotos-gratis/homem-feliz-lendo-o-codigo-qr-pelo-celular-em-casa_329181-2729.jpg",
    },
    {
        author: "Candice Brown",
        job: "Database Administrator",
        description: "Database administrators employ specialized software to organize and keep track of data. The software can be associated with software configuration, security and performance when applicable. These professionals frequently diagnose and solve complex IT issues related to the data infrastructure to ensure an organization's data is safe, accessible and easy to navigate.",
        image_url: "https://image.freepik.com/fotos-gratis/foto-de-uma-jovem-mulher-de-negocios-olha-monitor-bebida-quente-cafe-conversa-telefone_274222-22801.jpg",
    },
]




