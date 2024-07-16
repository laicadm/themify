<template>
    <aside>
      <ul>
        <li><router-link to="/dashboard/home">Buttons</router-link></li>
        <li><router-link to="/dashboard/profile">Fields</router-link></li>
        <li><router-link to="/dashboard/settings">Forms</router-link></li>
        <li><router-link to="/dashboard/settings">Tables</router-link></li>
      </ul>
    </aside>
</template>

<style>
    aside {
        width: 200px;
        background-color: black;
        padding: 1rem;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        
    }
</style>