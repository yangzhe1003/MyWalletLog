import{B as c,F as e,ac as n,am as l}from"./index-194426f9.js";const m=async(o,i)=>{try{await c(e);const a=i.map(async s=>{const t=await n(o,s);console.log(t),t&&await l(o,s)});await Promise.all(a)}catch(a){console.log(a)}};export{m as d};
