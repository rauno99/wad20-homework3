<template>
    <div class="grid-container">
        <div v-for="profile in allProfiles"  :key="profile.id" class="grid-item">
            <div class="avatar">
                <img :src="profile.avatar" alt="Profile pic">
            </div>
            <div class="name">
                <h3>{{ profile.firstname }} {{ profile.lastname }}</h3>
            </div>
            <div class="profile-actions">
                <button type="button" name="Follow" class="followButton" @click="toggleFunction($event)">Follow</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Profiles",

        data: function() {
            return {
                clicked: false,
            }
        },

        methods: {
            ...mapActions(['getProfiles']),

            toggleFunction: function(event) {
                let button = event.target;
                button.classList.toggle('followed');
                if (button.innerHTML == "Follow")
                    button.innerHTML = "Followed";
                else
                    button.innerHTML = "Follow"
            }
        },
        computed: mapGetters(['allProfiles']),
        created() {
            this.getProfiles();
        }
    }
</script>

<style scoped>
    .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
    width: 90%;
    height: 200px;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  }

  .avatar img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.name{
    font-size: 50%;
}

.followButton {
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: purple;
    color: white;
    width: 85px;
    height: 30px;
    line-height: 10px;
    text-align: center;
    border: 1px solid purple;
}

    .followButton.followed {
        background-color: white;
        color: purple;
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

     .grid-container{
        display: grid;
        grid-template-columns: auto auto;
        background-color: white;
        margin: 15px 15px;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        border-radius: 5px;
    }
</style>
