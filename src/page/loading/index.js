import {$loader} from "../../utils/pixi";

import common_dialog from '@static/common/dialog.png'

import p1_bg from '@static/p1/bg.png'
import p1_flower from '@static/p1/flower.png'
import p1_glass from '@static/p1/glass.png'
import p1_bless from '@static/p1/bless.png'
import p1_man from '@static/p1/man.png'
import p1_displacement from '@static/p1/displacement.jpg'
import p1_women from '@static/p1/women.json'
import "@static/p1/women.atlas"
import "@static/p1/women.png"

import p2_bg from '@static/p2/bg.png'
import p2_bless from '@static/p2/bless.png'
import p2_boy from '@static/p2/boy.png'
import p2_desk from '@static/p2/desk.png'
import p2_girl from '@static/p2/girl.png'
import p2_grandpa from '@static/p2/gradpa.png'
import p2_tie from '@static/p2/tie.png'


import p3_lovers from '@static/p3/lovers.png'
import p3_bg from '@static/p3/bg.png'
import p3_old_man from '@static/p3/oldman.png'
import p3_boy from '@static/p3/boy.png'
import p3_girl from '@static/p3/girl.png'
import p3_banger from '@static/p3/banger.png'
import p3_dog from '@static/p3/dog.png'
import p3_bless from '@static/p3/bless.png'

import p4_bg from '@static/p4/bg.png'
import p4_bless from '@static/p4/bless.png'
import p4_baby from '@static/p4/baby.png'
import p4_children from '@static/p4/children.png'
import p4_desk from '@static/p4/desk.png'
import p4_gradman from '@static/p4/gradman.png'
import p4_hi from '@static/p4/hi.png'
import p4_house from '@static/p4/house.png'
import p4_light from '@static/p4/light.png'
import p4_photo from '@static/p4/photo.png'
import p4_wall from '@static/p4/wall.png'

import p5_bg from '@static/p5/bg.png'
import p5_bless from '@static/p5/bless.png'
import p5_lantern from '@static/p5/lantern.png'
import p5_little_girl from '@static/p5/little_girl.png'
import p5_red_girl from '@static/p5/red_girl.png'
import p5_uncle from '@static/p5/uncle.png'

import p6_bg from '@static/p6/bg.png'
import p6_bless from '@static/p6/bless.png'
import p6_boy from '@static/p6/boy.png'
import p6_desk from '@static/p6/desk.png'
import p6_dog from '@static/p6/dog.png'
import p6_fish from '@static/p6/fish.png'
import p6_hand from '@static/p6/hand.png'
import p6_hua from '@static/p6/hua.png'
import p6_hua1 from '@static/p6/hua1.png'
import p6_light from '@static/p6/light.png'
import p6_mama from '@static/p6/mama.png'
import p6_yeye from '@static/p6/yeye.png'


export default class Loading {

    constructor(app) {
        this.app = app
    }

    start() {
        l('loading start.....')
        return new Promise((resolve, reject) => {
            $loader

                .add("p1_bg", p1_bg)
                .add("p1_flower", p1_flower)
                .add("p1_glass", p1_glass)
                .add("p1_bless", p1_bless)
                .add('p1_women', p1_women)
                .add('p1_man', p1_man)
                .add('p1_displacement', p1_displacement)

                .add("p2_bg", p2_bg)
                .add("p2_bless", p2_bless)
                .add("p2_grandpa", p2_grandpa)
                .add("p2_tie", p2_tie)
                .add("p2_boy", p2_boy)
                .add("p2_desk", p2_desk)
                .add("p2_girl", p2_girl)

                .add('p3_bg', p3_bg)
                .add('p3_lovers', p3_lovers)
                .add('p3_old_man', p3_old_man)
                .add('p3_boy', p3_boy)
                .add('p3_girl', p3_girl)
                .add('p3_banger', p3_banger)
                .add('p3_dog', p3_dog)
                .add('p3_bless', p3_bless)

                .add('p4_bg', p4_bg)
                .add('p4_bless', p4_bless)
                .add('p4_baby', p4_baby)
                .add('p4_desk', p4_desk)
                .add('p4_children', p4_children)
                .add('p4_grandpa', p4_gradman)
                .add('p4_hi', p4_hi)
                .add('p4_house', p4_house)
                .add('p4_light', p4_light)
                .add('p4_photo', p4_photo)
                .add('p4_wall', p4_wall)

                .add('p5_bg', p5_bg)
                .add('p5_bless', p5_bless)
                .add('p5_lantern', p5_lantern)
                .add('p5_little_girl', p5_little_girl)
                .add('p5_red_girl', p5_red_girl)
                .add('p5_uncle', p5_uncle)

                .add('p6_bg', p6_bg)
                .add('p6_bless', p6_bless)
                .add('p6_boy', p6_boy)
                .add('p6_desk', p6_desk)
                .add('p6_dog', p6_dog)
                .add('p6_fish', p6_fish)
                .add('p6_hand', p6_hand)
                .add('p6_hua', p6_hua)
                .add('p6_hua1', p6_hua1)
                .add('p6_light', p6_light)
                .add('p6_mama', p6_mama)
                .add('p6_yeye', p6_yeye)


                .load((loader, res) => {
                    resolve({loader, res})
                })
        })
    }

}