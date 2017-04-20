import Axios from 'axios';

let trackedDivs = [];
let currentDiv = '';

class Relevancy{
    constructor() {
        window.setInterval(function(){
            if(currentDiv != '') {
                console.log(currentDiv, 1);
                writeRelevancyNumber();
            }
        }, 3000);
        let matches = document.body.querySelectorAll('.relevancy-tracker');


        matches.forEach(function (value) {
            trackedDivs.push(value);
        });

        this.eventListeners();
    }

    static getDivPosition(){

    }

    eventListeners(){
        let matches = document.body.querySelectorAll('.relevancy-tracker');
        trackedDivs = [];

        matches.forEach(function (value) {
            trackedDivs.push(value);
        });

        for(let trackedDiv of trackedDivs){
            trackedDiv.addEventListener('mouseover', this.trackElement)
        }
    }

    updateEventListeners(){
        let matches = document.body.querySelectorAll('.relevancy-tracker');
        trackedDivs = [];
        let that = this;

        let domCheck = setInterval(function(){
            let mat = document.body.querySelectorAll('.relevancy-tracker');
            if(mat.length > 0){
                that.eventListeners();
                clearInterval(domCheck);
            }
        }, 500);



    }

    trackElement(){
        if(currentDiv !== this.id) {
            currentDiv = this.id;
        }

        this.addEventListener("mouseout", function( event ) {
            currentDiv = '';
        });
        }

    getDivInPositon(){
        Axios.get('/getRelevancy', {
            params: {
                page_name: "/music"
            }
        })
            .then(function (response){
                console.log(response['data']);

                return response;
            })
            .catch(function (error){

            });
    }




}
export {Relevancy};

function writeRelevancyNumber(){

    Axios.get('/postRelevancy', {
        params: {
            div_id: currentDiv,
            page_name: "/music"
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}