<template>
    <div class="container">
        <h1>Music page</h1>
        <tracked-divs></tracked-divs>
    </div>
</template>

<script>
    //basic imports
    import Vue from 'vue';
    import { TrackFunctions } from './trackFunctions.js';

    //extra imports
    import funkComponent from './components/Funk.vue';
    import extraOptions from './components/ExtraOptions.vue';

    let itemArray = [];
    itemArray.push(
        {
            'name': 'submenuw',
            'handicap': 2.5,
            'html': '<div id="submenuw" class="row relevancy-tracker"><h1>Browse</h1><ul class="list-horizontal"><li>Overview</li><li>Charts</li><li>Genres & Moods</li></ul></div>'
    });
    itemArray.push(
        {
            'name': 'featured',
            'handicap': 1,
            'html': '<div id="featured" class="row relevancy-tracker option-list"><p class="col-xs-12">De beste opties voor een mooie ochtend</p><div class="row"><div class="col-xs-4 item">Optie 1</div><div class="col-xs-4 item">Optie 2</div><div class="col-xs-4 item">Optie 3</div></div></div>'
        });
    itemArray.push(
        {
            'name': 'styles',
            'handicap': 1.5,
            'html': '<div id="styles" class="row option-list relevancy-tracker"></div>'
        });
    itemArray.push(
        {
            'name': 'extraOptions',
            'handicap': 1,
            'html': '<div id="extraOptions" class="row option-list relevancy-tracker"></div>'
        });



    Vue.component('tracked-divs', {
        template: '<div v-html="itemsHtml"></div>',
        data() {
            return {
                itemsHtml: '',
        }
        },
            beforeCreate(){
                let trackedFunctions = new TrackFunctions();
                trackedFunctions.getDivInPosition(itemArray, "/music").then(function(response){
                    this.itemsHtml = response;
                }.bind(this), (error) => {
                    console.log('promise error', error);
                });
            },
            afterCreate(){
            },
            mounted(){
                window.Relevancy.updateEventListeners();
                window.Relevancy.registerAmount(itemArray.length);

            },
    });


    export default {
        data () {
            return {
                transitionName: 'slide-left',
                pageTitle: 'Music'
            }
         },
        methods:     {
            say: function(msg, event) {
                alert(msg);
            },

        },



}


    let domCheck = setInterval(function(){
        let mat = document.body.querySelectorAll('#styles');
        if(mat.length > 0){
            clearInterval(domCheck);

            new Vue({
                components: {
                  funkComponent
                },
                template: `
                    <div id="styles" class="row option-list relevancy-tracker">
                     <funkComponent></funkComponent>
                     </div>
                 `
            }).$mount('#styles');
        }
    }, 100);

    let domCheck2 = setInterval(function(){
        let mat = document.body.querySelectorAll('#extraOptions');
        if(mat.length > 0){
            clearInterval(domCheck2);

            new Vue({
                components: {
                    extraOptions
                },
                template: `
                    <div id="extraOptions" class="row option-list relevancy-tracker">
                     <extraOptions></extraOptions>
                     </div>
                 `
            }).$mount('#extraOptions');
        }
    }, 100);


</script>

