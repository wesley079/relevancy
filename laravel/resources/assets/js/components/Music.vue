<template>
    <div class="container">
        <div id="submenu" class="row wesleytracker">
                <h1>Browse</h1>

            <ul class="list-horizontal">
                <li>Overview</li>
                <li>Charts</li>
                <li>Genres & Moods</li>
            </ul>
        </div>
        <div id="featured" class="row wesleytracker option-list">
            <p class="col-xs-12">De beste opties voor een mooie ochtend</p>
            <div class="row">
            <div class="col-xs-4 item">Optie 1</div>
            <div class="col-xs-4 item">Optie 2</div>
            <div class="col-xs-4 item">Optie 3</div>
            </div>
        </div>
        <input-component></input-component>


        <div id="example-3">
            <button v-on:click="say('hi', $event)">Say hi</button>
            <button v-on:click="say('what', $event)">Say what</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import InputComponent from './InputComponent.vue';

    export default {
        components: {
            'input-component': InputComponent
        },
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
            getFirstComponent: function() {
                return '<div id="styles" class="row option-list wesleytracker" >' +
                    '<div class="col-xs-6 item">Funk</div>' +
                    '<div class="col-xs-6 item">Soul</div>' +
                    '</div>'
            }
        }

}



</script>