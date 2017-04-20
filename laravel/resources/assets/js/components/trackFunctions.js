import Axios from 'axios';

let trackedDivs = [];
let currentDiv = '';

class TrackFunctions{
    constructor() {

    }

    getDivInPosition(itemArray){
        return new Promise((resolve, reject) => {
            let message = '<div>';

            Axios.get('/getRelevancy', {
                params: {
                    page_name: "/music"
                }
            })
                .then(function (response){
                    for(let div of response["data"]) {
                        if (itemArray[div["name"]] != '') {
                            message += itemArray[div["name"]];
                            console.log(response["data"]);

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
