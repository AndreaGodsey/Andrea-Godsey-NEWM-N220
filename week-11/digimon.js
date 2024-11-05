let currentPage = 0;
let totalPages = 0;

async function getDigimon() {
    const digiResponse = await fetch(`https://digimon-api.vercel.app/api/digimon`);


    const digiData = await digiResponse.json();

    return digiData;
}

async function updateSection() {
    const digimonPageRef = document.getElementById("digimonPage");

    const allDigimon = await getDigimon();

    totalPages = Math.ceil(allDigimon.length / 10);


    digimonPageRef.innerHTML += `<h3>Page ${currentPage + 1} of ${totalPages}</h3>`

    digimonPageRef.innerHTML += `<table>
    <thead>
    
    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Image</th>
    <th>Level</th>

    </tr>
    </thead>
    <tbody id="digimonList" ></tbody>
    </table>`;


   let pageNumbers = "";

   for (let i = 0; i < totalPages; i++) {
    pageNumbers += `<option value="${i}" >${i + 1}</option>`;
   }

   digimonPageRef.innerHTML += `
   <div>
   <button onclick="goToPage(-1)">Previous Page</button>
   <select onchange="changePage(event) ">
   ${pageNumbers}
   </select>
   <button onclick="goToPage(1)">Next Page</button>
   
   </div>`;
   updatePage();
}



function goToPage(pageDirection) {
    if(pageDirection > 0) {
        if(currentPage === totalPages - 1){
            alert("There are no additional pages");
        } else {
            currentPage++;
        }
    } else {
        if (currentPage === 0) {
            alert("This is the first page.");
        } else {
            currentPage--;
        }
    }

    document.getElementById("pageNumber").value = currentPage;
    updatePage();
}

async function updatePage() {
    console.log(currentPage);
    
    const h3Ref = document.querySelector("h3");
    const digimonPageRef = document.querySelector("#digimonList");

    const allDigimon = await getDigimon();
    digimonPageRef.innerHTML =``
    
    for( let index = 0; index < 10; index++) {
        thisDigmon = allDigimon[index + currentPage * 10];
        digimonPageRef.innerHTML += `<tr>
  <td>${index +currentPage * 10}</td>
  <td>${thisDigmon.name}</td>
  <td>
  <img src="${thisDigmon.img}" height="50"></td>
  <td>${thisDigmon.level}</td>
</tr>`
    }

    h3Ref.innerHTML = `Page ${parseInt (currentPage) + 1} of ${totalPages}`;
}

function changePage(e) {
    currentPage = Number (e.currentTarget.value);
    updatePage();
}

updateSection();