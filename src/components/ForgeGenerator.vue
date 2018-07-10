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
                    <b-icon
                        size="is-small"
                        icon="tag">
                    </b-icon>
                    <span>{{item | capitalize}}</span>
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
                    <span class="button is-link" @click="generate(itemType, complexity); gaTrack(itemType)">Generate {{itemType}}</span>
                </div>

            </b-field>

        </div>

        <div class="field has-addons-center item-selector">

            <b-field class="has-addons-centered">

                <b-radio-button v-model="complexity"
                    native-value="simple">
                    Simple
                </b-radio-button>

                <b-radio-button v-model="complexity"
                    native-value="default"
                    >
                    Default
                </b-radio-button>

                <b-radio-button v-model="complexity"
                    native-value="complex"
                    >
                    Complex
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
      qualities: [],
      descriptors: [],
      tagList: [],
      output: "Generate an item!",
      itemType: "weapon",
      complexity: "default",
      selected: 1
    }
  },
  mounted() {
    fetch('forge-final.json')
        .then(r => r.json())
        .then(r => {
            this.qualities = this.populateObject(r.forge.quality)
            this.descriptors = this.populateObject(r.forge.descriptors)
            this.items = this.populateObject(r.forge.items)
            this.tags = this.populateObject(r.forge.tags)
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
    populateObject (source) {
        let itemArray = []
        for (var x in source) {
            itemArray.push([x, source[x]])
        }
        return itemArray
    },
    generate (type, complexity) {
        let desc = this.descriptors.filter(obj => {
            return obj[1].type.includes(type)
        })
        desc = new Array(
            desc[Math.floor(Math.random() * desc.length)],
            desc[Math.floor(Math.random() * desc.length)],
            desc[Math.floor(Math.random() * desc.length)]
        )

        let item = this.items.filter(obj => {
            return obj.includes(type)
        })
        item = item[0][1][Math.floor(Math.random() * item[0][1].length)]

        let quality = this.qualities[Math.floor(Math.random() * this.qualities.length)]
        let itemObject = {
            quality: quality[1],
            pre: desc[0][1].pre,
            item: item,
            post: desc[1][1].post
        }
        if (complexity === 'simple') {
            let remove = this.remove(itemObject, 'item')
            delete itemObject[remove]
            remove = this.remove(itemObject, 'item')
            delete itemObject[remove]
            desc.splice(desc.indexOf(desc[Math.floor(Math.random() * desc.length)]),1)
            desc.splice(desc.indexOf(desc[Math.floor(Math.random() * desc.length)]),1)
        } else if (complexity === 'default') {
            let remove = this.remove(itemObject, 'item')
            delete itemObject[remove]
            desc.splice(desc.indexOf(desc[Math.floor(Math.random() * desc.length)]),1)
        }

        let output = ''
        for (var x in itemObject) {
            output += itemObject[x] + " "
        }
        this.tagList = []
        for (var y in desc) {
            this.tagList.push(desc[y][1].tags[0])
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