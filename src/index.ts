import { preguntar } from './lib/consola.ts';


function repetirLetra(letra: string, cantidad: number): string {


  let i = 0;
  let res = "";


//   while (i <= cantidad)
// {
//   let u = 0;
//   while (u < cantidad)
//   {
//     res+= letra;
//     u++;
//   }
//   if (u === cantidad )
// {
//   u = 0;
//   res += "\n";
// }
// i++;
// }

while (i <= cantidad)
{
  i++;
  let u = 0;

  while (u < cantidad)
  {
    res += letra;
    u++;

  }
  if(u === cantidad)
  {
    u = 0;
    res += "\n";
  }



}



return res;
}


let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));


console.log(repetirLetra(caracter, tamaño));