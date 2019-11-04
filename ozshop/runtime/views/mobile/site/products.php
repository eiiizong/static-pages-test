<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <title><?php echo $this->_siteConfig->name;?></title>
    <link type="image/x-icon" href="<?php echo IUrl::creatUrl("")."favicon.ico";?>" rel="icon">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <link rel="apple-touch-icon-precomposed" href="<?php echo $this->getWebSkinPath()."image/logo.gif";?>">
    <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/jquery/jquery-1.12.4.min.js"></script> <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/form/form.js"></script> <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/autovalidate/validate.js"></script><link rel="stylesheet" type="text/css" href="/runtime/_systemjs/autovalidate/style.css" /> <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/artdialog/artDialog.js"></script><script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/artdialog/plugins/iframeTools.js"></script><link rel="stylesheet" type="text/css" href="/runtime/_systemjs/artdialog/skins/aero.css" /> <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/artTemplate/artTemplate.js"></script><script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/artTemplate/artTemplate-plugin.js"></script>
    <script src="<?php echo $this->getWebViewPath()."javascript/common.js";?>"></script>
    <script src='<?php echo $this->getWebViewPath()."javascript/site.js";?>'></script>
    <script src='<?php echo $this->getWebViewPath()."javascript/mobile.js";?>'></script>
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/style.css";?>">
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/style_index.css";?>">
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."font/iconfont.css";?>">
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/swiper.css";?>">
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/swiper.min.css";?>">
    <script src='<?php echo $this->getWebViewPath()."javascript/jquery.js";?>'></script>
    <script src='<?php echo $this->getWebViewPath()."javascript/swiper.min.js";?>'></script>
    <script src='<?php echo $this->getWebViewPath()."javascript/swiper.animate.min.js";?>'></script>
</head>

<body>
    <!-- 顶部通栏 -->
            <?php if(IWeb::$app->getController()->getId() == 'site' && (IWeb::$app->getController()->getAction()->getId() == 'index'||IWeb::$app->getController()->getAction()->getId() == 'promotion_goods'||IWeb::$app->getController()->getAction()->getId() == 'recommend_goods'||IWeb::$app->getController()->getAction()->getId() == 'category_list')){?>
            <!-- <div class="header_home" onclick="window.location.href='/'"><i class="icon-home"></i></div>
            <h1 id="page_title" class="page_title"><?php echo $this->_siteConfig->name;?></h1>
            <div class="header_so_btn" onclick="$('.header_search').toggle();"><i class="icon-search"></i></div> -->
            <?php }else{?>
            <header class="header_box">
            <div class="header">
                <div class="header_back" onclick="window.history.back();"><i class="icon-chevron-left"></i></div>
                <h1 id="page_title" class="page_title"><?php echo $this->_siteConfig->name;?></h1>
                <div class="header_so_btn" onclick="window.location.href='/'"><i class="icon-home"></i></div>
            </div>
            </header>
            <?php }?> 
    <!-- 顶部搜索 -->
    <!-- <section class="header_search">
        <form method='get' action="<?php echo IUrl::creatUrl("/");?>">
            <input type='hidden' name='controller' value='site'>
            <input type='hidden' name='action' value='search_list'>
            <input class="keywords" type="text" name='word' autocomplete="off" placeholder="请输入关键词...">
            <input class="submit" type="submit" value="搜索">
        </form>
    </section> -->
    <!-- 引入内页 -->
    <script src="<?php echo $this->getWebViewPath()."javascript/products.js";?>"></script>
<script src="<?php echo $this->getWebViewPath()."javascript/jquery.slider.js";?>"></script>
<section class="goods_photo">
	<ul>
		<?php foreach($photo as $key => $item){?>
		<li>
			<img src="<?php echo IUrl::creatUrl("/pic/thumb/img/".$item['img']."/w/800/h/800");?>">
		</li>
		<?php }?>
	</ul>
</section>

