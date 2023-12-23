// price, name, type, processor, memory, OS
export const filters = 
[
    {
        name: "price",
        values:[
            {value:"700-800", label:"$700 - $800"},
            {value:"800-900", label:"$800 - $900"},
            {value:"900-1000", label:"$900 - $1000"},
            {value:"1000-1500", label:"more than $1000"},
        ]
    },
    {
        name:"name",
        values:[
            {value:"Samsung",label:"Samsung"},
            {value:"Apple",label:"Apple"},
            {value:"OnePlus",label:"OnePlus"},
            {value:"Xiaomi ",label:"Xiaomi"},
            {value:"Google",label:"Google"},
            {value:"Realme",label:"Realme"},
            {value:"Vivo",label:"Vivo"},
            {value:"Oppo",label:"Oppo"}
        ]

    },
    {
        name:"processor",
        values:[
            {value:"Snapdragon",label:"Snapdragon"},
            {value:"Exinos",label:"Exinos"},
            {value:"A13 bionic",label:"A13 bionic"},
            {value:"Mediatek helio",label:"MediaTek helio"},
            {value:"Dimensity",label:"Dimensity"},
        ]

    },
    {
        name:"ROM",
        values:[
            {value:"8 GB",label:"8 GB"},
            {value:"16 GB",label:"16 GB"},
            {value:"32 GB",label:"32 GB"},
            {value:"64 GB",label:"64 GB"},
            {value:"128 GB",label:"128 GB"},
            {value:"256 GB",label:"256 GB"},
        ]

    },
    {
        name:"os",
        values:[
            {value:"Android",label:"Android"},
            {value:"IOS",label:"IOS"},
            {value:"Funtouch",label:"Funtouch"},
            {value:"Color OS",label:"Color OS"},
        ]
    },

]
