<template>
    <div class="relative flex justify-evenly" id="profile-bar">
        <div class="navbar-custom profile-bar flex" :color="navbarColorLocal" :class="textColor">
            <profile-photo class="my-3 ml-4"/>
        </div>
        <div class="name-surname flex flex-col justify-center">
            <vs-input icon-pack="feather" icon="icon-edit-2" placeholder="Name" v-model="name"
                      class="is-label-placeholder"/>
            <vs-input icon-pack="feather" icon="icon-edit-2" placeholder="Surname" v-model="surname"
                      class="is-label-placeholder"/>
        </div>
        <div class="flex flex-col justify-center">
            <vs-input class="user-email" disabled label="Email:" placeholder="Your Name" v-model="email"/>
        </div>
        <div class="flex flex-col justify-center">
            <vs-select icon="arrow_drop_down_circle" placeholder="Choose your position" class="selectExample" label="Position:" label-placeholder="vs-Multiple" vs-multiple v-model="select1">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1"/>
            </vs-select>
        </div>
        <div class="flex flex-col justify-center">
            <vs-select icon="arrow_drop_down_circle" placeholder="Choose your hrs:" label="HRs:" multiple vs-autocomplete class="selectExample" v-model="select2">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2"/>
            </vs-select>
        </div>
        <div class="flex flex-col justify-center">
            <vs-select icon="arrow_drop_down_circle" placeholder="Choose your mentors" label="Mentors:" multiple vs-autocomplete class="selectExample" v-model="select3">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options3"/>
            </vs-select>
        </div>
        <div class="flex flex-col justify-center profile-date-block">
            <label class="profile-date-label block mt-3 ml-1">Next checkpoint:</label>
            <div class="flex justify-center">
                <datepicker name="Next checkpoint"
                  format="yyyy-MM-dd"
                  class="mb-4 mt-1 ml-1"
                  placeholder="Select Date"
                  :calendar-button-icon=testIconClass
                  :calendar-button-icon-content=testIcon
                 :calendar-button=test>
                </datepicker>
            </div>
          </div>
    </div>
</template>


<script>
    import profilePhoto from '@/layouts/components/ProfilePhoto.vue'
    import Datepicker from "vuejs-datepicker";

    export default {
        name: 'profile-bar',
        props: {
            navbarColor: {
                type: String,
                default: '#fff'
            }
        },
        components: {
            profilePhoto,
            Datepicker
        },
        data() {
            return {
                name: 'Yasamin',
                surname: 'Alberto',
                email: 'yasamin.alberto@gmail.com',
                select1: [],
                select2: [],
                select3: [],
                options1: [
                    {text: 'Senior software developer', value: 0},
                    {text: 'Software developer', value: 2},
                    {text: 'Junior software developer', value: 3}
                ],
                options2: [
                    {text: 'Alex Zhyvotenko', value: 1},
                    {text: 'Matisa Oleh', value: 2},
                    {text: 'Viktoria Toichkina', value: 3}
                ],
                options3: [
                    {text: 'Viktoria Toichkina', value: 1},
                    {text: 'Alex Zhyvotenko', value: 2},
                    {text: 'Romanych', value: 3}
                ],
                test: true,
                testIcon: 'calendar_today',
                testIconClass: 'vs-icon notranslate icon-scale icon-select vs-select--icon material-icons null'
            };
        },
        computed: {
            navbarColorLocal() {
                return this.$store.state.theme === 'dark' && this.navbarColor === '#fff' ? '#10163a' : this.navbarColor
            },
            verticalNavMenuWidth() {
                return this.$store.state.verticalNavMenuWidth
            },
            textColor() {
                return {'text-white': (this.navbarColor !== '#10163a' && this.$store.state.theme === 'dark') || (this.navbarColor !== '#fff' && this.$store.state.theme !== 'dark')}
            },
            windowWidth() {
                return this.$store.state.windowWidth
            },

            // NAVBAR STYLE
            classObj() {
                if (this.verticalNavMenuWidth === 'default') return 'navbar-default'
                else if (this.verticalNavMenuWidth === 'reduced') return 'navbar-reduced'
                else if (this.verticalNavMenuWidth) return 'navbar-full'
            }
        },
        methods: {
            showSidebar() {
                this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
            }
        }
    }
</script>

