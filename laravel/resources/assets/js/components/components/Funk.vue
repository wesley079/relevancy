<template>
        <tracked-divs2></tracked-divs2>
</template>

<script>
    let itemArray = [];
    itemArray.push(
        {
            'name': 'rock',
            'handicap': 1,
            'html': '<div id="rock" class="col-xs-6 item relevancy-tracker music-item"><img src="http://www.dancetothesixties.nl/images/gifbestandjes/rock_and_roll_tekst2.gif"/></div>'
        });
    itemArray.push(
        {
            'name': 'funk',
            'handicap': 1,
            'html': '<div id="funk" class="col-xs-6 item relevancy-tracker music-item"><img src="http://kingofwallpapers.com/funk/funk-002.jpg"/></div>'
        }
    );


    import Vue from 'vue';
    import { TrackFunctions } from '../trackFunctions.js';

    Vue.component('tracked-divs2', {
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
            window.Relevancy.registerAmount(itemArray.length);
            window.Relevancy.updateEventListeners();

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

