const data = [
    {
         tag: "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
         date: "2021-01-01 00:00:00", //dd/mm/yyyy hh:mm
         info: [
             {
                 tag: "Prescrição", 
                 date: "2021-01-01 00:00:00", 
                 healthProf: "Dr. Ana Martins Noronha"
             },
             {
                 tag: "Avaliações", 
                 date: "2021-01-01 00:00:00", 
                 healthProf: "Dr. João Palmeira"
             },
         ], //registos: [tag, hp1], [tag2, hp2],
         category: {
             tag:  "Prescrição",  // prescrição, avaliações, diagnõsticos, diários, vários
             color: "#999999" // prescrição: #4199e0, avaliações: #ffd500 , diagnosticos: #4caf50, diarios: #f15a29, vários: #999999
         }
     },
     {
         tag: "Prescrição",  // prescrição, avaliações, diagnõsticos, diários, vários
         date: "2021-01-02 00:00:00", //dd/mm/yyyy hh:mm
         info: [
             {
                 tag: "Diagnõsticos", 
                 date: "2021-01-02 00:00:00", 
                 healthProf: "Dr. Roberto Ladeiras"
             },
         ], //registos: [tag, hp1], [tag2, hp2],
         category: {
             tag:  "Prescrição",  // prescrição, avaliações, diagnõsticos, diários, vários
             color: "#4199e0" // prescrição: #4199e0, avaliações: #ffd500 , diagnosticos: #4caf50, diarios: #f15a29, vários: #999999
         }
     },
     {
         tag: "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
         date: "2021-01-03 00:00:00", //dd/mm/yyyy hh:mm
         info: [
             {
                 tag: "Diários", 
                 date: "2021-01-03 00:00:00", 
                 healthProf: "Dr. Ana Martins Noronha"
             },
             {
                 tag: "Diagnõsticos", 
                 date: "2021-01-03 00:00:00", 
                 healthProf: "Dr. Ana Martins Noronha"
             },
         ], 
         category: {
             tag:  "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
             color: "#999999" // prescrição: #4199e0, avaliações: #ffd500 , diagnosticos: #4caf50, diarios: #f15a29, vários: #999999
         }
     },
     {
         tag: "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
         date: "2021-01-04 00:00:00", //dd/mm/yyyy hh:mm
         info: [
             {
                 tag: "Diários", 
                 date: "2021-01-04 00:00:00", 
                 healthProf: "Dr. Ana Martins Noronha"
             },
             {
                 tag: "Diagnõsticos", 
                 date: "2021-01-04 00:00:00", 
                 healthProf: "Dr. João Reis"
             },
         ], 
         category: {
             tag:  "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
             color: "#999999" // prescrição: #4199e0, avaliações: #ffd500 , diagnosticos: #4caf50, diarios: #f15a29, vários: #999999
         }
     },
     {
         tag: "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
         date: "2021-01-09 00:00:00", //dd/mm/yyyy hh:mm
         info: [
             {
                 tag: "Diários", 
                 date: "2021-01-09 00:00:00", 
                 healthProf: "Dr. João Reis"
             },
             {
                 tag: "Diagnõsticos", 
                 date: "2021-01-09 00:00:00", 
                 healthProf: "Dr. Ana Martins Noronha"
             },
         ], 
         category: {
             tag:  "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
             color: "#999999" // prescrição: #4199e0, avaliações: #ffd500 , diagnosticos: #4caf50, diarios: #f15a29, vários: #999999
         }
     },
     {
         tag: "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
         date: "2021-01-11 00:00:00", //dd/mm/yyyy hh:mm
         info: [
             {
                 tag: "Diários", 
                 date: "2021-01-11 00:00:00", 
                 healthProf: "Dr. Pedro Amaral"
             },
             {
                 tag: "Diagnõsticos", 
                 date: "2021-01-11 00:00:00", 
                 healthProf: "Dr. Ana Martins Noronha"
             },
         ], 
         category: {
             tag:  "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
             color: "#999999" // prescrição: #4199e0, avaliações: #ffd500 , diagnosticos: #4caf50, diarios: #f15a29, vários: #999999
         }
     },
     {
         tag: "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
         date: "2021-01-14 00:00:00", //dd/mm/yyyy hh:mm
         info: [
             {
                 tag: "Diários", 
                 date: "2021-01-14 00:00:00", 
                 healthProf: "Dr. Ana Martins Noronha"
             },
             {
                 tag: "Diagnõsticos", 
                 date: "2021-01-14 00:00:00", 
                 healthProf: "Dr. Sofia Alves"
             },
         ], 
         category: {
             tag:  "Vários",  // prescrição, avaliações, diagnõsticos, diários, vários
             color: "#999999" // prescrição: #4199e0, avaliações: #ffd500 , diagnosticos: #4caf50, diarios: #f15a29, vários: #999999
         }
     },
 ]
 
 export default data;