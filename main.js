const template = document.querySelector("#accom-card-template")
const wrapper = document.createDocumentFragment()

async function loadAccommodations() {
  const accomsPromise = await fetch("https://udl-strategies.netlify.app/.netlify/functions/udlstrats")
  const accomsData = await accomsPromise.json()
  accomsData.forEach(accommodation => {

    const clone = template.content.cloneNode(true)

    clone.querySelector(".accom-card-title").textContent = accommodation.name
    clone.querySelector(".accom-card-title").setAttribute("for", ("accom" + accommodation.value))
    clone.querySelector(".accom-card-text").textContent = accommodation.description
    clone.querySelector(".accom-card-checkbox").setAttribute("value", accommodation.value)
    clone.querySelector(".accom-card-checkbox").setAttribute("id", ("accom" + accommodation.value))
    wrapper.appendChild(clone)

  })
  document.querySelector(".accom-cards-list").appendChild(wrapper)
}

loadAccommodations()

document.getElementById("subButton").addEventListener("click", getStrategies)

function getStrategies() {
  window.open("https://jaycgreenwald.github.io/udl-strategies-site/output.html", "_blank")
}
