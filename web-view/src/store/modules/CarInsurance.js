export default {
  state: {
    insuranceName: {
      biz: '商业险',
      ForceTax: '交强险+车船税',
      BoLi: '玻璃险',
      CheSun: '车辆损失险',
      ZiRan: '自燃损失险',
      SheShui: '涉水险',
      HuaHen: '车身划痕险',
      HcSanFangTeYue: '机动车无法找到第三方特约险',
      DaoQiang: '全车盗抢险',
      SanZhe: '第三者责任险',
      SiJi: '司机责任险',
      ChengKe: '车上乘客险'
    },
    BoLi: {
      '0': '',
      '1': '国产',
      '2': '进口'
    },
    HuaHen: {
      '2千': '2000',
      '5千': '5000',
      '1万': '10000',
      '2万': '20000'
    },
    SanZhe: {
      '5万': '50000',
      '10万': '100000',
      '15万': '150000',
      '20万': '200000',
      '30万': '300000',
      '50万': '500000',
      '100万': '1000000',
      '150万': '1500000'
    },
    SiJi: {
      '1万': '10000',
      '2万': '20000',
      '3万': '30000',
      '4万': '40000',
      '5万': '50000',
      '10万': '100000',
      '20万': '200000'
    },
    ChengKe: {
      '1万': '10000',
      '2万': '20000',
      '3万': '30000',
      '4万': '40000',
      '5万': '50000',
      '10万': '100000',
      '20万': '200000'
    }
    //以下的才有不计免赔
    // var BuJiMain = ['CheSun', 'ZiRan', 'SheShui', 'HuaHen', 'DaoQiang', 'SanZhe', 'SiJi', 'ChengKe'];
  }
}