<section class="goods_info">
	<ul>
		<li class="goods_name">
			<?php echo isset($name)?$name:"";?>
		</li>
		<!--抢购活动,引入 "_products_time"模板-->
		<?php if($promo == 'time' && isset($time)){?>
		<?php require(ITag::createRuntime("_products_time"));?>
		<?php }?>

		<!--团购活动,引入 "_products_groupon"模板-->
		<?php if($promo == 'groupon' && isset($groupon)){?>
		<?php require(ITag::createRuntime("_products_groupon"));?>
		<?php }?>
		<?php if($promo == ''){?>
			<?php if($group_price){?>
			<!--当前用户有会员价-->
			<li>
				会员价：<em class="price">￥<span id="data_groupPrice"><?php echo isset($group_price)?$group_price:"";?></span></em>　
				<del class="old_price">￥<span id="data_sellPrice"><?php echo isset($sell_price)?$sell_price:"";?></span></del>
			</li>

			<?php }else{?>
			<!--当前用户普通价格-->
			<li>
				销售价：<em class="price">￥<span id="data_sellPrice"><?php echo isset($sell_price)?$sell_price:"";?></span></em>
				<del class="old_price">￥<span id="data_sellPrice"><?php echo isset($market_price)?$market_price:"";?></span></del>
			</li>
			<?php }?>
		<?php }?>
		<li>
			商品编号：<span class="number" id="data_goodsNo"><?php echo $goods_no?$goods_no:$id;?></span>
		</li>
		<li>
			库存：<span class="number" id="data_storeNums"><?php echo isset($store_nums)?$store_nums:"";?></span>
		</li>
		<li class="area_li">
			<!-- 至
			<a class="sel_area" href="javascript:;" name="localArea">所在地区</a>： -->
			<span id="deliveInfo"></span>
			<!-- <div class="area_box none">
				<ul>
					<li><a data-code="1" href="#J_PostageTableCont"><strong>全部</strong></a></li>
					<?php foreach(Api::run('getAreasListTop') as $key => $item){?>
					<li><a href="javascript:$('.area_box').hide();" name="areaSelectButton" value="<?php echo isset($item['area_id'])?$item['area_id']:"";?>"><?php echo isset($item['area_name'])?$item['area_name']:"";?></a></li>
					<?php }?>
				</ul>
			</div> -->
		</li>
		<li>
			商品重量：<span class="number"><?php echo isset($weight)?$weight:"";?>g</span>
		</li>
		<?php if(isset($seller)){?>
		<?php plugin::trigger("onServiceButton",$seller['id'])?>
		<li>
			商家名称：<strong class="seller_name"><?php echo isset($seller['true_name'])?$seller['true_name']:"";?></strong>
		</li>
		<li>
			商家所在地：<span class="seller_area"><?php echo join(' ',area::name($seller['province'],$seller['city'],$seller['area']));?></span>
		</li>
		<li>
			联系客服：<a class="seller_tel" href="tel:<?php echo isset($seller['phone'])?$seller['phone']:"";?>"><?php echo isset($seller['phone'])?$seller['phone']:"";?></a>
		</li>
		<?php }?>
		<li>
			商品评价：<span class="number"><?php echo isset($comments)?$comments:"";?> 次</span>
		</li>
		<li>
			商品销量：<span class="number"><?php echo isset($sale)?$sale:"";?> 件</span>
		</li>
		<?php if($this->user){?>
		<li>
			收藏商品：<span class="goods_favorite" onclick="favorite_add_ajax(<?php echo isset($id)?$id:"";?>,this);">
				<?php if($this->favorite){?>
				取消收藏
				<?php }else{?>
				点击收藏
				<?php }?>
			</span>
		</li>
		<?php }?>
		<!-- 如果商品数量小于0 -->
		<?php if($store_nums <= 0){?>
		<li>该商品已售完，不能购买，您可以看看其它商品！</li>
		<!-- 商品数量大于0的正常情况 -->
		<?php }else{?>
			<!-- 如果商品有自定义参数 -->
			<?php if($spec_array){?>
			<?php foreach(JSON::decode($spec_array) as $key => $item){?>
			<li>
				<dl class="goods_tags" name="specCols">
					<dt><?php echo isset($item['name'])?$item['name']:"";?>：</dt>
					<dd>
						<?php $specVal=explode(',',trim($item['value'],','))?>
						<?php foreach($specVal as $key => $spec_value){?>
						<?php if($item['type'] == 1){?>
						<span specName="<?php echo isset($item['name'])?$item['name']:"";?>" specId="<?php echo isset($item['id'])?$item['id']:"";?>" specData="<?php echo isset($spec_value)?$spec_value:"";?>">
							<?php echo isset($spec_value)?$spec_value:"";?>
						</span>
						<?php }else{?>
						<span class="img_tags" specName="<?php echo isset($item['name'])?$item['name']:"";?>" specId="<?php echo isset($item['id'])?$item['id']:"";?>" specData="<?php echo isset($spec_value)?$spec_value:"";?>">
							<img src="<?php echo IUrl::creatUrl("")."".$spec_value."";?>">
						</span>
						<?php }?>
						<?php }?>
					</dd>
				</dl>
			</li>
			<?php }?>
			<?php }?>
			<!-- 购买数量调整 -->
			<li>
				<div class="goods_num_adjust">
					<span id="buyReduceButton">-</span>
					<input type='text' id="buyNums" onblur="checkBuyNums();" value="1">
					<span id="buyAddButton">+</span>
				</div>
			</li>
		<?php }?>
	</ul>
	<!-- <a class="read_more" href="<?php echo IUrl::creatUrl("/site/pro_detail/id/".$id."");?>">查看商品详情</a> -->
