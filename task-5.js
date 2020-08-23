function getArea(x, y, z){
    let S = (x + y + z)/2
    let Area = S*(S-x)*(S-y)*(S-z)
    return (Math.sqrt(Area))
    }
    console.log(getArea(5,5,5))