import {ComposerTranslation} from "vue-i18n";
export type TBoxType = {
    num:string
    categories:string
    items?:string
}
export function boxChoose(num:number,t:ComposerTranslation):Array<TBoxType>{
    const whiteBox = <Array<TBoxType>>[
        {num:'01',categories:t('lang.serviceContract.table.white.categories01'),items:t('lang.serviceContract.table.white.item01.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text03')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text04')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text05')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text06')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item01.text07')},
        {num:'02',categories:t('lang.serviceContract.table.white.categories02'),items:t('lang.serviceContract.table.white.item02.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item02.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item02.text03')},
        {num:'03',categories:t('lang.serviceContract.table.white.categories03'),items:t('lang.serviceContract.table.white.item03.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item03.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item03.text03')},
        {num:'04',categories:t('lang.serviceContract.table.white.categories04'),items:t('lang.serviceContract.table.white.item04.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text03')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text04')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text05')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item04.text06')},
        {num:'05',categories:t('lang.serviceContract.table.white.categories05'),items:t('lang.serviceContract.table.white.item05.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item05.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item05.text03')},
        {num:'06',categories:t('lang.serviceContract.table.white.categories06'),items:t('lang.serviceContract.table.white.item06.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item06.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item06.text03')},
        {num:'07',categories:t('lang.serviceContract.table.white.categories07'),items:t('lang.serviceContract.table.white.item07.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text03')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text04')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text05')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text06')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text07')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text08')},
        {num:'',categories:'',items:t('lang.serviceContract.table.white.item07.text09')},
        {num:'08',categories:t('lang.serviceContract.table.white.categories08'),items:t('lang.serviceContract.table.white.item08')},
        {num:'09',categories:t('lang.serviceContract.table.white.categories09'),items:t('lang.serviceContract.table.white.item09')},
    ]
    const greyBox = <Array<TBoxType>>[
        {num:'01',categories:t('lang.serviceContract.table.grey.categories01'),items:t('lang.serviceContract.table.grey.item01')},
        {num:'02',categories:t('lang.serviceContract.table.grey.categories02'),items:t('lang.serviceContract.table.grey.item02.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item02.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item02.text03')},
        {num:'03',categories:t('lang.serviceContract.table.grey.categories03'),items:t('lang.serviceContract.table.grey.item03.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item03.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item03.text03')},
        {num:'04',categories:t('lang.serviceContract.table.grey.categories04'),items:t('lang.serviceContract.table.grey.item04.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item04.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item04.text03')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item04.text04')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item04.text05')},
        {num:'05',categories:t('lang.serviceContract.table.grey.categories05'),items:t('lang.serviceContract.table.grey.item05.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item05.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item05.text03')},
        {num:'06',categories:t('lang.serviceContract.table.grey.categories06'),items:t('lang.serviceContract.table.grey.item06.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item06.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item06.text03')},
        {num:'',categories:'',items:t('lang.serviceContract.table.grey.item06.text04')},
        {num:'07',categories:t('lang.serviceContract.table.grey.categories07'),items:t('lang.serviceContract.table.grey.item07')},
    ]
    const blackBox = <Array<TBoxType>>[
        {num:'01',categories:t('lang.serviceContract.table.black.categories01'),items:t('lang.serviceContract.table.black.item01.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item01.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item01.text03')},
        {num:'02',categories:t('lang.serviceContract.table.black.categories02'),items:t('lang.serviceContract.table.black.item02.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item02.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item02.text03')},
        {num:'03',categories:t('lang.serviceContract.table.black.categories03'),items:t('lang.serviceContract.table.black.item03.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item03.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item03.text03')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item03.text04')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item03.text05')},
        {num:'04',categories:t('lang.serviceContract.table.black.categories04'),items:t('lang.serviceContract.table.black.item04.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item04.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item04.text03')},
        {num:'04',categories:t('lang.serviceContract.table.black.categories05'),items:t('lang.serviceContract.table.black.item05.text01')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item05.text02')},
        {num:'',categories:'',items:t('lang.serviceContract.table.black.item05.text03')},
        {num:'06',categories:t('lang.serviceContract.table.black.categories06'),items:t('lang.serviceContract.table.black.item06')},
    ]
    if(num === 1){
        return whiteBox
    }
    if(num === 2){
        return greyBox
    }
    return blackBox
}


