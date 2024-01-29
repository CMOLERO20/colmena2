export const getClasesAsync = () => {
    return fetch('http://localhost:8080/api/classes').then((res) => res.json())
  }

export const getClassByIdAsync = (id) => {
  return fetch(`http://localhost:8080/api/classes/${id}`).then((res)=>res.json())
}  

export const mockPacks = [{
  "_id": "65b71781ea91f71d58014c76",
  "category": "Pack 1",
  "description": "Pack de 4 clases , vencimiento mensual",
  "credits": 4,
  "price": 8500,
  "default": [],
  "creation_date": "2024-01-29T03:12:01.471Z",
  "__v": 0
},
{
  "_id": "65b7179dea91f71d58014c78",
  "category": "Pack 2",
  "description": "Pack de 8 clases , vencimiento mensual",
  "credits": 8,
  "price": 13500,
  "default": [],
  "creation_date": "2024-01-29T03:12:29.074Z",
  "__v": 0
},
{
  "_id": "65b717b1ea91f71d58014c7a",
  "category": "Pack 3",
  "description": "Pack de 12 clases , vencimiento mensual",
  "credits": 12,
  "price": 16000,
  "default": [],
  "creation_date": "2024-01-29T03:12:49.465Z",
  "__v": 0
}]

export const mockClases = [
  {
      "_id": "65b59307e544945e8258bce8",
      "category": "Pole",
      "date": "2024-09-21T18:22:34.846Z",
      "teacher": [
          {
              "user": "64e12eb8fa2afe2127a95973",
              "_id": "64e3b4ed5d61e8730ca1010e"
          }
      ],
      "available_places": 8,
      "students": [],
      "creation_date": "2024-01-27T23:34:31.210Z",
      "__v": 0
  },
  {
      "_id": "65b59346e544945e8258bceb",
      "category": "Pole",
      "date": "2024-09-20T18:22:34.846Z",
      "teacher": [
          {
              "user": "64e12eb8fa2afe2127a95973",
              "_id": "64e3b4ed5d61e8730ca1010e"
          }
      ],
      "available_places": 8,
      "students": [],
      "creation_date": "2024-01-27T23:35:34.377Z",
      "__v": 0
  },
  {
      "_id": "65b5934fe544945e8258bcee",
      "category": "Elongacion",
      "date": "2024-09-20T18:22:34.846Z",
      "teacher": [
          {
              "user": "64e12eb8fa2afe2127a95973",
              "_id": "64e3b4ed5d61e8730ca1010e"
          }
      ],
      "available_places": 8,
      "students": [],
      "creation_date": "2024-01-27T23:35:43.350Z",
      "__v": 0
  },
  {
      "_id": "65b5943ce544945e8258bcf6",
      "category": "Elongacion",
      "date": "2024-09-18T18:22:34.846Z",
      "teacher": [
          {
              "user": "64e12eb8fa2afe2127a95973",
              "_id": "64e3b4ed5d61e8730ca1010e"
          }
      ],
      "available_places": 8,
      "students": [],
      "creation_date": "2024-01-27T23:39:40.353Z",
      "__v": 0
  }
]