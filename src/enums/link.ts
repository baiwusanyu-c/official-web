/*
 * @link.ts
 * @deprecated
 * @author czh
 * @update (czh 2021/12/20)
 */
import { IOption } from '../utils/types'

export enum linkConfig {
  facebook = 'https://www.facebook.com/profile.php?id=100026616589335',
  discord = 'https://discord.gg/B4QJxhStV4 ',
  github = 'https://github.com/Beosin20180329',
  twitter = 'https://twitter.com/Beosin_com',
  telegram = 'https://t.me/+dD8Bnqd133RmNWNl',
  medium = 'https://medium.com/@Beosin',
}

export enum linkConfigPolicy {
  conditions = 'https://anonymous.obs.cn-east-3.myhuaweicloud.com:443/Beosin_User%20Agreement.pdf?AccessKeyId=JGG75VX9HENSQGHAPICW&Expires=1676201373&Signature=wmEF1VfUSqwOfs35%2BEHhdFKJye4%3D',
  privacy = 'https://anonymous.obs.cn-east-3.myhuaweicloud.com:443/Beosin_Privacy%20Policy.pdf?AccessKeyId=JGG75VX9HENSQGHAPICW&Expires=1676201336&Signature=OfG%2BpOt9zpEtEkQSImPSRaDxpIw%3D',
}

export enum serviceContract {
  report3 = 'https://beosin.obs.cn-east-3.myhuaweicloud.com/website/hermit/Smart%20contract%20security%20audit%20report%20-%20NFT.pdf',
  report2 = 'https://beosin.obs.cn-east-3.myhuaweicloud.com/website/hermit/Smart%20contract%20security%20audit%20report%20-%20CrossYield-stake.pdf',
  report1 = 'https://beosin.obs.cn-east-3.myhuaweicloud.com/website/hermit/Smart%20contract%20security%20audit%20report%20-%20Huckleberry.pdf',
}

export enum productLinkDev {
  eagleEye = 'http://192.168.0.216:18088/#/',
  vaas = 'http://124.71.193.230:17070/#/login',
}
export enum productLinkStage {
  eagleEye = 'http://124.71.193.230:18088/#/',
  vaas = 'http://124.71.193.230:17070/#/login',
}
export enum productLinkProd {
  eagleEye = 'https://eagleeye.beosin.com/',
  vaas = 'https://vaas.beosin.com/#/login',
}
const productLink: IOption = {
  production: productLinkProd,
  development: productLinkDev,
  staging: productLinkStage,
}
export const productLinkList = productLink[String(import.meta.env.VITE_PROJECT_ENV)]
