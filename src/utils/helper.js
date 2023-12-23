export const getDiscountedValue = (price)=>{
    const intPrice = parseInt(price.slice(1))
    const discountedValue = intPrice - intPrice * 0.2;
    return discountedValue.toFixed(2);

}
let finalArr = [];
var f = 0;
export const filterData = (data, filters) =>{
    finalArr = []
    data.map((d,idx)=>{
        for(let key in filters){
            if(key === 'price'){
                const myArr = filters[key].split('-')
                const h = parseFloat(myArr[1])
                const l = parseFloat(myArr[0])
                const dis_price = getDiscountedValue(d[key]);
                if(dis_price>=l && dis_price<=h){
                    f = 0;
                    console.log("price match")
                }else{
                    f = 1;
                    console.log("price mismatch")
                    break;
                }
            }else if(key === 'name' || key === 'ROM'){
                let str1 = d[key].toLowerCase();
                let str2 = filters[key].toLowerCase();
                if(!str1.includes(str2)){
                    f=1;
                    break;
                }else{
                    f = 0
                }
            }

        }
        // console.log(f)
        if(f === 0){
            finalArr.push(d);
        }
        f = 0;
    })

    return finalArr
    
    
}