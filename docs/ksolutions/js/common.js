document.body.onload=function(){setTimeout(function(){var e=document.getElementById("preloader");e.classList.contains("done")||e.classList.add("done")},1e3),document.forms[0].onsubmit=function(e){e.preventDefault();var a=$("form"),n=a.serialize(),t=a.attr("action");console.log("data: "+n,"url: "+t),$.ajax({url:t,type:"post",dataType:"json",data:n,success:function(e){var n=document.createElement("form");n.id="payment",n.action="https://pay.piastrix.com/ru/pay",n.method="post",document.body.appendChild(n),(a=$("form#payment")).append('<input type="hidden" name="amount" value="'+e.amount+'" />'),a.append('<input type="hidden" name="currency" value="'+e.currency+'" />'),a.append('<input type="hidden" name="description" value="'+e.description+'" />'),a.append('<input type="hidden" name="payway" value="'+e.payway+'" />'),a.append('<input type="hidden" name="shop_id" value="'+e.shop_id+'" />'),a.append('<input type="hidden" name="shop_order_id" value="'+e.shop_order_id+'" />'),a.append('<input type="hidden" name="sign" value="'+e.sign+'" />'),$("form#payment").submit()}})}};