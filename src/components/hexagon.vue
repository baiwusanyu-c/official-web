/*
* @hexagon.vue
* @deprecated
* @author czh
* @update (czh 2021/12/16)
*/
<template>
    <div class="hexagon-container"
         @mouseenter="isHover = true"
         @mouseleave="isHover = false"
         :style="{
             width: `${!isHover && 200}px`,
             height: `${!isHover && 230}px `,
             zIndex:`${!isHover ? 10 : 20}`,
             backgroundImage: `url(${img})`
         }">
        <p class="mt-4">{{list[index]}}</p>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref,computed} from "vue";
import {useI18n} from "vue-i18n";
interface IImge  {
    img:string
}
export default defineComponent({
    name: "hexagon",
    props:{
      index:{
          type:Number,
          default:0,
          require:true
      }
    },
    setup(props) {
        const {t} = useI18n()
        const isHover = ref<boolean>(false)
        const list = ref<Array<string>>([
            t('lang.home.serviceIc1'),
            t('lang.home.serviceIc2'),
            t('lang.home.serviceIc3'),
            t('lang.home.serviceIc4'),
            t('lang.home.serviceIc5'),
            t('lang.home.serviceIc6'),
            t('lang.home.serviceIc7'),
            t('lang.home.serviceIc8'),
            t('lang.home.serviceIc9'),
            t('lang.home.serviceIc10'),
            t('lang.home.serviceIc11'),
            t('lang.home.serviceIc12')
        ])
        const imgList = reactive<object[]>([])
        const imgListHover = reactive<object[]>([])
        const imgImport = import.meta.globEager("../assets/img/*.png");
        const getImage = ():void =>{
            list.value.map((val:string,index:number)=>{
                const obj:IImge= {img:''}
                obj.img = imgImport['../assets/img/hexagon' + (index + 1) + '.png'].default
                imgList.push(obj)
                const objHover:IImge = {img:''}
                objHover.img = imgImport['../assets/img/hexagon' + (index + 1) + '-hover.png'].default
                imgListHover.push(objHover)
                /*import('../assets/img/hexagon' + (index + 1) + '.png').then(res=>{
                    obj.img = res.default
                    imgList.push(obj)
                })*/
               /* const objHover:IImge = {img:''}
                import('../assets/img/hexagon' + (index + 1) + '-hover.png').then(res=>{
                    objHover.img = res.default
                    imgListHover.push(objHover)
                })*/
            })
        }
        const img = computed(()=>{
            if(isHover.value){
                return (imgListHover[props.index] as IImge)?.img
            }else{
                return (imgList[props.index] as IImge)?.img
            }
        })
        onMounted(()=>{
            getImage()
        })
        return {
            img,
            isHover,
            list,
            imgList,
            imgListHover
        }
    }
})
</script>

<style scoped>
.hexagon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 178px;
    height: 206px;
    background-repeat: no-repeat;
    text-align: center;
    padding: 0 30px 0 20px;
    transition: all .1s;
}
.hexagon-container:hover p{
    margin-top: 40px;
}
.hexagon-container:hover{
    padding: 0 30px;
}

</style>