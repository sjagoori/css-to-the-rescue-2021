// Cuts up the letters in every item of the cheatsheet and adds spans around them
const list = document.getElementById("list")

for (item of list.children) {
  text = `<span>${item.innerHTML.split("").join("</span><span>")}</span>`
  item.innerHTML = text
}
