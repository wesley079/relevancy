import Axios from 'axios';

let trackedDivs = [];
let currentDivs = [];
let eventAmount = 0;

class Relevancy{

    constructor() {
        window.setInterval(function(){
            if(currentDivs.length > 0) {
                writeRelevancyNumber();
            }
        }, 3000);
        let matches = document.body.querySelectorAll('.relevancy-tracker');


        matches.forEach(function (value) {
            trackedDivs.push(value);
        });

        this.eventListeners();
    }

    eventListeners(){
        let matches = document.body.querySelectorAll('.relevancy-tracker');
        trackedDivs = [];

        matches.forEach(function (value) {
            trackedDivs.push(value);
        });

        for(let trackedDiv of trackedDivs){
            trackedDiv.addEventListener('mouseover', this.trackElement);
        }
    }

    registerAmount(int){
        eventAmount += parseInt(int);
    }

    updateEventListeners(){
        let matches = document.body.querySelectorAll('.relevancy-tracker');
        trackedDivs = [];
        let that = this;

        let domCheck = setInterval(function(){
            let mat = document.body.querySelectorAll('.relevancy-tracker');

            if(mat.length >= eventAmount){
                that.eventListeners();
                clearInterval(domCheck);
            }
        }, 500);



    }

    trackElement(){
        if(!currentDivs.includes(this.id)) {
            currentDivs.push(this.id);
        }

        this.addEventListener("mouseout", function( event ) {

            Array.prototype.remove = function() {
                let what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };

            currentDivs.remove(this.id);
        });
        }

    getDivInPositon(){
        Axios.get('/getRelevancy', {
            params: {
                page_name: "/music"
            }
        })
            .then(function (response){
                return response;
            })
            .catch(function (error){

            });
    }
}
export {Relevancy};

function writeRelevancyNumber(){

    for(let currentDiv of currentDivs) {
        Axios.get('/postRelevancy', {
            params: {
                div_id: currentDiv,
                page_name: "/music"
            }
        })
            .then(function (response) {
                //done
            })
            .catch(function (error) {
                //error
            });
    }
}