// Array of linked pictures

let linkPicture = [

    "https://picsum.photos/200/200",
    "https://picsum.photos/200/201",
    "https://picsum.photos/200/202",
    "https://picsum.photos/200/203",
    "https://picsum.photos/200/204",
    "https://picsum.photos/200/205",
    "https://picsum.photos/200/206",
    "https://picsum.photos/200/207",
    "https://picsum.photos/201/202",
    "https://picsum.photos/202/203",
    "https://picsum.photos/203/204",
    "https://picsum.photos/204/205",
    "https://picsum.photos/205/200",
    "https://picsum.photos/206/201",
    "https://picsum.photos/207/202",
    "https://picsum.photos/208/203",
    "https://picsum.photos/209/204",
    "https://picsum.photos/202/205",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/187"
]
// For-Loop

for (let x = 0; x <= linkPicture.length - 1; x++) {

  document.getElementById("gallery").innerHTML += `<img src="${linkPicture[x]}">`
}