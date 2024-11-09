const movies = [
    {
        id: 1,
        title: "Deadpool and wolverine",
        release_date: "2024-07-24",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQn9mCzFG4DCn-6jFpZHuDPdl2Zj2P-BMNDKMX2zJ_R6Sf6VTx1&psig=AOvVaw3zpQFMXGE4SVYGsAoS_4Pe&ust=1731148927520000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOCd--TGzIkDFQAAAAAdAAAAABAE",
        category: "Action"
    },
    {
        id: 2,
        title: "Twister",
        release_date: "2024-07-10",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTq1gOhcf0xF3pLgaHzFqFLfDkviXgoZMq0Rsl4PPRjb_cs3zcT&psig=AOvVaw02sSJWehf6HRY4wDKLnajY&ust=1731149468770000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJilh8HIzIkDFQAAAAAdAAAAABAE",
        category: "Animations"
    },
    {
        id: 3,
        title: "Inside Out 2",
        release_date: "2024-03-27",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQaH-PV6Pj6jNAORPN-HlRUyQT8j4wmZ5gzabxWaF3ksGuwpkIJ&psig=AOvVaw16LGb-XyBBQ9i-cQi_mtsR&ust=1731149612664000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNimhYDJzIkDFQAAAAAdAAAAABAE",
        category: "Drama"
    },
    {
        id: 4,
        title: "Bad Boys Ride or die",
        release_date: "2024-03-26",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSa4IYyp_J5GrWMQgm3MAChgyVMJcUP3K5DlXRr8miBdbAH9dnw&psig=AOvVaw2I3C5DhuDqOEwpQbJpooNr&ust=1731150284503000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPD6uMDLzIkDFQAAAAAdAAAAABAE",
        category: "Thriller"

    },
    {
        id: 5,
        title: "Kill",
        release_date: "2024-07-05",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSPHZ-SinZb2yG9GctQDMIzd1PBVM-r6E_MAz3kAaXe25vqjUyx&psig=AOvVaw3QpdQHRwnOogmS9xLBpJfz&ust=1731150512824000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOjE1bXMzIkDFQAAAAAdAAAAABAE",
        category: "Horror"
    },
    {
        id: 6,
        title: "Alien Romulus",
        release_date: "2024-10-15",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQ6FyzukI_-EukJdpReqGp6v5C2SFZyOlImkIf4uJb2dyYpH7TL&psig=AOvVaw0Vq-NSlqULZ3FsE7bEmMS0&ust=1731210626931000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLCdpKaszokDFQAAAAAdAAAAABAK",
        category: "Sci-Fi"


    },
    {
        id: 7,
        title: "Kill",
        release_date: "2024-07-05",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSPHZ-SinZb2yG9GctQDMIzd1PBVM-r6E_MAz3kAaXe25vqjUyx&psig=AOvVaw3QpdQHRwnOogmS9xLBpJfz&ust=1731150512824000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOjE1bXMzIkDFQAAAAAdAAAAABAE",
        category: "Animations"
    },
    {
        id: 8,
        title: "Alien Romulus",
        release_date: "2024-10-15",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQ6FyzukI_-EukJdpReqGp6v5C2SFZyOlImkIf4uJb2dyYpH7TL&psig=AOvVaw0Vq-NSlqULZ3FsE7bEmMS0&ust=1731210626931000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLCdpKaszokDFQAAAAAdAAAAABAK",
        category: "Sci-Fi"


    },
    {
        id: 9,
        title: "Deadpool and wolverine",
        release_date: "2024-07-24",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQn9mCzFG4DCn-6jFpZHuDPdl2Zj2P-BMNDKMX2zJ_R6Sf6VTx1&psig=AOvVaw3zpQFMXGE4SVYGsAoS_4Pe&ust=1731148927520000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOCd--TGzIkDFQAAAAAdAAAAABAE",
        category: "Action"
    },
    {
        id: 10,
        title: "Twister",
        release_date: "2024-07-10",
        image_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTq1gOhcf0xF3pLgaHzFqFLfDkviXgoZMq0Rsl4PPRjb_cs3zcT&psig=AOvVaw02sSJWehf6HRY4wDKLnajY&ust=1731149468770000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJilh8HIzIkDFQAAAAAdAAAAABAE",
        category: "Animation"
    },
]

let dom_container = document.querySelector('.dom_container')
let all = document.querySelector('#all')
let action = document.querySelector('#action')
let thriller = document.querySelector('#thriller')
let animation = document.querySelector('#animation')
let horror = document.querySelector('#horror')
let drama = document.querySelector('#drama')
let sci_fi = document.querySelector('#sci-fi')

let showData = (movies) => {
dom_container.innerHTML = movies.map((movie) => `
<div class="main">
<div class="hover_effect" >
<img  src=${movie.image_path} class="img"/>
</div>
<h5>${movie.title}</h5>
<h6>${movie.release_date}
</div>

`).join("")

}

showData(movies)

action.addEventListener('click',()=>{
    let newMovie = movies.filter((movie) => movie.category=='Action')
    showData(newMovie)
})
thriller.addEventListener('click',()=>{
    let newMovie = movies.filter((movie) => movie.category=='Thriller')
    showData(newMovie)
})
animation.addEventListener('click',()=>{
    let newMovie = movies.filter((movie) => movie.category=='Animation')
    showData(newMovie)
})
horror.addEventListener('click',()=>{
    let newMovie = movies.filter((movie) => movie.category=='Horror')
    showData(newMovie)
})
drama.addEventListener('click',()=>{
    let newMovie = movies.filter((movie) => movie.category=='Drama')
    showData(newMovie)
})
sci_fi.addEventListener('click',()=>{
    let newMovie = movies.filter((movie) => movie.category=='Sci-Fi')
    showData(newMovie)
})
all.addEventListener('click',()=>{
    // let newMovie = movies.filter((movie) => movie.category=='All')
    showData(movies)
})









