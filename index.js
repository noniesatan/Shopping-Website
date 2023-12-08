var product = [{
    id: 1,
    img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D',
    name:'nike',
    price: 550,
    desription:'Nike - dsa f dsfasdf sdf dsa saf sdfa sdf ',
    type:'shoe'
},{
    id: 2,
    img:'https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFkaWRhc3xlbnwwfHwwfHx8MA%3D%3D',
    name:'adidas shirt',
    price: 200,
    desription:'Addidas - dsa f dsfasdf sdf dsa saf sdfa sdf ',
    type:'shirt'
},{
    id: 3,
    img:'https://images.unsplash.com/photo-1593169158019-e33d5a325c4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldyUyMGJhbGFuY2V8ZW58MHx8MHx8fDA%3D',
    name:'new balance',
    price: 500,
    desription:'Nike - dsa f dsfasdf sdf dsa saf sdfa sdf ',
    type:'shoe'
},{
    id: 4,
    img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZhbiUyMHNob2V8ZW58MHx8MHx8fDA%3D',
    name:'van',
    price: 650,
    desription:'Van - dsa f dsfasdf sdf dsa saf sdfa sdf ',
    type:'shoe'
},{
    id: 5,
    img:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2V8ZW58MHx8MHx8fDA%3D',
    name:'nike',
    price: 650,
    desription:'Nike - dsa f dsfasdf sdf dsa saf sdfa sdf ',
    type:'shoe'
},{
    id: 6,
    img:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D',
    name:'nike',
    price: 750,
    desription:'Nike - dsa f dsfasdf sdf dsa saf sdfa sdf ',
    type:'shoe'
},{
    id: 7,
    img:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2V8ZW58MHx8MHx8fDA%3D',
    name:'nike',
    price: 580,
    desription:'Nike - dsa f dsfasdf sdf dsa saf sdfa sdf ',
    type:'shoe'
},{
    id: 8,
    img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
    name:'kiikii shirt',
    price: 1100,
    desription:'KiiKii - Original dsfasdf sdf dsa saf sdfa sdf ',
    type:'shirt'
},{
    id: 9,
    img:'https://images.unsplash.com/photo-1585032767761-878270336a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlrZSUyMHNoaXJ0fGVufDB8fDB8fHww',
    name:'nike shirt',
    price: 180,
    desription:'nike - Original dsfasdf sdf dsa saf sdfa sdf ',
    type:'shirt'
},{
    id: 10,
    img:'https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcHxlbnwwfHwwfHx8MA%3D%3D',
    name:'worthy cap',
    price: 90,
    desription:'Worthy cap - Original accesories sdf dsa saf sdfa sdf ',
    type:'accesorie'
},{
    id: 11,
    img:'https://images.unsplash.com/photo-1576664839181-e08ac3624a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnZlcnNlfGVufDB8fDB8fHww',
    name:'converse',
    price: 350,
    desription:'Converse shoe - dsa f dsfasdf sdf dsa saf sdfa sdf ',
    type:'shoe'
}];

$(document).ready(()=> {
    var html = '';
    for (let i = 0; i< product.length; i++){
        html += `<div onclick="openProductDetail(${i})" class="product-item ${product[i].type}">
        <img src="${product[i].img}" alt="">
        <p class="">
            ${product[i].name}
        </p>
        <p style="font-size: 1vw;">${"AUD "+ numberWithCommas(product[i].price) }</p>
        </div>`;

    }
    $("#productlist").html(html);
})
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem){
    // console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)


    var html = '';
    for (let i = 0; i< product.length; i++){
        if(product[i].name.includes(value) || product[i].type.includes(value) ){
            html += `<div onclick="openProductDetail(${i})" class="product-item ${product[i].type}">
        <img src="${product[i].img}" alt="">
        <p class="">
            ${product[i].name}
        </p>
        <p style="font-size: 1vw;">${numberWithCommas(product[i].price) }</p>
        </div>`;



        }
        

    }
    if(html==''){
        $("#productlist").html(`<p> Not found product </p>`);
    } else{
    $("#productlist").html(html);
    }
}
function searchproduct(param){
    $(".product-item").css('display','none')
    if(param == 'all'){
        $(".product-item").css('display','block')
    }
    else{
        $("."+param).css('display','block')
    }
}
var productindex = 0;
function openProductDetail(index){
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display','flex')
    $("#mdd-img").attr('src',product[index].img);
    $("#mdd-name").text(product[index].name);
    $("#mdd-price").text('AUD '+numberWithCommas(product[index].price));
    $("#mdd-desc").text(product[index].desription);



}
function closeModal(){
    $(".modal").css('display','none')

}
var cart = [];
function addtocart(){
    var pass = true;
    for (let i=0; i < cart.length; i++){
        if( productindex == cart[i].index){
            console.log("found same product")
            cart[i].count++;
            pass = false;
        }

    }
    if(pass){
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1

        };
        // console.log(obj)
        cart.push(obj)
    }
    console.log(cart)
    
    
    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' To Cart!'

    }
    )
    $("#cart_count").css('display','flex').text(cart.length)


}
function Opencart(){
    $("#modalcart").css('display','flex')
    rendercart();

}
function rendercart(){
    if(cart.length > 0 ){
        var html = '';
        for(let i =  0; i < cart.length; i++){
            html += `<div class="cartlist-items">
                <div class="cartlist-left">
                    <img src="${cart[i].img}" alt="">
                    <div class="cartlist-detail">
                        <p style="font-size: 1.5vw;">${cart[i].name}</p>
                        <p style="font-size: 1.2vw;">${"AUD "+numberWithCommas(cart[i].price*cart[i].count)}</p>
                    </div>
                        
                </div>
                <div class="cartlist-right">

                    <P onclick="deinitems('-',${i})" class="btnc">-</P>
                    <p id="countitems${i}" style="margin: 0 20px; font-size: 1.5vw;" >${cart[i].count}</p>
                    <p onclick="deinitems('+',${i})"  class="btnc">+</p>
                </div>
            </div>`;

        }
        $("#mycart").html(html)
    }
    else{
        $("#mycart").html(`<p>Not found any item</p>`)
    }


}
function deinitems(action,index){
    if (action == '-'){
        if(cart[index].count > 0){
            cart[index].count--;
                $("#countitems"+index).text(cart[index].count)

                if(cart[index].count <= 0){
                    swal.fire({
                        icon: 'warning',
                        title: 'Are you sure to delete this item ?',
                        showConfirmButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Delete',
                        cancelButtonText: 'Cancel'
                    }).then ((res) => {
                        if(res.isConfirmed){
                            cart.splice(index,1)
                            console.log(cart)
                            rendercart();
                            $("#cart_count").css('display','flex').text(cart.length)

                            if(cart.length <=0){
                                $("#cart_count").css('display','none')
                            }
                        }else{
                            cart[index].count++;
                            $("#countitems"+index).text(cart[index].count)

                        }
                        
                    })
                }
        }
    }else if(action == '+'){
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
    }


}