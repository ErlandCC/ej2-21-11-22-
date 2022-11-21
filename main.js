function calcularx() {
    var pi = 3.14161592
    var a = pi/8;
    var b = pi/6 ;
    var c = a+b
    var ec1= Math.tan(c)
    var ec2= (Math.tan(a)+Math.tan(b))/(1-(Math.tan(a)*Math.tan(b)))
    if (ec1==ec2) {
        document.getElementById('result').innerHTML = ('La identidad '+ec1+' y '+ec2+' es correcta' )}
    else {
        document.getElementById('result').innerHTML = ('La identidad '+ec1+' y '+ec2+' es incorrecta' )}
}