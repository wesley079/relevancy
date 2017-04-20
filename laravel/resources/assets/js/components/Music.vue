<template>
    <div class="container">
        <h1>Music page</h1>
        <tracked-divs></tracked-divs>
    </div>
</template>

<script>
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
            'html': '<div id="styles" class="row option-list relevancy-tracker"><div class="col-xs-6 item">Funk</div><div class="col-xs-6 item">Soul</div></div>'
        });


    import Vue from 'vue';
    import InputComponent from './InputComponent.vue';
    import { TrackFunctions } from './trackFunctions.js';

    Vue.component('tracked-divs', {
        template: '<div v-html="itemsHtml"></div>',
        data() {
            return {
                itemsHtml: '',


        }
        },
            beforeCreate(){
                this.divOrder = [ "submenu", "featured", "styles", "submenu"];

                let trackedFunctions = new TrackFunctions();
                trackedFunctions.getDivInPosition(itemArray).then(function(response){
                    this.itemsHtml = response;

                }.bind(this), (error) => {
                    console.log('promise error', error);
                });
            },
            afterCreate(){
            },
            mounted(){
                window.Relevancy.updateEventListeners(); console.log('done');
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





</script>

