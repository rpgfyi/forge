<template>
    <div class="container has-text-centered">
        
        <img 
            class="logo" 
            src="logo.svg" 
            width="200" 
            height="200">

        <div class="item-area">

            {{msg}}
            <b-tooltip :label="tagPreTooltip" type="is-light" dashed square>{{tagPre}}</b-tooltip>&#32;
            <b-tooltip :label="itemTooltip" type="is-light" dashed square>{{item}}</b-tooltip>&#32;
            <b-tooltip :label="tagPostTooltip" type="is-light" dashed square>{{tagPost}}</b-tooltip>
    
        </div>

        <div class="item-selector">
            
            <b-field class="has-addons-centered">

                <b-radio-button v-model="itemType"
                    native-value="Weapon">
                    Weapon
                </b-radio-button>

                <b-radio-button v-model="itemType"
                    native-value="Armor"
                    disabled>
                    Armor
                </b-radio-button>

                <b-radio-button v-model="itemType"
                    native-value="Trinket"
                    disabled>
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
  props: {
      msg: String,
  },
  data () {
    return {
      info: null,
      isActive: false,
      tagPre: null,
      tagPost: null,
      tagPreToolTip: "",
      tagPostToolTip: "",
      item: null,
      itemToolTip: "",
      weapons: null,
      weapontags: null,
      itemType: "Weapon",
      selected: 1
    }
  },
  mounted() {
    fetch('forge.json')
        .then(r => r.json())
        .then(r => {
            let weaponArray = []
            for (var i in r.forge.weapons[0]['items']) {
            weaponArray.push([r.forge.weapons[0]['items'][i].pre, r.forge.weapons[0]['items'][i].desc])
            }
            this.weapons = weaponArray;

            let tagArray = []
            for (var j in r.forge.weapons[0]['tags']) {
            tagArray.push([r.forge.weapons[0]['tags'][j].pre, r.forge.weapons[0]['tags'][j].desc, r.forge.weapons[0]['tags'][j].post])
            }
            this.weapontags = tagArray;
        })
        // .catch(error => console.log(error))
  },
  methods: {
    generate (item) {
        if ("Weapon" === item) {
            let randTagPre = this.weapontags[Math.floor(Math.random() * this.weapontags.length)]
            let randTagPost = this.weapontags[Math.floor(Math.random() * this.weapontags.length)]
            let randWeapon = this.weapons[Math.floor(Math.random() * this.weapons.length)]
            this.tagPre = randTagPre[0] + " "
            this.tagPreTooltip = randTagPre[1]
            this.tagPost = randTagPost[2]
            this.tagPostTooltip = randTagPost[1]
            this.item = randWeapon[0]
            this.itemTooltip = randWeapon[1]
            this.msg = ""
        } else if ("Armor" === item) {
            // add armor generator
        } else if ("Trinket" === item) {
            // add trinket generator
        }
        // var timerPromise = new Promise((resolve, reject) => {
        //     this.isActive = !this.isActive
        //     setTimeout(() => {
        //         console.log('1.2 seconds up, resolve')
        //         resolve();
        //     }, 1200)
        // })

        // Promise.all([timerPromise, this.isActive]).then( () => {
        //     this.isActive = !this.isActive;
        //     console.log('spinner finished')
        // })
    }
  }
}</script>