</section>
<section class="pro_tab">
	<ul>
		<li class="on">商品详情</li>
		<li>规格参数</li> 
		<li>商品评论</li>
		<!--<li>商品咨询</li>-->
	</ul>
</section>
<section class="pro_con">
	<div class="con">
		<?php if(isset($content) && $content){?>
			<article class="article_detail"><?php echo isset($content)?$content:"";?></article>
		<?php }?>
	</div>
	<div class="con none goods_info">
		<ul class="goods-guige">
				<li>商品名称：<?php echo isset($name)?$name:"";?></li>
				<?php if(isset($brand) && $brand){?>
				<li>品牌：<?php echo isset($brand)?$brand:"";?></li>
				<?php }?> <?php if(isset($unit) && $unit){?>
				<li>单位：<?php echo isset($unit)?$unit:"";?></li>
				<?php }?> <?php if(isset($up_time) && $up_time){?>
				<?php $up_time= date("Y-m-d", strtotime($up_time)) ?>
				<li>上架时间：<?php echo isset($up_time)?$up_time:"";?></li>
				<?php }?> <?php if(($attribute)){?> <?php foreach($attribute as $key => $item){?> <?php if($item['name'] && $item['attribute_value']){?>
				<li><?php echo isset($item['name'])?$item['name']:"";?>：<?php echo isset($item['attribute_value'])?$item['attribute_value']:"";?></li>
				<?php }?> <?php }?> <?php }?>
		</ul>
	</div>
	<div class="con none">
		<div id='commentBox'></div>
		<script type='text/html' id='commentRowTemplate'>
		<div class="commet">
			<div class="user">
				<img src="<%=head_ico%>" onerror="this.src='<?php echo $this->getWebSkinPath()."image/user_ico.jpg";?>'" />
			</div>
			<dl class="desc">
				<%=contents%>
			</dl>
		</div>
		<%if(recontents){%>
			<div class="recommet">
				<div class="user"><img src="<?php echo $this->getWebSkinPath()."image/admin_ico.png";?>"></div>
				<div class="desc"><%=recontents%></div>
			</div>
		<%}%>
		</script>
	</div>
	
	<!--<div class="con none">-->
		<!--<?php if($this->user){?>-->
		<!--<div class="question_btn">-->
			<!--<a href="<?php echo IUrl::creatUrl("/site/consult/id/".$id."");?>">我要咨询</a>-->
		<!--</div>-->
		<!--<?php }?>-->
		<!--<div id='referBox'></div>-->
		<!--&lt;!&ndash;购买咨询JS模板&ndash;&gt;-->
		<!--<script type='text/html' id='referRowTemplate'>-->
		<!--<div class="commet">-->
			<!--<div class="user">-->
				<!--<img src="<?php echo IUrl::creatUrl("")."<%=head_ico%>";?>" onerror="this.src='<?php echo $this->getWebSkinPath()."image/user_ico.jpg";?>'" />-->
			<!--</div>-->
			<!--<dl class="desc">-->
				<!--<%=question%>-->
			<!--</dl>-->
		<!--</div>-->
		<!--<%if(answer){%>-->
			<!--<div class="recommet">-->
				<!--<div class="user"><img src="<?php echo $this->getWebSkinPath()."image/admin_ico.png";?>"></div>-->
				<!--<div class="desc"><%=answer%></div>-->
			<!--</div>-->
		<!--<%}%>-->

		<!--</script>-->
	<!--</div>-->
