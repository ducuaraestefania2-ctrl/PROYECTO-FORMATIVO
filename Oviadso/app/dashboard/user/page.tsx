"use client "
import { useEffect } from "react";

function Responsiblepage(){
  //Primero llama la funcion fetch para traer la informacion
  useEffect(() => {
    const fetchUser = async () => {
      alert("HOLA")
      const response = await fetch("http://localhost:3000/api/user/userAll")
      let reJson =  await response.json()
      console.log(reJson)
    }
    fetchUser();
  })
}
import TableUser from "@/components/user/tableUser";

export default function User() {
  return (
    <>
  
      <TableUser />
    </>
  );
}