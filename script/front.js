// fetch the category for the button
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));

};
// displaying all pets
const displayALLAnimals = (animals) => {
  const animalContainer = document.getElementById("animals");
  animalContainer.innerHTML = "";




  animals.forEach((animal) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";


    const dob = animal.date_of_birth
      ? (animal.date_of_birth)
      : "Date not available";
    const breed = animal.breed ? animal.breed : "Breed not available";
    const gender = animal.gender ? animal.gender : "Gender not available";
    const price = animal.price ? animal.price : "Price not available";

    card.innerHTML = `
        <figure class="h-[200px]">
          <img src=${animal.image}
         class="h-full w-full object-cover"
      alt="Animal Image" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${animal.pet_name}</h2>
        
        <!-- info -->

        <section class="text-[#131313b3]"></section>
  <div class="flex gap-1">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-4 mt-1">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>

    <p class="text-[#131313b3]">Breed: ${breed}</p>

  </div>
  <div class="flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-4 mt-1">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>

    <p class="text-[#131313b3]">Date: ${dob}</p>
  </div>
  <div class="flex ">
    <?xml version="1.0" ?><svg class="bi bi-gender-femal w-5 mt-1 " fill="currentColor" height="16" viewBox="0 0 16 16"
      width="16" class="w-6 mt-2" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
        fill-rule="evenodd" />
    </svg>

    <p class="text-[#131313b3]">Gender: ${gender}</p>
  </div>
  <div class="flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-5 ">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

    <p class="text-[#131313b3]">Price: ${price}</p>
  </div>
  <div class="w-full h-1 bg-slate-100 my-2"></div>
  </section>
        <div class="card-actions">
        <button class="btn btn-sm bg-white" onclick="displayLike('${animal.image}')">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
                
          </button>
          <button class="btn btn-sm bg-white text-[#1D7A81] text-lg" onclick="modalCountdown(this)" >Adopt</button>
          <button class="btn btn-sm text-[#1D7A81] bg-white text-lg" onclick="loadDetails('${animal.category}')">Details</button>
        </div>
      </div>
      `;
    animalContainer.append(card);
  });
};

// loading all animals

const loadAllAnimals = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((d) => displayALLAnimals(d.pets))
    .catch((error) => console.log(error));
};

loadAllAnimals();
//loading animals

const loadAnimals = (animal, id = " ") => {



  fetch(`https://openapi.programming-hero.com/api/peddy/category/${animal}`)
    .then((res) => res.json())
    .then((d) => displayAnimals(d.data))
    .catch((error) => console.log(error));
};


