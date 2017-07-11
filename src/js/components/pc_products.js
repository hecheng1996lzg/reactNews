/**
 * Created by HeCheng on 2017/7/11.
 */
import React from 'react';

export default class PCProduct extends React.Component{
    render(){
        return (
            <div className="tab_main no_login_tabmain">
                {/* 网易新闻 */}
                <div className="cell clearfix cell_news">
                    <a href="http://www.163.com/newsapp" className="logo">网易新闻</a>
                    <div className="detail">
                        <h3><a href="http://www.163.com/newsapp">网易新闻</a></h3>
                        <div>
                            <a href="http://news.163.com/">新闻首页</a>
                            <a href="http://3g.163.com/ntes/special/00340QR4/app.html#download">ios下载</a>
                            <a href="http://3g.163.com/ntes/special/00340QR4/app.html#download">Android下载</a>
                        </div>
                    </div>
                </div>
                {/* 网易邮箱 */}
                <div className="cell clearfix cell_email">
                    <a href="http://email.163.com/" className="logo">网易邮箱</a>
                    <div className="detail">
                        <h3><a href="http://email.163.com/#from=ntes_product">网易邮箱</a></h3>
                        <div className="y_login">
                            未读邮件:
                            积分:
                            <a href="http://email.163.com/#from=ntes_product&ntes_mail_firstpage=compose" className="go_pro go_writemail" target="_blank" ne-href="{{myState.loginmail}}&ntes_mail_firstpage=compose"><span>写邮件</span></a>
                        </div>
                        <div className="no_login">
                            <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                            <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
                            <a href="http://qiye.163.com/">企业邮箱</a>
                            <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                        </div>
                    </div>
                </div>
                {/* 网易考拉 */}
                <div className="cell clearfix cell_kaola">
                    <a href="http://rd.da.netease.com/redirect?t=phQvh57q8x&p=moiAt1&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505" className="logo">网易考拉</a>
                    <div className="detail">
                        <h3><a href="http://rd.da.netease.com/redirect?t=phQvh57q8x&p=moiAt1&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">网易考拉</a></h3>
                        {/* <p class="y_login">
                         待发货:<a href="javascript:void(0);"  id="kaolafahuo" class="fontred mr20">0</a>
                         待收货:<a href="javascript:void(0);"  id="kaolashouhuo" class="fontred">0</a>
                         <a class="go_pro" href="javascript:void(0);" target="_blank">
                         <span>查物流</span>&gt;</a>
                         </p> */}
                        <div>
                            <a href="http://rd.da.netease.com/redirect?t=IrzcoVD83c&p=NM2to7&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F15809.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">新用户特价</a>
                            <a href="http://rd.da.netease.com/redirect?t=OBmOrrixmr&p=iR57yw&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F10194.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">领红包</a>
                            <a href="http://rd.da.netease.com/redirect?t=JRliBUaQHO&p=17XYDd&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F11835.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">点卡9.8折</a>
                        </div>
                    </div>
                </div>
                {/* 网易音乐 */}
                {/* 客户端app */}
                <div className="cell cell_app">
                    {/* 前三个位置随机，最后一个位置固定 */}
                    <ul id="app_list">
                        <li className="bohe_app"><a href="http://live.ent.163.com/download?f=163.homeMyApp"><i /><span>网易薄荷</span></a></li><li className="hongcai_app"><a href="https://hongcai.163.com/?from=pcsy-button"><i /><span>网易红彩</span></a></li><li className="money_app"><a href="http://i.money.163.com/"><i /><span>财经客户端</span></a></li><li className="gongkaike_app"><a href="http://open.163.com/appdownload/mobile?news_other"><i /><span>公开课</span></a></li></ul>
                    <a href="http://you.163.com/?from=web_fc_menhu_xinrukou_2" className="yanxuan_app last_app"><i /><span>网易严选</span></a>
                </div>
                {/* 全部产品 */}
                <div className="pop_all_product open_pop_product">
                    <ul className="clearfix">
                        <li className="first">
                            <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                            <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
                            <a href="http://qiye.163.com/">企业邮箱</a>
                            <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                            <a href="http://yixin.im" className="mr0">易信</a>
                        </li>
                        <li>
                            <h3>
                                <a href="http://www.163.com/newsapp/">新闻客户端</a>
                                <a href="http://i.money.163.com/?imb1">财经客户端</a>
                                <a href="https://hongcai.163.com/?from=pcsy-button">网易红彩</a>
                            </h3>
                            <a href="https://i.epay.126.net/a/8a/static/188activity.html?utm_source=163&utm_medium=recommend_pc&utm_campaign=1888cashfest&mmd=163&mpl=recommend_pc&mkw=1888cashfest">理财</a>
                            <a href="https://pop.lmlc.com/web/activity/practiceGold/index.html?from=tgn163productlist2">赚钱</a>
                            <a href="http://fa.163.com/?from=tgn163cp">贵金属</a>
                            <a href="http://baoxian.163.com/?from=wycp">车险</a>
                            <a href="http://qian.163.com/">有钱</a>
                            <a href="https://zc.163.com?utm_source=newspc&utm_medium=home_pc&utm_campaign=Crowdfunding&mmd=newspc&mpl=home_pc&mkw=Crowdfunding">众筹</a>
                            <a href="http://caipiao.163.com/#from=www">彩票</a>
                            <a href="http://trip.163.com/">火车票</a>
                            <a href="http://you.163.com?from=web_in_wyshouye">严选</a>
                            <a href="http://www.weiyang.cn/">网易味央</a>
                            <a href="http://mall.163.com/?from=mmwww">商城</a>
                            <a href="http://rd.da.netease.com/redirect?t=VGa7BN&p=ve4u5l&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">考拉海购</a>
                            <a href="http://gzy.mail.163.com/?from=163product">公正邮</a>
                            <a href="http://x.163.com?source=163webproduct">青果</a>
                            <a href="https://3c.163.com/?from=wangyimenhu18">网易智造</a>
                            <a href="http://yxp.163.com/">印象派</a>
                        </li>
                        <li>
                            <h3>
                                <a href="http://live.ent.163.com/download?f=163.homeMyApp">薄荷直播</a>
                                <a href="http://open.163.com/">公开课</a>
                                <a href="http://tie.163.com/">跟贴</a>
                            </h3>
                            <a href="http://163.lu/pyuJC1">网易美学</a>
                            <a href="http://manhua.163.com/">漫画</a>
                            <a href="http://yuedu.163.com">读小说</a>
                            <a href="http://y.163.com/download/index?from=wscp">美聊</a>
                            <a href="http://yuehui.163.com/?from=wscp">约会</a>
                            <a href="http://cc.163.com/">CC语音</a>
                            <a href="http://love.163.com/?from=wscp">花田</a>
                            <a href="http://www.lofter.com/?act=qb163rk_20141031_12">LOFTER</a>
                            <a href="http://photo.163.com/">相册</a>
                            <a href="http://cidian.youdao.com/">有道词典</a>
                            <a href="http://fanyi.youdao.com/?vendor=163homepage">翻译</a>
                            <a href="http://note.youdao.com/?vendor=163index">云笔记</a>
                            <a href="http://study.163.com/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">云课堂</a>
                            <a href="http://www.icourse163.org/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">大学MOOC</a>
                        </li>
                        <li>
                            <h3>
                                <a href="http://xyq.163.com/">梦幻西游</a>
                                <a href="http://xy2.163.com/">新大话2</a>
                                <a href="http://my.163.com/">梦幻西游手游</a>
                            </h3>
                            <a href="http://x3.163.com/">新大话3</a>
                            <a href="http://www.warcraftchina.com/">魔兽世界</a>
                            <a href="http://qnm.163.com/">倩女幽魂手游</a>
                            <a href="http://xqn.163.com/fab/">新倩女幽魂</a>
                            <a href="http://wh2.163.com/">武魂2</a>
                            <a href="http://dhxy.163.com/">大话西游手游</a>
                            <a href="http://ow.blizzard.cn/">守望先锋</a>
                            <a href="http://tx3.163.com/">天下3</a>
                            <a href="http://stzb.163.com/">率士之滨</a>
                            <a href="http://dt2.163.com/">大唐无双零</a>
                            <a href="http://tianyu.163.com/">天谕</a>
                            <a href="http://yys.163.com/">阴阳师</a>
                            <a href="http://zmq.163.com/">镇魔曲</a>
                            <a href="http://9.163.com/">炉石传说</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
