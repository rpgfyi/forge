<template>
    <div class="container has-text-centered">
        
        <img 
            class="logo" 
            src="logo.svg" 
            width="200" 
            height="200">

        <div class="item-area">

            {{msg}}
            <b-tooltip :label="tooltipsArray['pre']" type="is-light" dashed square multilined>{{tagPre}}</b-tooltip>&#32;
            <b-tooltip :label="tooltipsArray['item']" type="is-light" dashed square multilined>{{item}}</b-tooltip>&#32;
            <b-tooltip :label="tooltipsArray['post']" type="is-light" dashed square multilined>{{tagPost}}</b-tooltip>
    
        </div>

        <div class="item-selector">
            
            <b-field class="has-addons-centered">

                <b-radio-button v-model="itemType"
                    native-value="weapon">
                    <i class="ra ra-sword ra-fw"></i>
                    Weapon
                </b-radio-button>

                <b-radio-button v-model="itemType"
                    native-value="armor"
                    >
                    Armor
                </b-radio-button>

                <b-radio-button v-model="itemType"
                    native-value="trinket"
                    >
                    Trinket
                </b-radio-button>
                <div class="control">
                    <span class="button is-link" @click="generate(itemType)">Generate {{itemType}}</span>
                </div>

            </b-field>

        </div>
       
    </div>

</template>

<script>

export default {
  name: 'ForgeGenerator',
  data () {
    return {
      counter: 0,
      itemArray: [],
      tagArray: [],
      tooltipsArray: [],
      tagPre: null,
      tagPost: null,
      item: null,
      msg: "Generate and item!",
      itemType: "weapon",
      selected: 1
    }
  },
  mounted() {
    fetch('forge.json')
        .then(r => r.json())
        .then(r => {
            // populate itemArray
            this.populateItems('armor', r.forge.armor[0]['items'])
            this.populateItems('trinket', r.forge.trinket[0]['items'])
            this.populateItems('weapon', r.forge.weapon[0]['items'])

            // populate tagArray
            this.populateTags('universal', r.forge.universal[0]['tags'])
            this.populateTags('armor', r.forge.armor[0]['tags'])
            this.populateTags('trinket', r.forge.trinket[0]['tags'])
            this.populateTags('weapon', r.forge.weapon[0]['tags'])
        })
  },
  methods: {
    populateItems (type, source) {
        this.itemArray[type] = []
        for (var x in source) {
            this.itemArray[type].push([source[x].pre, source[x].desc])
        }
        return true;
    },
    populateTags (type, source) {
        this.tagArray[type] = []
        for (var x in source) {
            this.tagArray[type].push([source[x].pre, source[x].post, source[x].desc])
        }
    },
    generate (type) {
        let tags = this.tagArray['universal'].concat(this.tagArray[type])
        let tag = new Array(tags[Math.floor(Math.random() * tags.length)], tags[Math.floor(Math.random() * tags.length)])
        let item = this.itemArray[type][Math.floor(Math.random() * this.itemArray[type].length)]

        this.tagPre = tag[0][0]
        this.tagPost = tag[1][1]
        this.item = item[0]
        this.tooltipsArray['pre'] = tag[0][2]
        this.tooltipsArray['post'] = tag[1][2]
        this.tooltipsArray['item'] = item[1]
        this.msg = ""
    },
    gaTrack (item) {
        this.counter = this.counter + 1
        this.$ga.event({
            eventCategory: 'Generate',
            eventAction: item,
            eventLabel: this.tagPre + ' ' + this.item + ' ' + this.tagPost,
            eventValue: this.counter
        })
    }
  }
}</script>