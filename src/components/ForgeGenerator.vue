<template>
    <div class="container has-text-centered">
        
        <img 
            class="logo" 
            src="logo.svg" 
            width="200" 
            height="200">

        <div class="item-area">

            {{output}}
    
        </div>

        <b-field position="is-centered">

            <b-taglist>
                <b-tag type="is-info" icon="tag" v-for="item in tagList">
                    <b-tooltip :label="item[1]"
                    type="is-light">
                        <span class="icon icon-price-tag is-small"></span>
                        <span>{{item[0] | capitalize}}</span>
                    </b-tooltip>
                </b-tag>
            </b-taglist>

        </b-field>

        <div class="field has-addons-center item-selector">
            
            <b-field class="has-addons-centered">

                <b-radio-button v-model="itemType"
                    native-value="weapon">
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
                    <span class="button is-link" @click="generate(itemType, rarity); gaTrack(itemType)">Generate {{itemType}}</span>
                </div>

            </b-field>

        </div>

        <div class="field has-addons-center item-selector">

            <b-field class="has-addons-centered">

                <b-radio-button v-model="rarity"
                    native-value=0>
                    Common
                </b-radio-button>

                <b-radio-button v-model="rarity"
                    native-value="1"
                    >
                    Uncommon
                </b-radio-button>

                <b-radio-button v-model="rarity"
                    native-value="2"
                    >
                    Rare
                </b-radio-button>

                <b-radio-button v-model="rarity"
                    native-value="3">
                    Legendary
                </b-radio-button>

            </b-field>

        </div>
       
    </div>

</template>

<script>

export default {
  name: 'ForgeGenerator',
  data () {
    return {
      items: [],
      tags: [],
      descriptors: [],
      tagList: [],
      output: "Generate an item!",
      itemType: "weapon",
      rarity: "2",
      selected: 1
    }
  },
  mounted() {
    fetch('forge-final.json')
        .then(r => r.json())
        .then(r => {
            this.descriptors = this.populateObject(r.forge.descriptors)
            this.tags = this.populateObject(r.forge.tags)
            this.items['armor'] = this.populateObject(r.forge.items.armor)
            this.items['trinket'] = this.populateObject(r.forge.items.trinket)
            this.items['weapon'] = this.populateObject(r.forge.items.weapon)
        })
  },
  filters: {
      capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
      }
  },
  methods: {
    containsAll (needles, haystack) {
        let final = []
        for (let x in haystack) {
            if (needles.indexOf(haystack[x].name) > -1) {
                final.push([haystack[x].name, haystack[x].desc])
            }
        }
        return final
    },
    populateObject (source) {
        let itemArray = []
        for (var x in source) {
            itemArray.push(source[x])
        }
        return itemArray
    },
    generate (type, rarity) {
        let desc = this.descriptors.filter(obj => {
            return (obj.type.includes(type) && obj.rare <= parseInt(rarity))
        })
        desc = new Array(
            desc[Math.floor(Math.random() * desc.length)],
            desc[Math.floor(Math.random() * desc.length)],
            desc[Math.floor(Math.random() * desc.length)],
            desc[Math.floor(Math.random() * desc.length)]
        )

        let item = this.items[type]
        
        item = item[Math.floor(Math.random() * item.length)]

        let itemObject = {
            pre: desc[0].pre,
            item: item.name,
            post: desc[1].post
        }

        let tagList = []
        for (var step = 0; step <= rarity; step++) {
            let freeTags = desc[step].tags
            tagList.push(freeTags[Math.floor(Math.random() * freeTags.length)])
        }
        this.tagList = this.containsAll(tagList, this.tags)

        if (rarity <= '1') {
            let remove = this.remove(itemObject, 'item')
            delete itemObject[remove]
            desc.splice(desc.indexOf(desc[Math.floor(Math.random() * desc.length)]),1)
        }
        // another else if for "badges"

        let output = ''
        for (var x in itemObject) {
            output += itemObject[x] + " "
        }
        
        this.output = output.trim()
    },
    remove (obj, excludeKey) {
        let rand = null
        let keys = Object.keys(obj)
        while(rand === null || rand === excludeKey) {
            rand = keys[Math.floor(keys.length * Math.random())]
        }
        return rand
    },
    gaTrack (item) {
        let itemName = item.charAt(0).toUpperCase() + item.slice(1)
        this.$ga.event({
            eventCategory: 'Generate',
            eventAction: itemName,
            eventLabel: this.output,
            eventValue: 1
        })
    }
  }
}</script>