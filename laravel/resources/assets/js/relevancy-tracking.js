let trackedDivs = [];

class Relevancy{
    constructor() {

        let matches = document.body.querySelectorAll('.wesleytracker');


        matches.forEach(function (value) {
            trackedDivs[value.id] = value;
        });
        console.log(trackedDivs);

    }

    eventListeners(){

    }

    get test() {
        return trackedDivs;
    }

}
export {Relevancy};

