<script setup>
    import { Images } from '../../scripts/images.js'
    import { Data } from '../../scripts/datas.js'
    import Button from '../content/Button.vue'
</script>

<template>
    <section class="meal-time-section">
        <div class="meal-time-content">
            <div class="meal-time-content-heading">
                <h1 class="meal-time-heading" v-html="Data.content.header.title"></h1>
                <p class="meal-time-text" v-html="Data.content.header.subtitle"></p>
                <img 
                    class="icons cart"
                    :src="Images.header.icons.cart" 
                    :srcset="`${Images.header.icons.cart} 1x, ${Images.header.icons.cart2x} 2x`"
                    alt="Green cart icon" 
                />
                <img 
                    class="icons carrot"
                    :src="Images.header.icons.carrot" 
                    :srcset="`${Images.header.icons.carrot} 1x, ${Images.header.icons.carrot2x} 2x`"
                    alt="Carrot icon"
                />
                <img 
                    class="icons bread" 
                    :src="Images.header.icons.bread" 
                    :srcset="`${Images.header.icons.bread} 1x, ${Images.header.icons.bread2x} 2x`"
                    alt="Bread icon"
                />
                <img 
                    class="icons cherry" 
                    :src="Images.header.icons.cherry" 
                    :srcset="`${Images.header.icons.cherry} 1x, ${Images.header.icons.cherry2x} 2x`"
                    alt="Cherry icon"
                />
            </div>

            <div class="meal-time-content-rectangles">
                <div class="rectangle texts-img-rectangle" style="height: 491px; margin-bottom: 63px;">
                    <span>95%</span>
                    <p>Improved Eating <br />Habits</p>
                    <img 
                        class="vegetables" 
                        :src="Images.header.vegetables" 
                        :srcset="`${Images.header.vegetables} 1x, ${Images.header.vegetables2x} 2x`"
                        alt="A bag of Vegetables"
                    />
                </div>

                <div class="rectangle picture-rectangle" style="height: 461px;">
                    <img 
                        class="picture" 
                        :src="Images.header.bowl" 
                        :srcset="`${Images.header.bowl} 1x, ${Images.header.bowl2x} 2x`"
                        alt="A bowl of food"
                    />
                </div>


                <div class="demo-trial">
                    <div class="demo-trials-btns">
                        <Button label="Try Our Demo" variant="transparent-primary" :icon="false" />
                        <Button label="Start For Free" variant="secondary" :icon="false" />
                    </div>

                    <div class="numbers-users">
                        <span>30 000+</span>
                        <p>Happy Users</p>
                    </div>
                </div>


                <div class="rectangle texts-img-rectangle groceries-rectangle" style="height: 461px;">
                    <img 
                        class="groceries" 
                        :src="Images.header.groceryBag" 
                        :srcset="`${Images.header.groceryBag} 1x, ${Images.header.groceryBag2x} 2x`"
                        alt="A bag of Groceries"
                    />
                    <span>25%</span>
                    <p>Saved on groceries</p>
                </div>

                <div class="rectangle picture-rectangle" style="height: 491px; margin-bottom: 63px;">
                    <img 
                        class="picture" 
                        :src="Images.header.natureHand" 
                        :srcset="`${Images.header.natureHand} 1x, ${Images.header.natureHand2x} 2x`"
                        alt="A hand holding a plant"
                    />
                </div>
            </div>
            <!--<Button label="Get Started" variant="primary" :icon="true" />-->
        </div>
    </section>
</template>

<style lang="stylus" scoped>
    @import "../../stylesheets/variables.styl"

    .meal-time-section
        width 100%
        height 745px

    .meal-time-content
        display flex
        flex-direction column
        max-width 100%
        margin 0 auto

    .meal-time-content-heading
        width 868px
        align-self center
        display flex
        flex-direction column
        align-items center
        gap 40px
        position relative

    .meal-time-heading
        font h1Size syne
        text-align center

    .meal-time-text
        font-size subHeadingSize

    .icons 
        position absolute

    .cart
        width 66px
        height 66px
        top 56px
        left -111px

    .carrot 
        width 50px
        height 50px
        bottom -25px
        left -5px

    .bread
        width 66px
        height 66px
        bottom -46px
        right 2px

    .cherry
        width 83px
        height 83px
        top 67px
        right -86px

    .meal-time-content-rectangles
        display flex
        justify-content center
        align-items flex-end
        gap 45px

    .rectangle
        display flex
        flex-direction column
        align-items flex-start 
        padding 15px
        background white

        & span
            font-size h1Size
            font-weight weight500

        & p 
            margin-top 10px
            margin-bottom 25px
            text-align left

        & img 
            border-radius 15px
            width 260px
            height auto

    
    .picture-rectangle
        width 275px
        padding 0

        .picture
            width 100%
            height auto
            border-radius 45px

    .groceries-rectangle

        span
            margin-top 10px
            margin-bottom 5px

        p 
            margin 0

    .demo-trial
        display flex
        flex-direction column
        align-items center
        gap 83px

        .demo-trials-btns
            display flex
            flex-direction column
            gap 20px

        .numbers-users
            width 390px
            height 200px;
            flex-shrink 0
            text-align center
            background primaryGreen
            color secondaryGreen
            display flex
            flex-direction column
            justify-content center
            align-items center
            border-radius 34px

            span 
                font h1Size syne
                font-weight weight500

            p 
                font-size subHeadingSize
                margin-top 15px
</style>