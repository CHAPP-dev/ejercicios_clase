    // Crea una lista de números pares del 2 al 20 utilizando un bucle while. // No he utilizado módulo [%] ya que el ejercicio no lo requería
    console.log("Ejercicio 1 Output")
    var Nums = new Array(10)
    var i = 0
    while(i< Nums.length){
    Nums[i] = (i+1)*2
    i++    
    }
    console.log(Nums)
    // Crea una lista de números impares del 1 al 19 utilizando un bucle for. // No he utilizado módulo [%] ya que el ejercicio no lo requería
    console.log("Ejercicio 2 Output")
    var Nums = new Array(10)
    for(var i = 0 ; i < (Nums.length) ; i++ ){
    Nums[i] = (i+0.5)*2
    }
    console.log(Nums)
    // Crea una lista de comida.
    console.log("Ejercicio 3 Output")
    var Comida = ["Comida A","Comida B","Comida C","Comida D"]
    console.log(Comida)
    // Agrega un elemento al principio de la lista de comida que creaste en el ejercicio anterior.
    console.log("Ejercicio 4 Output")
    var Comida = ["Comida A","Comida B","Comida C","Comida D"]
    console.log(Comida)
    Comida.splice(0,0,"Comida A-1")//<< Aquí esta el elemento añadido
    console.log(Comida)
    // Accede al segundo elemento de la lista de comida y cambia su valor por otro diferente.
    console.log("Ejercicio 5 Output")
    var Comida = ["Comida A","Comida B","Comida C","Comida D"]
    console.log(Comida)
    Comida.splice(1,1,"Comida B 2.0")//<< Aquí esta el elemento de reemplazo
    console.log(Comida)
    // Recorre la lista de comida utilizando un bucle while y muestra cada elemento en la consola.
    console.log("Ejercicio 6 Output")
    var Comida = ["Comida A","Comida B","Comida C","Comida D"]
    var i = 0;
    while( i < Comida.length){
    console.log(Comida[i])
    i++
    }
    // Crea una función que reciba una lista como parámetro y devuelva el último elemento de la lista.
    console.log("Ejercicio 7 Output")
    var Comida = ["Comida A","Comida B","Comida C","Comida D"]
    function Get_Last_Element(list){
    return list[list.length-1]
    }
    console.log(Get_Last_Element(Comida))
    // Crea una función que reciba una lista y un elemento como parámetros y agregue el elemento a la lista si no se encuentra en ella.
    console.log("Ejercicio 8 Output")
    var Comida = ["Comida A","Comida B","Comida C","Comida D"]
    function Unless_on_list_add(list,element){
        for(var i = 0 ;i<list.length;i++){
        if(list[i]==element){
        console.log("El elemento: " + element +" si se encontraba en la lista.")
        return list
        }
        }
        console.log("El elemento: " + element +" no se encontraba en la lista y se ha insertado.")
        list.push(element)
        return list
    }
    console.log(Unless_on_list_add(Comida,"Comida A"))
    console.log(Unless_on_list_add(Comida,"Comida W"))

    // Crea una función que reciba una lista como parámetro y devuelva una nueva lista con los elementos de la lista original en orden inverso.
    console.log("Ejercicio 9 Output")
    var Comida = ["Comida A","Comida B","Comida C","Comida D"]
    function InvertArray(list){
      list.reverse()  
      return list
    }
    console.log(Comida)
    console.log(InvertArray(Comida))
   
    // Crea una función que reciba una lista de números como parámetro y devuelva la suma de todos los números de la lista.
    console.log("Ejercicio 10 Output")
    var Lista = [1 , 1, "Not a Number" , false] // <----- Añada los elementos aquí
    function SumAllNumsFromArray(list){
    var Sum = 0 
    for(var i= 0;i<list.length;i++){
    if(typeof(list[i]) == "number"){
    Sum +=list[i]
    }else{
    console.log("Element: "+ list[i] +" no es un 'number', no es sumado.")    
    }
    }
    return Sum
    }
    console.log(Lista)
    console.log(SumAllNumsFromArray(Lista))
    // Crea una función que reciba una lista de números como parámetro y devuelva la media de todos los números de la lista.
    console.log("Ejercicio 11 Output")
    var Lista = [10 , 0 , 0 , 10, "Foo"] // <----- Añada los elementos aquí
    function SumAllNumsFromArrayMedia(list){
    var Sum = 0 
    var N = 0
    for(var i= 0;i<list.length;i++){
    if(typeof(list[i]) == "number"){
    Sum +=list[i]
    N++
    }else{
    console.log("Element: "+ list[i] +" no es un 'number', no es tomado en cuenta.")    
    }
    }
    if(N==0){
    return 0    
    }
    return (Sum/N)
    }
    console.log(Lista)
    console.log(SumAllNumsFromArrayMedia(Lista))
///////////////////////////////////////////////////////////////////////////////////////////////////////