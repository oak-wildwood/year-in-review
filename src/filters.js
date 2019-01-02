import format from 'date-fns/format';
import Vue from 'vue';

const fromFirebaseTimestamp = value => {
  if (value) {
    return new Date(+value.seconds * 1000);
  }
};

const formatDate = (value, isMobile) => {
  if (value) {
    return isMobile ? format(value, 'MMM Do') : format(value, 'MMMM Do');
  }
};

Vue.filter('fromFirebaseTimestamp', fromFirebaseTimestamp);
Vue.filter('formatDate', formatDate);
