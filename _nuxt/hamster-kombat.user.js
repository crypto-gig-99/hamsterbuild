import{a as m}from"./Price.vue.BIy693gu.js";import{d as p,i as _,r as f,c as b,q as d,s as C,o as g,a as B,e as s,k,C as l,b as n,t as v,m as x}from"./entry.FoPbLsSY.js";const h={class:"user-balance-large"},N={class:"user-balance-image"},V=p({__name:"BalanceLarge",setup(S){const e=_(),{$listen:t,$stopListen:o}=x(),a=f(!1),i=b(()=>e.balanceCoins>=1e12?"is-32":e.balanceCoins>=1e9?"is-36":""),c=()=>{a.value=!0},r=()=>{a.value=!1};return d(()=>{t("balance-animate:start",c),t("balance-animate:stop",r)}),C(()=>{o("balance-animate:start",c),o("balance-animate:stop",r)}),(L,O)=>{const u=m;return g(),B("div",h,[s("div",{class:l(["user-balance-large-inner",{"pulse-balance":n(a)}])},[s("div",N,[k(u,{class:"is-40"})]),s("p",{class:l(n(i))},v(n(e).getUserBalanceFormatted),3)],2)])}}});export{V as _};
