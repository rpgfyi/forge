<template>
    <div class="container has-text-centered">
        
        <img 
            class="logo" 
            src="logo.svg" 
            width="200" 
            height="200">

        <div class="item-area">

            {{msg}}
            <b-tooltip v-if="outputArray['quality']" 
                :label="tooltipsArray['quality']" 
                type="is-light" 
                dashed 
                square 
                multilined>{{outputArray['quality'][0]}}
            </b-tooltip>
            <b-tooltip v-if="outputArray['pre']"
                :label="tooltipsArray['pre']"
                type="is-light"
                dashed
                square
                multilined>{{outputArray['pre'][2]}}
            </b-tooltip>
            <b-tooltip v-if="outputArray['item']"
                :label="tooltipsArray['item']"
                type="is-light"
                dashed
                square
                multilined>{{outputArray['item'][0]}}
            </b-tooltip>
            <b-tooltip v-if="outputArray['post']"
                :label="tooltipsArray['post']"
                type="is-light"
                dashed
                square
                multilined>{{outputArray['post'][3]}}
            </b-tooltip>
    
        </div>

        <b-field position="is-centered">

            <b-taglist>
                <b-tag type="is-info" icon="tag" v-for="item in tagList">
                    <b-icon
                        size="is-small"
                        icon="tag">
                    </b-icon>
                    <span>{{item}}</span>
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
      itemArray: [],
      qualityArray: [],
      tagArray: [],
      tagList: [],
      tooltipsArray: [],
      outputArray: {
          quality: '',
          pre: '',
          item: '',
          post: ''
      },
      quality: null,
      tagPre: null,
      tagPost: null,
      item: null,
      msg: "Generate an item!",
      itemType: "weapon",
      complexity: "default",
      selected: 1
    }
  },
  mounted() {
    fetch('forge-new.json')
        .then(r => r.json())
        .then(r => {
            this.populateItems('armor', r.forge.items.armor)
            this.populateItems('trinket', r.forge.items.trinket)
            this.populateItems('weapon', r.forge.items.weapon)

            this.tagArray['armor'] = []
            this.tagArray['trinket'] = []
            this.tagArray['weapon'] = []
            this.populateTags(r.forge.tags)

            this.populateQuality(r.forge.quality)
        })
  },
  methods: {
    populateItems (type, source) {
        this.itemArray[type] = []
        for (var x in source) {
            this.itemArray[type]
                .push([
                    source[x].pre,
                    source[x].desc
                ])
        }
        return true;
    },
    populateTags (source) {
        
        for (var x in source) {
            for (var y in source[x].type) {
                this.tagArray[source[x].type[y]]
                    .push([
                        source[x].name,
                        source[x].desc,
                        source[x].pre,
                        source[x].post
                    ])
            }
        }
    },
    populateQuality (source) {
        for (var x in source) {
            this.qualityArray.push([source[x].name, source[x].desc])
        }
    },
    generate (type, complexity) {
        // console.log(this.tagArray)
        let tags = this.tagArray[type]
        let tag = new Array(tags[Math.floor(Math.random() * tags.length)], tags[Math.floor(Math.random() * tags.length)])
        let item = this.itemArray[type][Math.floor(Math.random() * this.itemArray[type].length)]
        let quality = this.qualityArray[Math.floor(Math.random() * this.qualityArray.length)]
        let itemObject = {
            quality: quality,
            pre: tag[0],
            item: item,
            post: tag[1]
        }

        if (complexity === 'simple') {
            let remove = this.remove(itemObject, 'item')
            delete itemObject[remove]
            remove = this.remove(itemObject, 'item')
            delete itemObject[remove]
        } else if (complexity === 'default') {
            let remove = this.remove(itemObject, 'item')
            delete itemObject[remove]
        }
        
        this.emptyOutputArray()
        for (var x in itemObject) {
            this.outputArray[x] = itemObject[x]
        }
        this.msg = ""
    },
    remove (obj, excludeKey) {
        let rand = null
        let keys = Object.keys(obj)
        while(rand === null || rand === excludeKey) {
            rand = keys[Math.floor(keys.length * Math.random())]
        }
        return rand
    },
    emptyOutputArray () {
        this.outputArray = {
            quality: '',
            pre: '',
            item: '',
            post: ''
        }
    },
    gaTrack (item) {
        let itemName = item.charAt(0).toUpperCase() + item.slice(1)
        this.$ga.event({
            eventCategory: 'Generate',
            eventAction: itemName,
            eventLabel: this.tagPre + ' ' + this.item + ' ' + this.tagPost,
            eventValue: 1
        })
    }
  }
}</script>