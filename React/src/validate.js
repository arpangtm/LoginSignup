const validateempty=(data,...items)=>{
    var notfound=true

    items.forEach((item)=>{
        console.log(notfound)
        if(notfound){
            if(data.target[item].value===""){
                
                
                document.getElementById(item).style.borderColor="red"
                notfound=false
                
            }else{
                document.getElementById(item).style.borderColor="rgb(114, 114, 114)"
                return true
            }
            return true
        }
           
    })
        
    return notfound
        
    
}

export const validatepassword=(msg,passwords)=>{
    const password=Object.values(passwords)
    const place=Object.keys(passwords)
    console.log(password)
    console.log(place)
    let notfound=true
    password.forEach((pass)=>{
        var k=0   
        if(notfound){
            
            for (var i=0;i<pass.length-1;i++){
                document.getElementById(place[k]).innerHTML=''
                if(pass[i]!=pass[i+1]){
                    document.getElementById(place[k]).innerHTML=msg
                    notfound=false
                }
            } 
            k++
            
        }
        
    })
    return notfound 
    
}

export const passwordlength=(pass,place,length)=>{
    if (document.getElementById(pass).length>8){
        document.getElementById(place).innerHTML='Password length should be greater then '+length
        return true
    }else{
        return false
    }
}

export default validateempty