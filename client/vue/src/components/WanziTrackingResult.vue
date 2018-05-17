<template lang="pug">
div.tracking-result.row
  div.col-xs-12
    a.pull-right(@click="track()" v-if="!expanded") 包裹在哪儿
    a.pull-right(@click="expanded=!expanded" v-else) 知道啦
  
  transition(name="fade")
    div.col-xs-12.loading(v-if='loading')
      <WanziLoader></WanziLoader>

    div.col-xs-12.tracking-result-records(v-if='records != null && expanded')
      div.tracking-result-record(v-for="record in records")
        p 
          strong {{ record.u2lci_time }}
        p {{ record.u2lci_content }}
</template>

<script>
import axios from 'axios';
import WanziLoader from 'components/WanziLoader';

export default {
  name: 'WanziTrackingResult',
  components: {
    WanziLoader
  },
  props: ['tracking'],
  data() {
    return {
      expanded: false,
      records: null,
      errMsg: '',
      loading: false
    };
  },
  watch: {
  },
  filters: {
  },
  methods: {
    track() {
      const self = this;
      if (self.records == null) {
        if (self.tracking && !self.loading) {
          self.loading = true;
          axios.get(`http://uswanzi.com/api/uu/${self.tracking}`, {
            tel: self.tel
          })
          .then((response) => {
            const data = JSON.parse(response.data);
            if (!data.state) {
              self.errMsg = '未查到相关数据，请稍后再试。';
            } else {
              self.records = data.ob;
            }
            self.expanded = true;
            self.loading = false;
          })
          .catch((error) => {
            self.emptyRecord = true;
            self.errMsg = '获取数据失败，请稍后再试。';
            self.loading = false;
            console.log(error);
          });
        }
      } else {
        self.expanded = true;
      }
    }
  }
};

</script>

<style scoped>
.tracking-result .loader {
  position: absolute;
  right: 108px;
  top: -8px;
}
.tracking-result-records {
  font-size: 95%;
  margin: 16px 0 0;
}
.tracking-result-record {
  padding: 10px 10px 6px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;

  background: #1cb495;
  border-bottom: 1px solid #fff;
  margin-left: -15px;
  margin-right: -15px;
  border-left: 8px solid #1fcaa7;
}
</style>
