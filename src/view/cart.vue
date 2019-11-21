<template>
    <div style="margin-top: -0.4rem">
        <van-nav-bar
                title="购物车"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-checkbox-group class="card-goods" v-model="checkedGoods">
            <van-checkbox
                    class="card-goods__item"
                    v-for="(item,idx) in weidATA"
                    :key="idx"
                    :name="item.id"
            >
                <van-card
                        :title="item.title"
                        :desc="item.desc"
                        :num="item.num"
                        :price="formatPrice(item.price)"
                        :thumb="item.thumb"
                >
                    <div slot="footer">
                        <van-button size="mini" @click="del(idx)">减少</van-button>
                        <van-button size="mini" @click="add(idx)">增加</van-button>
                    </div>
                </van-card>
            </van-checkbox>
        </van-checkbox-group>
        <van-submit-bar
                :price="totalPrice"
                :disabled="!checkedGoods.length"
                :button-text="submitBarText"
                @submit="onSubmit"
        />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast ,NavBar,Button} from 'vant';
    export default {
        name: "cart",
        components: {
            [Card.name]: Card,
            [Button.name]:Button,
            [NavBar.name]: NavBar,
            [Checkbox.name]: Checkbox,
            [SubmitBar.name]: SubmitBar,
            [CheckboxGroup.name]: CheckboxGroup
        },
        computed: {
            ...mapGetters({
                cartInfo: 'GETCART'
            }),
            submitBarText() {
                const count = this.checkedGoods.length;
                return '结算' + (count ? `(${count})` : '');
            },
            totalPrice() {
                return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0), 0);
            }
        },
        data() {
            return {
                weidATA:[],
                checkedGoods: ['1', '2', '3'],
                goods: [{
                    id: 1,
                    title: '进口香蕉',
                    desc: '约250g，2根',
                    price: 200,
                    num: 1,
                    thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                }, {
                    id: '2',
                    title: '陕西蜜梨',
                    desc: '约600g',
                    price: 690,
                    num: 1,
                    thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
                }, {
                    id: '3',
                    title: '美国伽力果',
                    desc: '约680g/3个',
                    price: 2680,
                    num: 1,
                    thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
                }]
            };
        },
        methods: {
            formatPrice(price) {
                return (price / 100).toFixed(2);
            },
            onSubmit() {
                Toast('点击结算');
            },
            onClickLeft() {
                this.$router.replace("/detail")
            },
            onClickRight() {
                Toast('按钮');
            },
            add(idx){
                this.goods[idx].num++
            },
            weiforeach(){

              for(let i=0;i<this.goods.length;i++){
                  console.log(this.cartInfo[0])
                  if(this.goods[i].id== this.cartInfo[0]){

                      this.weidATA.push(this.goods[i])
                  }
              }
            },
            del(idx){
                if(this.goods[idx].num<=1){
                    this.goods[idx].num=1
                }else{
                    this.goods[idx].num--
                }

            }
        },
        beforeMount() {
            this.weiforeach()
        }
    }
</script>

<style lang="less">
    .card-goods {
        padding: 10px 0;
        background-color: #fff;
        &__item {
            position: relative;
            background-color: #fafafa;
            .van-checkbox__label {
                width: 100%;
                height: auto; // temp
                padding: 0 10px 0 15px;
                box-sizing: border-box;
            }
            .van-checkbox__icon {
                top: 50%;
                left: 10px;
                z-index: 1;
                position: absolute;
                margin-top: -10px;
            }
            .van-card__price {
                color: #f44;
            }
        }
    }
</style>
