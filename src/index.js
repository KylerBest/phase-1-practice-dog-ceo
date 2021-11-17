const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
document.addEventListener('DOMContentLoaded', function(){

    const dogBreedList = document.querySelector("#dog-breeds");
    
    const breedDropdown = document.querySelector("#breed-dropdown");


    fetch(imgUrl)
        .then(res => res.json())
        .then(json => json.message.forEach(element => {
            const img = document.createElement("img");
            img.src = element;
            document.querySelector("#dog-image-container").appendChild(img);
        }));


    fetch(breedUrl)
        .then(res => res.json())
        .then(breed => {


            function sortBreedList(){
                for(breed of dogBreedList.children){
                    if(breed.textContent[0] == breedDropdown.value){
                        breed.style.display = "list-item";
                    }else{
                        breed.style.display = "none";
                    }
                }
            }


            for(b in breed.message){
                const li = document.createElement("li");
                li.textContent = b;
                li.onclick = () => {
                    li.style.color = "blue";
                }
                li.style.cursor = "pointer";
                sortBreedList();
                dogBreedList.appendChild(li);
            }


            breedDropdown.onchange = () => {
                sortBreedList();
            };
        });
});