const handleButton = (animal, id) => {
  const animalContainer = document.getElementById("animals");
  animalContainer.innerHTML = "";
  const spinner = document.getElementById("spin");
  spinner.classList.remove('hidden');

  removeActiveClass();
  const activeBtn = document.getElementById(`btn-${id}`);
  console.log(activeBtn);
  activeBtn.classList.add("bg-[#0E7A81]");
  activeBtn.classList.add("text-white");

  setTimeout(() => {
    loadAnimals(animal, id);
    spinner.classList.add("hidden");
  }, 2000);
}
// creating display categories button

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("CategoryButton");

  categories.forEach((item) => {

    const ani = item.category.toLowerCase();
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
        <button id="btn-${item.id}" onclick="handleButton('${ani}','${item.id}')" class="btn category-btn">
        <div class="flex items-center">
            <img class=" w-8 " src=${item.category_icon} alt="">
            <p class="ml-2 text-lg">${item.category}</p>
        </div>
    </button>
        `;
    categoryContainer.append(buttonContainer);
  }
  )
};

const displayLike = (animal) => {
  const animalContainer = document.getElementById("like");

  const card = document.createElement("div");
  card.innerHTML = `
     <img class="rounded-lg " src=${animal}
           
        alt="Animal Image" />
    `;
  animalContainer.append(card);


};

const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("category-btn");

  for (let btn of buttons) {
    btn.classList.remove("bg-[#0E7A81]");
    btn.classList.remove("text-white");
  }
};


const displayAnimals = (animals) => {
  const animalContainer = document.getElementById("animals");
  animalContainer.innerHTML = "";

  if (animals.length == 0) {
    animalContainer.classList.remove("grid");
    animalContainer.innerHTML = `
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
        
           <img src="../images/error.webp" alt="">
          <h2 class="text-center text-3xl font-bold"> No information available </h2>
          <p class="text-lg">Please check back later for updates.</p> 
        </div>`;
  } else {
    animalContainer.classList.add("grid");
  }


  animals.forEach((animal) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";


    const dob = animal.date_of_birth
      ? (animal.date_of_birth)
      : "Date not available";
    const breed = animal.breed ? animal.breed : "Breed not available";
    const gender = animal.gender ? animal.gender : "Gender not available";
    const price = animal.price ? animal.price : "Price not available";

    card.innerHTML = `
          <figure class="h-[200px]">
            <img src=${animal.image}
           class="h-full w-full object-cover"
        alt="Animal Image" />
        </figure>
        <div class="card-body ">
          <h2 class="card-title">${animal.pet_name}</h2>
          
          <!-- info -->

          <section class="text-[#131313b3]"></section>
  <div class="flex gap-1">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-4 mt-1">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>

    <p class="text-[#131313b3]">Breed: ${breed}</p>

  </div>
  <div class="flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-4 mt-1">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>

    <p class="text-[#131313b3]">Date: ${dob}</p>
  </div>
  <div class="flex ">
    <?xml version="1.0" ?><svg class="bi bi-gender-femal w-5 mt-1 " fill="currentColor" height="16" viewBox="0 0 16 16"
      width="16" class="w-6 mt-2" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
        fill-rule="evenodd" />
    </svg>

    <p class="text-[#131313b3]">Gender: ${gender}</p>
  </div>
  <div class="flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-5 ">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

    <p class="text-[#131313b3]">Price: ${price}</p>
  </div>
  <div class="w-full h-1 bg-slate-100 my-2"></div>
  </section>
          <div class="card-actions">
          <button class="btn btn-sm bg-white" onclick="displayLike('${animal.image}')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  </svg>
                  
            </button>
            <button id="btnAdopt" class="btn btn-sm bg-white text-[#1D7A81] text-lg" onclick="modalCountdown(this)" >Adopt</button>
            <button class="btn btn-sm text-[#1D7A81] bg-white text-lg" onclick="loadDetails('${animal.category}')">Details</button>
          </div>
        </div>
        `;
    animalContainer.append(card);
  });
};



loadCategories();

const displayDetails = (animal) => {
  const dob = animal[0].date_of_birth
    ? (animal[0].date_of_birth)
    : "Date not available";
  const breed = animal[0].breed ? animal[0].breed : "Not available";
  const gender = animal[0].gender ? animal[0].gender : "Not available";
  const price = animal[0].price ? animal[0].price : "Not available";
  const vaccinated_status = animal[0].vaccinated_status ? animal[0].vaccinated_status : "Not available";
  const pet_details = animal[0].pet_details ? animal[0].pet_details : "Not available";

  const detailContainer = document.getElementById("modal-content");
  // console.log(animal);
  detailContainer.innerHTML = `
     <section>
        <div class="card bg-base-100  shadow-xl border-2 py-2">
          <figure class="p-2">
            <img class=" w-full rounded-lg"
              src=${animal[0].image}
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${animal[0].pet_name}</h2>
            
            <!-- info -->
  
          <section class="grid grid-cols-2">
         

            <div><div class="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
                
                  <p >Breed: ${breed}</p>              
            </div>

            <div class="flex gap-2">
              <?xml version="1.0" ?><svg class="bi bi-gender-femal w-5 mt-1 " fill="currentColor" height="16" viewBox="0 0 16 16"
      width="16" class="w-6 mt-2" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
        fill-rule="evenodd" />
    </svg>
              <p>Gender: ${gender}</p>
            </div>
            
          
          </div>
            <div>

              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  <p>Date: ${dob}</p>
              </div>

                  <div class="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p>Price: ${price}$</p>
                      
                  </div>


            </div>
           
              
             
          </section>
          <div class="flex gap-2">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>
            <p>
              Vaccinated status: ${vaccinated_status}
            </p>
          </div>
            <div>
              <div class="w-full h-1 bg-slate-100 my-2"></div>

              <div>
               <h2 class="card-title">Details Information</h2>
               <p class="text-lg mt-4">
                 ${pet_details}
               </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    `;


  document.getElementById("customModal").showModal();
};

const loadDetails = async (animalName) => {
  const name = animalName.toLowerCase();
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`)
    .then((res) => res.json())
    .then((d) => displayDetails(d.data))
    .catch((error) => console.log(error));
};
const modalCountdown = (btnAdopt) => {
  const showCountdown = document.getElementById('modalCoundown');
  const modal = document.getElementById('Modal');

  btnAdopt.disabled = true;
  btnAdopt.innerText = 'Adopted'

  let n = 3;
  showCountdown.innerHTML = `${n}`;
  modal.showModal()


  const countDown = setInterval(() => {

    n--;
    if (n != 0) showCountdown.innerText = n;
    if (n == 0) {
      console.log(n);
      clearInterval(countDown)
      modal.close();
    }

  }, 1000)

}

const loadAnimalSortByPrice = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
  const data = await res.json();
  const pets = data.pets;


  pets.sort((a, b) => b.price - a.price);

  displayALLAnimals(pets);
};


const SortByPrice = () => {

  const animal = document.getElementById('animals');
  animal.innerHTML = '';

  const spinner = document.getElementById('spin');
  spinner.classList.remove('hidden');

  setTimeout(() => {
    loadAnimalSortByPrice();
    spinner.classList.add('hidden');

  }, 2000)
};