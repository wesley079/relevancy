<template>
        <tracked-divs3></tracked-divs3>
</template>

<script>
    let itemArray = [];
    itemArray.push(
        {
            'name': 'option1',
            'handicap': 1,
            'html': '<div id="option1" class="col-xs-4 item relevancy-tracker music-item"><img src="http://www.mrwallpaper.com/wallpapers/Music-equipment.jpg"/></div>'
        });
    itemArray.push(
        {
            'name': 'option2',
            'handicap': 1,
            'html': '<div id="option2" class="col-xs-4 item relevancy-tracker music-item"><img src="https://bankstreetmusic.pbworks.com/f/1348250071/Music.jpeg"/></div>'
        }
    );
    itemArray.push(
        {
            'name': 'option3',
            'handicap': 1,
            'html': '<div id="option3" class="col-xs-4 item relevancy-tracker music-item"><img src="https://static1.squarespace.com/static/55f71edde4b0b863e21d4a99/t/562faeade4b0ac7e6622145c/1445965485960/make-beats.jpg"/></div>'
        }
    );


    import Vue from 'vue';
    import { TrackFunctions } from '../trackFunctions.js';

    Vue.component('tracked-divs3', {
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

