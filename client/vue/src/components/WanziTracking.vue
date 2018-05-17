<template lang="pug">
div#content.container-fluid
  div#content-title.row
    div.col-xs-12
      h1
        small.bold 快递自助查询

  div#content-meta.row
    div.col-xs-12
      p 为了方便亲们能够随时随地快捷方便的查询自己的包裹，小丸子特地制作了这个页面。时差再也不是问题啦！

  div.form-group
    input(
      v-model='tel'
      v-bind:class="{err:errorMessage}"
      id='telephone'
      type='tel'
      name='phoneNumber'
      placeholder='电话号码'
      class="form-control",
      autocomplete="off"
    )

  p(v-if='errorMessage' class='text-danger') {{ errorMessage }}

  button(id="btn-search-shipments" type='button' class="btn btn-block btn-green" @click.prevent="search") 查询

  div#shipments
    transition(name="fade")
      div(v-if="shipments.length > 0")
        template(v-for="shipment in shipments")
          div.card
            p.date
              strong 录入日期: 
              span {{ shipment.created | date }}

            p.desc
              strong 物品明细: 
              span {{ shipment.description }}

            p.action
              strong 快递号: 
              span {{ shipment.tracking }}
            
            <WanziTrackingResult :tracking=shipment.tracking></WanziTrackingResult>
      div(v-else-if="searched")
        p 未找到相关记录

</template>

<script>
import axios from 'axios';
import WanziTrackingResult from 'components/WanziTrackingResult';

export default {
  name: 'WanziTracking',
  components: {
    WanziTrackingResult
  },
  data() {
    return {
      tel: '',
      errorMessage: '',
      searched: false,
      shipments: []
    };
  },
  watch: {
    tel() {
      localStorage.setItem('LAST_SEARCHED_TEL', this.tel);
    }
  },
  filters: {
    date(value) {
      return !value ? '' : value.replace('T', ' ').replace(':00.000Z', '');
    }
  },
  methods: {
    search() {
      this.errorMessage = '';

      if (document.querySelector('#telephone').value === '') {
        this.errorMessage = '请输入您的电话号码';
      } else {
        const self = this;

        axios.post('http://uswanzi.com/api/Shipments/byTel', {
          tel: self.tel
        })
        .then((response) => {
          self.shipments = response.data.shipments;
        })
        .catch((error) => {
          console.log(error);
        });

        this.searched = true;
      }
    }
  },
  mounted() {
    const lastSearchTel = localStorage.getItem('LAST_SEARCHED_TEL');
    if (lastSearchTel != null) {
      this.tel = lastSearchTel;
    }
  }
};
</script>

<style scoped>
.err {
  border-color: #d67871;
}
.btn-green {
  appearance: none;
  background-color: #1cb495;
  color: #fff !important;
}
.btn-green:hover {
  transition: background-color 0.2s ease-in-out;
  background-color: #1fcaa7;
}
.btn-green:active {
  transition: background-color 0.2s ease-in-out;
  background-color: #199e83;
}
.card {
  font-size: 95%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 15px;
}

#telephone {
  font-size: 16px;
}

#content-title h1 {
  margin: 20px 0 16px;
}
#content-title h1 > small {
  display: block;
}
#content-meta {
  margin-top: 10px;
  margin-bottom: 16px;
}

#shipments {
  margin-top: 25px;
}

#btn-search-shipments {
  margin: 20px 0 30px;
}
</style>
