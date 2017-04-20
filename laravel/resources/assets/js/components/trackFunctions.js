import Axios from 'axios';

let trackedDivs = [];
let currentDiv = '';

class TrackFunctions{
    constructor() {

    }

    getDivInPosition(itemArray){
        return new Promise((resolve, reject) => {
            let message = '<div>';
            let divNames = '';
            let handicapString = '';
            let count = 0;
            let domArray = [];

            for(let item of itemArray){
                count++;

                divNames += item["name"];
                handicapString += item["handicap"];

                //check for more
                if(count < itemArray.length){
                    divNames += ',';
                    handicapString += ',';
                }
                domArray[item["name"]]              = {};
                domArray[item["name"]]["html"]      = item["html"];
                domArray[item["name"]]["handicap"]  = item["handicap"];

            }


            Axios.get('/getRelevancy', {
                params: {
                    page_name: "/music",
                    item_array: divNames,
                    handicap: handicapString
                }
            })
                .then(function (response){
                    for(let div of response["data"]) {
                        if (domArray[div["name"]] != '') {

                            message += domArray[div["name"]]["html"];

                            window.Relevancy.eventListeners();
                        }
                    }
                    message += '</div>';
                    resolve(message);
                })
                .catch(function (error){
                    return false;
                });
            return message;
        });

    }




}
export {TrackFunctions};
