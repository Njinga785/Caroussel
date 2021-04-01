let images = document.querySelectorAll('.images');
const rightBtn = document.querySelector('#droite');
const leftBtn = document.querySelector('#gauche');
const autorun = document.querySelector('#autorun');
const upload = document.querySelector('#upload');
const blocImage = document.querySelector('#bloc-image');


// Défiler vers la droite
let initValue = 0;

function rightMouvement() {
    
    images[initValue].classList.remove('image-active');

        if(initValue > images.length - 2) {
            initValue = -1;
        }
    images[initValue + 1].classList.add('image-active');
    initValue++;
}

rightBtn.addEventListener("click",rightMouvement)

//Défiler vers la gauche 
function leftMouvement() {
    images[initValue].classList.remove('image-active');
    if (initValue === 0) {
        initValue = images.length
    }
    images[initValue - 1].classList.add('image-active');
    initValue--;
}

leftBtn.addEventListener("click",leftMouvement)


//Autorun
 let autorunFct =  window.setInterval(function() {
        rightMouvement();
    },1000)

//Stop Autorun
autorun.addEventListener("click", function () {
    if (autorun.classList.contains('pause')) {
        autorunFct =  window.setInterval(function() {
            rightMouvement();
        },1000)
        autorun.classList.remove('pause')
    }
    else {
    window.clearInterval(autorunFct);
    autorun.classList.add('pause');
    }
})


//Ajouter des images depuis l'ordinateur


upload.addEventListener("change", function () {
    
   const reader = new FileReader() //Permet de déchiffrer notre file
   reader.onload = function() {  //Fonction pour créer une image via JS a partir de nos données de file
       let image = new Image();
       image.src = reader.result; // reader.result = contenu du fichier // image.src  
       
    blocImage.appendChild(image); //Place notre nouvelle image dans la div bloc-image
    image.classList.add('images') //Ajoute la class images à notre nouvelle image
    images = document.querySelectorAll('.images'); // Re-selectionne tous les éléments ayant la class image pour pouvoir intégrer la nouvelle image
   }
   reader.readAsDataURL(upload.files[0])
}, false)