</section>
<div class="btn_bottom_goods">
	<ul class="btn_ico">
		<li>
			<a href="<?php echo IUrl::creatUrl("/");?>">
				<i class="icon-home"></i>
				<span>首页</span>
			</a>
		</li>
		<li>
			<a href="<?php echo IUrl::creatUrl("/simple/cart");?>">
				<i class="icon-shopping-cart"></i>
				<span>购物车</span>
			</a>
		</li>
	</ul>
	<div class="btn_tab">
		<input type="hidden" id="do_cookie" value="<?php echo $this->do_cookie;?>">
		<span id="buyNowButton" class="btn_tab_submit pink">立即购买</span>
		<span id="joinCarButton" class="btn_tab_submit blue">加入购物车</span>
	</div>
</div>
<!--
<div class="kf kfon"><img src="<?php echo $this->getWebSkinPath()."image/share_icon.png";?>"/></div>

<div class=" ewmbox">
	<div class="js-cancel sku-cancel">
    	<div class="cancel-img"></div>
	</div>
  	<img src="<?php echo $this->getWebSkinPath()."image/share.png";?>"/>	
</div>

<script>
$(document).ready(function(){
  $(".kf img").click(function(){
    $(".ewmbox").fadeIn();
  });
	$(".cancel-img").click(function(){
    $(".ewmbox").fadeOut();
  });
});
</script>
-->

<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: '<?php echo $signPackage["timestamp"];?>',
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            'scanQRCode',
            'openLocation',
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
    });
    wx.ready(function () {
        wx.onMenuShareAppMessage({
            link: '<?php echo $test_share["link"];?>',
            desc  : '<?php echo $test_share["desc"];?>',
            imgUrl: '<?php echo $test_share["img_url"];?>',
            trigger: function (res) {

            },
            success: function (res) {
                // tips("分享成功，下单立减5元");
                // $(".ewmbox").fadeOut();
                // $.getJSON("/simple/share_done",'',function(content){
                // });
            },
            cancel: function (res) {
                // tips('已取消');
                // $(".ewmbox").fadeOut();
            },
            fail: function (res) {
                //        alert(JSON.stringify(res));
            }
        });
        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareTimeline({
            link: '<?php echo $test_share["link"];?>',
            desc  : '<?php echo $test_share["desc"];?>',
            imgUrl: '<?php echo $test_share["img_url"];?>',
            trigger: function (res) {

            },
            success: function (res) {
                // tips("分享成功，下单立减5元");
                // $(".ewmbox").fadeOut();
                // $.getJSON("/simple/share_done",'',function(content){
                // });
            },
            cancel: function (res) {
                // tips('已取消');
                // $(".ewmbox").fadeOut();
            },
            fail: function (res) {
                //        alert(JSON.stringify(res));
            }
        });
    });
</script>

<script>
$(function(){
	// 设置焦点图
    $(".goods_photo").MobileSlider({
        width: 720,
        height: 720
    });
    // 隐藏底部焦点图
    hideNav();
	//初始化商品详情对象
	var productInstance = new productClass("<?php echo isset($id)?$id:"";?>","<?php echo isset($this->user['user_id'])?$this->user['user_id']:"";?>","<?php echo isset($promo)?$promo:"";?>","<?php echo isset($active_id)?$active_id:"";?>");
	//城市地域选择按钮事件
	$('.sel_area').focus(
		function(){
			$('.area_box').show();
		}
	);
	$(".article_detail").find('*').each(function(){
		var t = $(this);
		if (t.attr("style")){t.attr("style","")};
		if (t.attr("width")){t.attr("width","")};
		if (t.attr("height")){t.attr("height","")};
	});
	$(".pro_tab").on('click', 'li', function(){
		var t = $(this),i = t.index();
		t.addClass('on').siblings('li').removeClass('on');
		$(".pro_con").children('.con').eq(i).removeClass('none').siblings('.con').addClass('none');
		//滑动按钮绑定事件
		switch(i)
		{
			case 1:
			{
				productInstance.comment_ajax();
			}
			break;

			case 2:
			{
				productInstance.refer_ajax();
			}
			break;

		}
	});
})
</script>

<script>
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
    autoplay : 5000,
    });
</script>
</body>
</html>