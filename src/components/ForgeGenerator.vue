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

        <b-field position="is-centered">

            <b-taglist>
                <b-tag type="is-info" icon="tag">
                    <b-icon
                        size="is-small"
                        icon="tag">
                    </b-icon>
                    <span>Tag 1</span>
                </b-tag>

                <b-tag type="is-info" icon="tag">
                    <b-icon
                        size="is-small"
                        icon="tag">
                    </b-icon>
                    <span>Tag 2</span>
                </b-tag>

                <b-tag type="is-info" icon="tag">
                    <b-icon
                        size="is-small"
                        icon="tag">
                    </b-icon>
                    <span>Tag 3</span>
                </b-tag>
            </b-taglist>

        </b-field>



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
                    <span class="button is-link" @click="generate(itemType); gaTrack(itemType)">Generate {{itemType}}</span>
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
      itemArray: [],
      tagArray: [],
      tooltipsArray: [],
      tagPre: null,
      tagPost: null,
      item: null,
      msg: "Generate an item!",
      itemType: "weapon",
      selected: 1
    }
  },
  mounted() {
    fetch('forge-new.json')
        .then(r => r.json())
        .then(r => {
            // console.log(r.forge.items)
            this.populateItems('armor', r.forge.items.armor)
            this.populateItems('trinket', r.forge.items.trinket)
            this.populateItems('weapon', r.forge.items.weapon)

            this.tagArray['armor'] = []
            this.tagArray['trinket'] = []
            this.tagArray['weapon'] = []
            this.populateTags(r.forge.tags)
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