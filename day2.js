/**
 * Created by Administrator on 2019/2/13.
 */
(function () {
    var index;
    var param=[];
    var imglength = document.getElementsByClassName("img").length;
    for(var i =0;i<imglength;i++){
        param.push($(".sdiv img").eq(i).attr("src"))
    }
    console.log(param);
    $("figcaption").click(function () {
        console.log("进来了");
        var newimgSrc = $(this).prev().attr("src");
        for(var i=0;i<imglength;i++){
            if(newimgSrc == param[i]){
                $(".imgbox").attr("src",newimgSrc);
                $("#zzc").show();
                index = i
            }
        }
    });
    $(".close").on("click",function () {
        $("#zzc").hide();
    });

    $(".left").click(function () {
        if(index>0){
            index -=1;
            var img= param[index];
            console.log(img);
            $(".imgbox").attr("src",img);
        }else{
            alert("这是第一页")
        }
    });
    $(".right").click(function () {
        if(index<imglength-1){
            index +=1;
            var img= param[index];
            console.log(img);
            $(".imgbox").attr("src",img);
        }else{
            alert("这是最后一页")
        }
    });
})();
