const team = [
  {
    id: "1",
    image:'./assets/ceo.jpg',
    name: "Juan Lerenzen",
    job: "CEO",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt tempora illum exercitationem odio voluptates vitae repellendus dolore repellat dolorum animi?",
  },
  {
    id: "2",
    image:'./assets/diseñador textil.jpg',
    name: "Miguel Gonzalez",
    job: "Textile designer",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt tempora illum exercitationem odio voluptates vitae repellendus dolore repellat dolorum animi?",
  },
  {
    id: "3",
    image:'./assets/marketing.jpg',
    name: "Pedro Poleti",
    job: "Marketing manager",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt tempora illum exercitationem odio voluptates vitae repellendus dolore repellat dolorum animi?",
  },
  {
    id: "4",
    image:'./assets/programador.jpg',
    name: "Federico Lanzen",
    job: "Ssr. Developer",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt tempora illum exercitationem odio voluptates vitae repellendus dolore repellat dolorum animi?",
  }
]

export const getTeam = new Promise ((resolve,reject) => {
  setTimeout(()=>{
      resolve(team)
  },0)
})