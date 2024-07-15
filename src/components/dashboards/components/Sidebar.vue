<template>
    <aside>
      <ul>
        <li><router-link to="/dashboard/home">Home</router-link></li>
        <li><router-link to="/dashboard/profile">Profile</router-link></li>
        <li><router-link to="/dashboard/settings">Settings</router-link></li>
      </ul>
    </aside>
</template>

<style>
    aside {
        width: 200px;
        background-color: #f4f4f4;
        padding: 1rem;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        
    }
</style>