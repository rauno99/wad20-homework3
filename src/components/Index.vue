<template>
    <div>
        <header>
            <nav>
                <div class="logo-container">
                <img src="../assets/logo.png" alt="postIt">
                </div>
                <div class="search-container">
                <input type="text" name="search"><button type="button">Search</button>
                </div>
                <div class="avatar-container">
                <img @click="dropDownClicked = !dropDownClicked" class="avatar" :src="theUser.avatar" >
                <div id="myDropdown" class="drop-down-container" v-show='dropDownClicked'>
                    <span id="user-name">{{ theUser.firstname }} {{theUser.lastname}}</span>
                    <span id="user-email">{{ theUser.email }}</span>
                    <span class="separator"></span>
                    <span>
                        <router-view />
                        <router-link tag="a" to="Browse" >Browse</router-link>
                    </span>
                    <span class="separator"></span>
                    <span>
                        <router-view />
                        <router-link tag="a" to="/" >Log Out</router-link>
                    </span>
                </div>
                </div>
            </nav>
        </header>
        <section class="main-container">
            <Posts></Posts>
        </section>
    </div>
</template>

<script>
import Posts from "./Posts"
import { mapGetters , mapActions} from 'vuex'

export default {
    name: 'Index',
    components: {
        Posts
    },
    data: function () {
        return {
            dropDownClicked: false
        }
    },
    methods: mapActions(['getUser']),
    computed: mapGetters(['theUser']),
    created() {
        this.getUser();
    }
}


</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
    * {
        font-family: 'Roboto Slab', serif;
        outline: none;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .main-container {
        width: 50%;
        min-height: 100%;
        margin: auto auto;
        padding: 90px 15px 15px 15px;
        background-color: #ffffff;
    }

    body {
        background-color: #0277bd;
        color: #263238;
    }

    a {
        color: #40c4ff;
    }

    button {
        padding: 8px 16px;
        margin: 4px 0;
        color: #ffffff;
        background-color: #01579b;
        border: none;
        border-radius: 4px;
    }

    button:hover {
        box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
        cursor: pointer;
    }

    header {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }

    header:hover {
        box-shadow: 0 -20px 30px #4d4d4d;
    }

    nav {
        display: flex;
        background-color: #ffffff;
        align-items: center;
    }

    nav div {
        height: 30px;
        flex-grow: 4;
        padding: 10px;
    }

    nav div img {
        height: 100%;
        width: 30px;
        margin-left: 15px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top center;
        cursor: pointer;
    }

    nav div.search-container > input {
        box-sizing: border-box;
        height: 30px;
        width: 80%;
        margin: 0;
        padding: 5px;
        border: 1px solid #e0e0e0;
    }

    nav div.search-container > button {
        height: 30px;
        width: 20%;
        margin: 0;
        padding: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    nav div.avatar-container {
        margin-right: 15px;
        text-align: right;
    }

    .drop-down-container {
        position: absolute;
        min-width: 150px;
        height: auto;
        background-color: #ffffff;
        padding: 10px;
        right: 0;
        top: 50px;
        text-align: left;
    }
    .drop-down-container span{
        display: block;
    }
    .drop-down-container span.separator{
        border-bottom: 1px solid #d7d7d7;
        margin: 10px -10px;
    }

</style>
