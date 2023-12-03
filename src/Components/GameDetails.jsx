import DetailBox from "./DetailBox"
function GameDetails() {
    
     const gameDetailsData= [
        {
            label: "نوع محصول",
            buttons: ["In-Game", "Redeem Code"],
            
        },
        {
            label: "ریجن",
            buttons: ["Country", "Country", "Country"],
        },
        {
            label: "مقدار (عنوان محصول) (واحد شمارش)",
            buttons: ["Number", "Number", "Number", "Number", "Number", "Number"],
        },
        {
            label: "پلتفرم",
            buttons: ["Platform A", "Platform B", "Platform C", "Platform D"],
        }
    ]
    const gameDetails = gameDetailsData.map((detail, index) => <DetailBox gameData={detail} key={index} />)
    return (
        <div className="details">
            {gameDetails}
        </div>
    );
}
export default GameDetails;

// const gameDetailsData = [
//     {
//         label: "نوع محصول",
//         buttons: [
//             { value: "In-Game", isHeld: false, id: nanoid() },
//             { value: "Redeem Code", isHeld: false, id: nanoid() },

//         ],

//     },
//     {
//         label: "ریجن",
//         buttons: [
//             { value: "Country", isHeld: false, id: nanoid() },
//             { value: "Country", isHeld: false, id: nanoid() },
//             { value: "Country", isHeld: false, id: nanoid() },
//         ],
//     },
//     {
//         label: "مقدار (عنوان محصول) (واحد شمارش)",
//         buttons: [
//             { value: "Number", isHeld: false, id: nanoid() },
//             { value: "Number", isHeld: false, id: nanoid() },
//             { value: "Number", isHeld: false, id: nanoid() },
//             { value: "Number", isHeld: false, id: nanoid() },
//             { value: "Number", isHeld: false, id: nanoid() },
//             { value: "Number", isHeld: false, id: nanoid() },

//         ],
//     },
//     {
//         label: "پلتفرم",
//         buttons: [
//             { value: "Platform A", isHeld: false, id: nanoid() },
//             { value: "Platform B", isHeld: false, id: nanoid() },
//             { value: "Platform C", isHeld: false, id: nanoid() },
//             { value: "Platform D", isHeld: false, id: nanoid() },

//         ],
//     }
// ]